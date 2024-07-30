import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: NextRequest) {
    try {
        const { text } = await req.json();

        const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error('API key not found');
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const prompt = `give me the suggestions, enhancement improvements which increase
         the ATS score for this resume content, content: ${text}. Generate with respect 
         to each and every side heading of the resume content`

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const generatedText = await response.text();

        return new NextResponse(JSON.stringify({ suggestions: generatedText }), { status: 200 });
    } catch (error) {
        console.error('Error generating the suggestions:', error);
        return new NextResponse('Error Generating the Suggestions', { status: 500 });
    }
}
