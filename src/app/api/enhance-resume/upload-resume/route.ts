// app/api/enhance-resume/upload-resume/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { PassThrough } from 'stream';
import pdfParse from 'pdf-parse';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  // Ensure the 'uploads' directory exists
  const uploadDir = path.join(process.cwd(), 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Path for the uploaded file
  const filePath = path.join(uploadDir, 'uploaded-file.pdf');

  return new Promise((resolve, reject) => {
    const writableStream = fs.createWriteStream(filePath);
    const passThroughStream = new PassThrough();

    // Check if the body is a readable stream
    const bodyStream = req.body;
    if (!bodyStream || typeof bodyStream.getReader !== 'function') {
      return reject(NextResponse.json({ error: 'Invalid request body' }, { status: 400 }));
    }

    // Convert ReadableStream to Node.js stream
    const reader = bodyStream.getReader();
    reader.read().then(function processText({ done, value }) {
      if (done) {
        passThroughStream.end();
        return;
      }

      passThroughStream.write(value);
      reader.read().then(processText);
    }).catch((error) => {
      passThroughStream.destroy(error);
    });

    passThroughStream.pipe(writableStream);

    writableStream.on('finish', async () => {
      try {
        // Extract text from the PDF
        // const dataBuffer = fs.readFileSync(filePath);
        // const data = await pdfParse(dataBuffer);
        // const text = data.text;

        // Send resume text data to OpenAI GPT-4 for analysis
        const response = await openai.completions.create({
          model: 'gpt-3.5-turbo',
        //   prompt: `Analyze and suggest improvements for the following resume content:\n\n${text}`,
            prompt: "Suggest some good movie names in hollywood.",
          max_tokens: 150,
        });

        // Clean up by removing the file
        fs.unlinkSync(filePath);

        // Send the response
        resolve(
          NextResponse.json({
            filePath,
            suggestions: response.choices[0].text,
          })
        );
      } catch (error) {
        console.error('Error processing the file:', error);
        fs.unlinkSync(filePath);
        reject(NextResponse.json({ error: 'Failed to process file' }, { status: 500 }));
      }
    });

    writableStream.on('error', (err) => {
      console.error('File upload error:', err);
      reject(NextResponse.json({ error: 'Failed to upload file' }, { status: 500 }));
    });
  });
}
