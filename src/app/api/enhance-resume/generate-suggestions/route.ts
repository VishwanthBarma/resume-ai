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

        const prompt = `Review the following resume content and provide concise, actionable suggestions for improvement with a focus on increasing ATS (Applicant Tracking System) compliance. Keep each suggestion brief and avoid exceeding a total of 500 words.

        1. **Avoid Repetition**: Identify repeated words or phrases and suggest alternatives.
        2. **Spelling and Grammar**: Point out any spelling or grammatical errors and provide corrections.
        3. **Quantify Impact**: Add specific, quantifiable achievements to the experience section.
        4. **Formatting and Keywords**: Ensure proper formatting and include relevant keywords from the job description.
        5. **Content Relevance**: Verify that the content is relevant and organized with distinct sections.
        6. **Section-Specific Feedback**: Provide brief suggestions for each resume section, including Contact Information, Summary/Objective, Work Experience, Education, Skills, and Certifications or Achievements.
        
        Resume content:
        ${text}
        
        Please provide your suggestions in a clear and structured format, addressing each point above in a maximum of 700 words.
        The output format should be: for every suggestion, give heading and its description, that's it dont give anything else, like:
        {
            suggestions: [
                {
                    heading: [suggestion heading],
                    description: [suggestion description]
                }, {
                    heading: [suggestion heading],
                    description: [suggestion description]
                }
            ]
        }

        Give me the correct json format without voilating the rules of JSON object, give me the accurate json object.
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
