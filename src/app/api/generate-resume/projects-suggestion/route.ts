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

        const prompt = `Review the following Project content i.e project name, techstack, description content and provide concise, actionable suggestions for improvement with a focus on increasing ATS (Applicant Tracking System) compliance.
        Include some matrix in the points, include some matrix in the points even if the project content doesn't have, consider project techstack,
        like: improved 90%, acheived 95%, optimized 80% and etc,these are examples so in the same way use some well defined matrix which relates to the job content.

        Project content:
        ${text}

        Consider techstack from project content and use in the output.
        
        Give me the well defined output as two points from the description so that i can put it in my resume,
        Just give me 2 points of bullet point, where each point should no exceed 80 words, dont give any other explanation.
        Output should be a string without any special characters like * only just with two bullet point points at the beginning, like each point should start with '•'.
        `
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const generatedText = await response.text();

        return new NextResponse(JSON.stringify({ suggestion: generatedText }), { status: 200 });
    } catch (error) {
        console.error('Error generating the suggestions:', error);
        return new NextResponse('Error Generating the Suggestions', { status: 500 });
    }
}
