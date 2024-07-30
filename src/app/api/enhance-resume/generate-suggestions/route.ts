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

        const prompt = `
        Review the following resume content and provide detailed suggestions for improvement with a focus on increasing ATS (Applicant Tracking System) compliance:

        1. **Avoid Repetition**: Identify and suggest alternatives for repeated words and phrases.
        2. **Spelling and Grammar**: Check for and suggest corrections for any spelling or grammatical errors.
        3. **Quantify Impact**: Improve the experience section by adding specific, quantifiable achievements and examples. 
        4. **Formatting and Keywords**: Ensure proper formatting and include relevant keywords that align with the job description.
        5. **Content Relevance**: Verify that the content is relevant, includes a distinct skills section, and follows conventional headings like "Work Experience" and "Education".
        6. **Section-Specific Feedback**: Provide specific suggestions for each section of the resume, including Contact Information, Summary/Objective, Work Experience, Education, Skills, and any Certifications or Achievements. Ensure that each section is correctly formatted, complete, and relevant to the job description.

        Resume content:
        ${text}

        Please provide your suggestions in a clear and structured format, addressing each point above.
    `

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const generatedText = await response.text();

        return new NextResponse(JSON.stringify({ suggestions: generatedText }), { status: 200 });
    } catch (error) {
        console.error('Error generating the suggestions:', error);
        return new NextResponse('Error Generating the Suggestions', { status: 500 });
    }
}
