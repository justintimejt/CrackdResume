import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { templatePrompts } from "../../constants/templatePrompts";

const ai = new GoogleGenerativeAI(process.env.GEMINI_KEY!);

type TemplateName = keyof typeof templatePrompts;

export async function POST(req: Request) {
    try {

        const { template, formData } = await req.json();

        const selectedPrompt = templatePrompts[template as TemplateName];
        if (!selectedPrompt) {
          return NextResponse.json({ error: "Invalid template selection." }, { status: 400 });
        }

        const prompt = `${selectedPrompt}

            Output: generate a resume based on the following user data:
            \n\n${JSON.stringify(
            formData,
            null,
            2
          )}\n\nRespond with ONLY LaTeX code, no explanation.`;
      
        const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

        console.log(prompt); //debug
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const latex = await response.text();
        
        return NextResponse.json({ latex });
    } catch (error) {
        console.error("Gemini API Error:", error);
        return NextResponse.json({ error: "Failed to generate LaTeX resume" }, { status: 500 });
    }
}