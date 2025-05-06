import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const ai = new GoogleGenerativeAI(process.env.GEMINI_KEY!);

export async function POST(req: Request) {
    try {

        const { template, formData } = await req.json();

        const prompt = `
            Instructions: Use the ${template} LaTeX template
            Follow the format of this template on overleaf: https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs
            
            You are an expert LaTeX resume builder. Using the provided JSON data, generate a resume that replicates Jake Gutierrez's Overleaf resume template EXACTLY in terms of structure, formatting, and LaTeX code. Use ONLY LaTeX.

Reference Template: https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs

%-------------------------
% DOCUMENT SETUP (use exactly)
%-------------------------
\\documentclass[letterpaper,11pt]{article}
\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\input{glyphtounicode}

\\pagestyle{fancy}
\\fancyhf{}
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}
\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Section formatting
\\titleformat{\\section}{\\vspace{-4pt}\\scshape\\raggedright\\large}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

\\pdfgentounicode=1

% Custom commands
\\newcommand{\\resumeItem}[1]{\\item\\small{#1 \\vspace{-2pt}}}
\\newcommand{\\resumeSubheading}[4]{\\vspace{-2pt}\\item \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r} \\textbf{#1} & #2 \\\\ \\textit{\\small#3} & \\textit{\\small #4} \\end{tabular*}\\vspace{-7pt}}
\\newcommand{\\resumeProjectHeading}[2]{\\item \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r} \\small#1 & #2 \\end{tabular*}\\vspace{-7pt}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}
\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}

%-------------------------
% RESUME STARTS HERE
%-------------------------

\\begin{document}

%----------HEADING----------
\\begin{center}
    \\textbf{\\Huge \\scshape Jake Ryan} \\\\ \\vspace{1pt}
    \\small 123-456-7890 $|$ \\href{mailto:x@x.com}{\\underline{jake@su.edu}} $|$
    \\href{https://linkedin.com/in/...}{\\underline{linkedin.com/in/jake}} $|$
    \\href{https://github.com/...}{\\underline{github.com/jake}}
\\end{center}

%-----------EDUCATION-----------
\\section{Education}
\\resumeSubHeadingListStart
  \\resumeSubheading{Southwestern University}{Georgetown, TX}{Bachelor of Arts in Computer Science, Minor in Business}{Aug. 2018 -- May 2021}
  \\resumeSubheading{Blinn College}{Bryan, TX}{Associate's in Liberal Arts}{Aug. 2014 -- May 2018}
\\resumeSubHeadingListEnd

%-----------EXPERIENCE-----------
\\section{Experience}
\\resumeSubHeadingListStart
  \\resumeSubheading{Undergraduate Research Assistant}{June 2020 -- Present}{Texas A\\&M University}{College Station, TX}
  \\resumeItemListStart
    \\resumeItem{Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems}
    \\resumeItem{Built a web app using Flask, React, PostgreSQL, and Docker}
  \\resumeItemListEnd

  \\resumeSubheading{IT Support Specialist}{Sep. 2018 -- Present}{Southwestern University}{Georgetown, TX}
  \\resumeItemListStart
    \\resumeItem{Set up and maintained 200+ devices campus-wide}
    \\resumeItem{Provided Tier-1 troubleshooting for faculty and students}
  \\resumeItemListEnd
\\resumeSubHeadingListEnd

%-----------PROJECTS-----------
\\section{Projects}
\\resumeSubHeadingListStart
  \\resumeProjectHeading{\\textbf{Gitlytics} $|$ \\emph{Python, Flask, React}}{June 2020 -- Present}
  \\resumeItemListStart
    \\resumeItem{Visualized GitHub data to analyze team collaboration}
    \\resumeItem{Built using Docker, PostgreSQL, Celery, and Redis}
  \\resumeItemListEnd

  \\resumeProjectHeading{\\textbf{Simple Paintball} $|$ \\emph{Spigot API, Java}}{May 2018 -- May 2020}
  \\resumeItemListStart
    \\resumeItem{Created a Minecraft plugin downloaded 2K+ times}
  \\resumeItemListEnd
\\resumeSubHeadingListEnd

%-----------SKILLS-----------
\\section{Technical Skills}
\\begin{itemize}[leftmargin=0.15in, label={}]
  \\small{\\item{
    \\textbf{Languages}{: Java, Python, C/C++, JavaScript, SQL, HTML/CSS} \\\\ 
    \\textbf{Frameworks}{: React, Node.js, Flask, JUnit, Material-UI} \\\\ 
    \\textbf{Tools}{: Git, Docker, VS Code, Google Cloud, IntelliJ} \\\\ 
    \\textbf{Libraries}{: pandas, NumPy, Matplotlib}
  }}
\\end{itemize}

\\end{document}

🧾 INSTRUCTIONS TO GEMINI:
- DO NOT OMIT ANY OF THE ABOVE STRUCTURE.
- DO NOT GENERATE ANY NON-LATEX TEXT.
- EVERY SECTION MUST MIRROR THE EXAMPLES ABOVE EXACTLY.

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