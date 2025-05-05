import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const ai = new GoogleGenerativeAI(process.env.GEMINI_KEY!);

export async function POST(req: Request) {
    try {

        const { template, formData } = await req.json();

        const prompt = `
            Instructions: Use the ${template} LaTeX template
            Follow the format of this template on overleaf: https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs
            Formatting Rules
            Use \\documentclass{article}.

            Do not include section numbering. Use \\section*{} for all section headers.

            Use professional fonts only: recommend \\usepackage{times}, palatino, or similar.

            Keep the layout compact and within 1 page only.

            Header
            Centered at the top: Full Name in large bold font (e.g., \\Huge \\textbf{Jake Ryan}).

            Below that, add one line of contact info:

            Phone \\textbar{} Email \\textbar{} LinkedIn \\textbar{} GitHub

            Education
            \\section*{Education}

            For each entry:

            \\textbf{University Name} on the left

            Italic degree title

            Location and date on the right using \\hfill or \\begin{flushright}

            Experience
            \\section*{Experience}

            Bold job title left, date right

            Italic company name

            Bullet points using:

            latex
            Copy code
            \\begin{itemize}
            \\item ...
            \\item ...
            \\end{itemize}

            Projects
            \\section*{Projects}

            Bold project name, italic tech stack

            Bullet points with features or accomplishments

            Technical Skills
            \\section*{Technical Skills}

            Bold category headers: \\textbf{Languages:} followed by  "|" and then comma-separated values

            Output: generate a resume based on the following user data:
            \n\n${JSON.stringify(
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