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

        const prompt = `Review the following technical experience i.e company name, role, description content and provide concise, actionable suggestions for improvement with a focus on increasing ATS (Applicant Tracking System) compliance.
        Include some matrix in the points.

        Job content:
        ${text}
        
        Give me the well defined output as two points from the description so that i can put it in my resume,
        Just give me 2 points of bullet point, where each point should no exceed 80 words, dont give any other explanation.
        Output should be a string, with two bullet point points, each point shoudl start with '-'.
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
