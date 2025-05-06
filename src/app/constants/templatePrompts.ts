export const templatePrompts = {
    "Jake's Resume": 
    `Instructions: Use the Jake's Resume LaTeX template
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

    INSTRUCTIONS TO GEMINI:
    - DO NOT OMIT ANY OF THE ABOVE STRUCTURE.
    - DO NOT GENERATE ANY NON-LATEX TEXT.
    - EVERY SECTION MUST MIRROR THE EXAMPLES ABOVE EXACTLY.
    - IF THE INPUT INCLUDES ANY DOT JOTS, REMOVE THEM`
    ,
    "Modern Deedy":
    `
     Follow the format of this template on overleaf: https://www.overleaf.com/latex/templates/modern-deedy/cxtjgrmpsrvh
    
    You are an expert LaTeX resume builder. Using the provided JSON data, generate a resume that replicates Modern Deedy Overleaf resume template EXACTLY in terms of structure, formatting, and LaTeX code. Use ONLY LaTeX.

    Reference Template: https://www.overleaf.com/latex/templates/modern-deedy/cxtjgrmpsrvh

    %-------------------------
    % Convenience Commands
    %-------------------------
    \\newcommand{\\resumeHeading}[4]{\\runsubsection{\\uppercase{#1}}\\descript{ | #2}\\hfill\\location{#3 | #4}\\fakeNewLine}
    \\newcommand{\\educationHeading}[4]{\\runsubsection{#1}\\hspace*{\\fill}  \\location{#3 | #4}\\\\
    \\descript{#2}\\fakeNewLine}
    \\newcommand{\\projectHeading}[3]{\\Project{#1}{#2}\\descript{#3}\\\\}
    \\newcommand{\\projectHeadingWithDate}[4]{\\Project{#1}{#2}\\descript{#3 | #4}\\\\}
    \\newcommand{\\courseWork}[1]{\\textbf{Coursework:} #1}
    \\newcommand{\\teacherAssistant}[1]{\\textbf{Teacher Assistant (TA):} #1}

    %-------------------------
    % RESUME START
    %-------------------------
    \\begin{document}

    % PROFILE SECTION
    \\newcommand{\\yourName}{First Last}
    \\newcommand{\\yourWebsite}{website.com}
    \\newcommand{\\yourWebsiteLink}{https://website.com}
    \\newcommand{\\yourEmail}{someEmail@edu.com}
    \\newcommand{\\yourPhone}{1-234-567-890}
    \\newcommand{\\githubUserName}{myGithubName}
    \\newcommand{\\linkedInUserName}{linkedInUsername}

    \\begin{center}
    \\Huge \\scshape \\latoRegular{\\yourName} \\\\ \\vspace{1pt}
    \\small \\href{mailto:\\yourEmail}{\\underline{\\yourEmail}}  $|$  \\yourPhone $|$ 
    \\href{https://www.linkedin.com/in/\\linkedInUserName}{\\underline{linkedIn/\\linkedInUserName}} $|$
    \\href{https://github.com/\\githubUserName}{\\underline{github/\\githubUserName}} 
    \\end{center}

    % EDUCATION
    \\section{Education}
    \\educationHeading{BSc. Honours Computer Science}{University of Windsor}{Windsor, ON}{Jun 2021}
    \\teacherAssistant{World Wide Web Information Systems Development}
    \\sectionsep

    % WORK EXPERIENCE
    \\section{Work Experience}
    \\resumeHeading{Amazon}{Software Development Engineer Intern}{Toronto, ON}{May 2020 -- Aug 2020}
    \\begin{bullets}
    \\item Designed dashboard using \\textbf{React} and \\textbf{TypeScript}
    \\item Used \\textbf{AWS CDK}, \\textbf{Lambda@Edge}, \\textbf{DynamoDB}
    \\end{bullets}
    \\sectionsep

    % PROJECTS
    \\section{Projects}
    \\projectHeading{Image Repository}{https://github.com/example/repo}{Java, PHP, React, GCP, MySQL}
    \\sectionsep

    % SKILLS
    \\section{Skills}
    \\begin{skillList}
    \\singleItem{Languages:}{Java, C++, Python, SQL}
    \\\\
    \\singleItem{Web Development:}{React, TypeScript, HTML/CSS}
    \\\\
    \\singleItem{Technology:}{Git, AWS, Docker, \\LaTeX}
    \\end{skillList}

    \\end{document}

    INSTRUCTIONS TO GEMINI:
    - DO NOT OMIT ANY OF THE ABOVE STRUCTURE.
    - DO NOT GENERATE NON-LATEX TEXT.
    - USE ONLY resume-openfont commands.
    - MATCH FORMATTING EXACTLY, including \\sectionsep lines.
    - REMOVE any dot jots (•, —) and ensure the resume is machine readable.
    - All section formats (Experience, Education, Projects, Skills) must mirror this exactly.
    `
    ,
    "Software Engineer Resume":
    `
    Instructions: Use the Deedy LaTeX resume template. You are an expert LaTeX resume generator. Using the provided JSON data, generate a resume that follows the **exact format, layout, and structure** as shown in the LaTeX code below. Do NOT output explanations or additional content—ONLY raw LaTeX. Maintain all spacing, formatting, and section structure exactly as shown.

    \\documentclass[letterpaper,11pt]{article}
    \\usepackage{latexsym}
    \\usepackage[empty]{fullpage}
    \\usepackage{titlesec}
    \\usepackage{marvosym}
    \\usepackage[usenames,dvipsnames]{color}
    \\usepackage{verbatim}
    \\usepackage{enumitem}
    \\usepackage[pdftex]{hyperref}
    \\usepackage{fancyhdr}

    \\pagestyle{fancy}
    \\fancyhf{}
    \\fancyfoot{}
    \\renewcommand{\\headrulewidth}{0pt}
    \\renewcommand{\\footrulewidth}{0pt}

    \\addtolength{\\oddsidemargin}{-0.375in}
    \\addtolength{\\evensidemargin}{-0.375in}
    \\addtolength{\\textwidth}{1in}
    \\addtolength{\\topmargin}{-.5in}
    \\addtolength{\\textheight}{1.0in}

    \\urlstyle{same}
    \\raggedbottom
    \\raggedright
    \\setlength{\\tabcolsep}{0in}

    \\titleformat{\\section}{\\vspace{-4pt}\\scshape\\raggedright\\large}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

    %-------------------------
    % Custom Commands
    \\newcommand{\\resumeItem}[2]{\\item\\small{\\textbf{#1}{: #2 \\vspace{-2pt}}}}
    \\newcommand{\\resumeSubheading}[4]{\\vspace{-1pt}\\item\\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r} \\textbf{#1} & #2 \\\\ \\textit{\\small#3} & \\textit{\\small #4} \\end{tabular*}\\vspace{-5pt}}
    \\newcommand{\\resumeSubItem}[2]{\\resumeItem{#1}{#2}\\vspace{-4pt}}
    \\renewcommand{\\labelitemii}{$\\circ$}
    \\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=*]}
    \\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
    \\newcommand{\\resumeItemListStart}{\\begin{itemize}}
    \\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

    %-------------------------
    % RESUME STARTS HERE
    \\begin{document}

    %----------HEADING----------
    \\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}
    \\textbf{\\Large First Last} & Email : \\href{mailto:mail@domain.com}{mail@domain.com} \\\\
    \\href{https://yourwebsite.com}{https://yourwebsite.com} & Mobile : +1-123-456-7890 \\\\
    \\end{tabular*}

    %-----------EDUCATION-----------
    \\section{Education}
    \\resumeSubHeadingListStart
    \\resumeSubheading{University Name}{City, State}{Degree, GPA}{Start Date -- End Date}
    \\resumeSubHeadingListEnd

    %-----------EXPERIENCE-----------
    \\section{Experience}
    \\resumeSubHeadingListStart
    \\resumeSubheading{Company Name}{Location}{Job Title}{Start Date -- End Date}
    \\resumeItemListStart
        \\resumeItem{Project/Area}{Brief description}
        \\resumeItem{Project/Area}{Brief description}
    \\resumeItemListEnd
    \\resumeSubHeadingListEnd

    %-----------PROJECTS-----------
    \\section{Projects}
    \\resumeSubHeadingListStart
    \\resumeSubItem{Project Title}{Description or impact}
    \\resumeSubItem{Project Title}{Description or impact}
    \\resumeSubHeadingListEnd

    %-----------PROGRAMMING SKILLS-----------
    \\section{Programming Skills}
    \\resumeSubHeadingListStart
    \\item{
        \\textbf{Languages}{: Java, Python, JavaScript, SQL} \\hfill
        \\textbf{Technologies}{: AWS, React, Docker}
    }
    \\resumeSubHeadingListEnd

    \\end{document}

    INSTRUCTIONS TO GEMINI:
    - DO NOT OMIT any structure above.
    - Use only LaTeX, no commentary.
    - Match formatting, layout, and section ordering exactly.
    - If a section (e.g., Projects or Experience) is empty in the JSON, omit that LaTeX section.
    - Escape all LaTeX characters as required.
    - Render all bullet points using \\resumeItem.
    - Use \\resumeSubheading for all entries with title/date/location.
    - Remove any dot jots from the input data.`
} as const;