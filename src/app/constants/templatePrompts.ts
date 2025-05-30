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
    \\usepackage[margin=1in]{geometry}
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
    - Return only the raw LaTeX code. Do NOT include any markdown syntax or indentation.
    - DO NOT OMIT ANY OF THE ABOVE STRUCTURE.
    - DO NOT GENERATE ANY NON-LATEX TEXT.
    - EVERY SECTION MUST MIRROR THE EXAMPLES ABOVE EXACTLY.
    - IF THE INPUT INCLUDES ANY DOT JOTS, REMOVE THEM`
    ,
    // "Modern Deedy":
    // `
    // You are an expert LaTeX resume builder. Using the provided  data, generate a resume that replicates Ethan's Resume template EXACTLY in terms of structure, formatting, and LaTeX code. Use ONLY LaTeX.

    // %------------------------
    // % Ethan's Résumé Template
    // % Author: necusjz
    // % License: CC-BY-4.0
    // %------------------------
    // \\documentclass[letterpaper,11pt]{article}

    // \\usepackage{latexsym}
    // \\usepackage[empty]{fullpage}
    // \\usepackage{titlesec}
    // \\usepackage{marvosym}
    // \\usepackage[usenames,dvipsnames]{color}
    // \\usepackage{verbatim}
    // \\usepackage{enumitem}
    // \\usepackage[hidelinks]{hyperref}
    // \\usepackage{fancyhdr}
    // \\usepackage[english]{babel}
    // \\usepackage{tabularx}
    // \\usepackage{fontawesome5}
    // \\usepackage{ragged2e}
    // \\usepackage{etoolbox}
    // \\usepackage{tikz}
    // \\input{glyphtounicode}

    // % font options
    // \\usepackage{newpxtext}
    // \\linespread{1.05}  % palladio needs more leading (space between lines)
    // \\usepackage[T1]{fontenc}

    // \\pagestyle{fancy}
    // \\fancyhf{}  % clear all header and footer fields
    // \\fancyfoot{}
    // \\renewcommand{\\headrulewidth}{0pt}
    // \\renewcommand{\\footrulewidth}{0pt}

    // % adjust margins
    // \\addtolength{\\oddsidemargin}{-0.5in}
    // \\addtolength{\\evensidemargin}{-0.5in}
    // \\addtolength{\\textwidth}{1in}
    // \\addtolength{\\topmargin}{-.5in}
    // \\addtolength{\\textheight}{1.0in}

    // \\urlstyle{same}

    // \\raggedbottom
    // \\raggedright
    // \\setlength{\\tabcolsep}{0in}
    // \\setlength{\\footskip}{5pt}

    // % sections formatting
    // \\titleformat{\\section}{
    //   \\vspace{-2pt}\\scshape\\raggedright\\large
    // }{}{0em}{}[\\color{black}\\titlerule\\vspace{-5pt}]

    // % ensure that generate pdf is machine readable/ATS parsable
    // \\pdfgentounicode=1

    // % custom commands
    // \\newcommand{\\cvitem}[1]{
    //   \\item\\small{
    //     {#1\\vspace{-2pt}}
    //   }
    // }

    // \\newcommand{\\cvheading}[4]{
    //   \\vspace{-2pt}\\item
    //     \\begin{tabular*}{\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
    //       \\textbf{#1} & #2 \\\\
    //       \\small#3 & \\small #4 \\\\
    //     \\end{tabular*}\\vspace{-7pt}
    // }

    // \\newcommand{\\cvheadingstart}{\\begin{itemize}[leftmargin=0in, label={}]}
    // \\newcommand{\\cvheadingend}{\\end{itemize}}
    // \\newcommand{\\cvitemstart}{\\begin{itemize}[label=\\textopenbullet]\\justifying}
    // \\newcommand{\\cvitemend}{\\end{itemize}\\vspace{-5pt}}

    // \\newcommand{\\cvskill}[2]{
    //   \\textcolor{black}{\\textbf{#1}}\\hfill
    //   \\foreach \\x in {1,...,5}{%
    //     \\space{\\ifnumgreater{\\x}{#2}{\\color{black!80!white!20}}{\\color{black}}\\faSquare}}\\par%
    //   \\vspace{-2pt}
    // }

    // \\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\footnotesize$\\bullet$}}$}

    // \\begin{document}

    // % contact information
    // \\begin{center}
    //   \\textbf{\\LARGE\\scshape Ethan Yang} \\\\
    //   \\vspace{1pt}\\small
    //   \\href{mailto:}{Email}
    //   $\\ \\diamond\\ $ 
    //   Phone
    //   $\\ \\diamond\\ $
    //   \\href{https://github.com/}{GitHub}
    //   $\\ \\diamond\\ $
    //   \\href{https://www.linkedin.com/}{LinkedIn}
    // \\end{center}

    // \\section{Professional Experience}
    // \\cvheadingstart
    //   \\cvheading
    //     {Company}{City, State}
    //     {Title}{09/2021 - Present}
    //   \\cvitemstart
    //     \\cvitem{Description}
    //     \\cvitem{Description}
    //     \\cvitem{Description}
    //     \\cvitem{Description}
    //   \\cvitemend

    //   \\cvheading
    //     {Company}{City, State}
    //     {Title}{06/2019 - 09/2021}
    //   \\cvitemstart
    //     \\cvitem{Description}
    //     \\cvitem{Description}
    //   \\cvitemend

    //   \\cvheading
    //     {Company}{City, State}
    //     {Title}{12/2018 - 06/2019}
    //   \\cvitemstart
    //     \\cvitem{Description}
    //   \\cvitemend
    // \\cvheadingend

    // \\section{Education}
    // \\cvheadingstart
    //   \\cvheading
    //     {School}{City, State}
    //     {Degree, Field}{09/2016 - 11/2018}
    //   \\cvheading
    //     {School}{City, State}
    //     {Degree, Field}{09/2010 - 07/2014}
    // \\cvheadingend

    // \\section{Technical Skills}
    // \\cvskill{Skill}{4}
    // \\cvskill{Skill}{3}
    // \\cvskill{Skill}{3}
    // \\cvskill{Skill}{2}
    // \\vspace{-5pt}

    // \\section{Projects}
    // \\cvheadingstart
    //   \\cvheading
    //     {Project Name}{Technologies}{Month Year}
    //     \cvitemstart
    //       \cvitem{Description}
    //       \cvitem{Description}
    //   \cvitemend
    //   \\cvheading
    //     {Project Name}{Technologies}{Month Year}
    //   \cvitemstart
    //     \cvitem{Description}
    //     \cvitem{Description}
    //   \cvitemend
    // \\cvheadingend

    // \\end{document}


    // INSTRUCTIONS TO GEMINI:
    // Return only the raw LaTeX code. DO NOT include any markdown syntax or indentation.
    // DO NOT OMIT ANY OF THE ABOVE STRUCTURE OR CUSTOM COMMANDS.
    // DO NOT GENERATE ANY NON-LATEX TEXT.
    // EVERY SECTION MUST MIRROR THE EXAMPLES ABOVE EXACTLY.
    // USE THE EXACT SAME COMMAND STRUCTURE: \cvheading, \cvitem, \cvskill, etc.
    // MAINTAIN ALL DOCUMENT CLASS AND PACKAGE IMPORTS EXACTLY AS SHOWN.
    // PRESERVE ALL SPACING, \vspace, AND FORMATTING ELEMENTS.
    // USE \cvheadingstart AND \cvheadingend FOR SECTION CONTAINERS.
    // USE \cvitemstart AND \cvitemend FOR BULLET POINT LISTS.
    // MAINTAIN PROPER LATEX ESCAPING (USE \\ FOR LINE BREAKS, \# FOR #, \_ FOR _, \& FOR &).
    // REPLACE ALL PLACEHOLDER DATA WITH PROVIDED JSON DATA.
    // IF THE INPUT INCLUDES ANY DOT JOTS, REMOVE THEM.
    // PRESERVE COMMENTED SECTIONS AS EXAMPLES FOR REFERENCE.

    // `
    // ,
    "SWE Resume":
    `
    Instructions: Use the Software Engineer LaTeX resume template. You are an expert LaTeX resume generator. Using the provided JSON data, generate a resume that follows the **exact format, layout, and structure** as shown in the LaTeX code below. Do NOT output explanations or additional content—ONLY raw LaTeX. Maintain all spacing, formatting, and section structure exactly as shown.

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
    - Remove any dot jots from the input data.
    - If user text input includes "%" make sure to put a forward slash in front \%
    - Ensure the exact string: "ProjectArea" is not generated
    `
} as const;