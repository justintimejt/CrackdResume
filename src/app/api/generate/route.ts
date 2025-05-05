import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const ai = new GoogleGenerativeAI(process.env.GEMINI_KEY!);

export async function POST(req: Request) {
    try {

        const { template, formData } = await req.json();

        const prompt = `Using the ${template} LaTeX template, generate a resume based on the following user data:\n\n${JSON.stringify(
            formData,
            null,
            2
          )}\n\nRespond with ONLY LaTeX code, no explanation.`;
      
        const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const latex = await response.text();
        
        return NextResponse.json({ latex });
    } catch (error) {
        console.error("Gemini API Error:", error);
        return NextResponse.json({ error: "Failed to generate LaTeX resume" }, { status: 500 });
    }
}