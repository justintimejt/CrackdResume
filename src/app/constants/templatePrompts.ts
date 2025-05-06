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

    \\documentclass[]{resume-openfont}

    \\pagestyle{fancy}
    \\resetHeaderAndFooter

    %--------------------------------------------------------------
    % Convenience command - make it easy to fill template

    % Create job position command. Parameters: company, position, location, when
    \\newcommand{\\resumeHeading}[4]{\\runsubsection{\\uppercase{#1}}\\descript{ | #2}\\hfill\\location{#3 | #4}\\fakeNewLine}

    % Create education heading. Parameters: Name, degree, location, when
    \\newcommand{\\educationHeading}[4]{\\runsubsection{#1}\\hspace*{\\fill}  \\location{#3 | #4}\\\\
    \\descript{#2}\\fakeNewLine}

    % Create project heading. Parameters: Name, link, Tech stack
    \\newcommand{\\projectHeading}[3]{\\Project{#1}{#2}
    \\descript{#3}\\\\}

    \\newcommand{\\projectHeadingWithDate}[4]{\\Project{#1}{#2}
    \\descript{#3 | #4}\\\\}

    % Parameters: courses
    \\newcommand{\\courseWork}[1]{\\textbf{Coursework:} #1}

    % Parameters: courses
    \\newcommand{\\teacherAssistant}[1]{\\textbf{Teacher Assistant (TA):} #1}
    
    %--------------------------------------------------------------
    \\begin{document}

    %--------------------------------------------------------------
    %     Profile
    %--------------------------------------------------------------
    \\newcommand{\\yourName}{First Last}
    % How you want it to show up on the resume
    \\newcommand{\\yourWebsite}{website.com}
    % vs how you want it to show up. If it's the same you can just replace "\\yourWebsiteLink" with "yourWebsite"
    \\newcommand{\\yourWebsiteLink}{https://website.com}
    \\newcommand{\\yourEmail}{someEmail@edu.com}
    \\newcommand{\\yourPhone}{1-234-567-890}
    \\newcommand{\\githubUserName}{myGithubName}
    \\newcommand{\\linkedInUserName}{linkedInUsername}

    % An alternate profile section 
    % \\alignProfileTable
    % \\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}
    %     \\ralewayBold{\\href{\\yourWebsiteLink}{\\Large \\yourName}} & 
    %     Email : \\href{mailto:\\yourEmail}{\\yourEmail}
    %     \\\\
    %     \\href{https://github.com/\\githubUserName}{GitHub://\\githubUserName} & 
    %     Mobile : \\yourPhone
    %     \\\\
    %     \\href{https://www.linkedin.com/in/\\linkedInUserName}{LinkedIn://\\linkedInUserName} & Website : \\href{\\yourWebsiteLink}{\\yourWebsite}
    %     \\\\
    % \\end{tabular*}

    \\begin{center}
        \\Huge \\scshape \\latoRegular{\\yourName} \\\\ \\vspace{1pt}
        \\small \\href{mailto:\\yourEmail}{\\underline{\\yourEmail}}  \$|\$  \\yourPhone \$|\$ 
        \\href{https://www.linkedin.com/in/\\linkedInUserName}{\\underline{linkedIn/\\linkedInUserName}} \$|\$
        \\href{https://github.com/\\githubUserName}{\\underline{github/\\githubUserName}} 
        % \$|\$ \\href{\\yourWebsiteLink}{\\underline{\\yourWebsite}}
    \\end{center}

    %--------------------------------------------------------------
    %     Education
    %--------------------------------------------------------------
    \\section{Education}
    % Put school first and degree second if your school is reputable
    \\educationHeading{BSc. Honours Computer Science With Software Engineering Specialization}{University of Windsor}{Windsor, ON}{Jun 2021}

    \\teacherAssistant{World Wide Web Information Systems Development}
    % \\courseWork{Data Structures and Algorithms; Operating Systems;  Computer Security; Software Testing; Advanced Networking; Big Data Analytics}
    \\sectionsep

    %--------------------------------------------------------------
    %     Experience
    %--------------------------------------------------------------
    \\section{Work Experience}
    \\resumeHeading{Amazon}{Software Development Engineer Intern}{Toronto, ON}{May 2020 – Aug 2020}
    \\begin{bullets}
        \\item Designed and implemented a dashboard using \\textbf{React} and \\textbf{TypeScript} to visualize data stored in \\textbf{DynamoDB}, decreasing time to understand delivery driver work sessions by over 10 times.
        %  \\item Here is another bullet that I might choose to uncomment for some jobs
        \\item Ensured only authorized employees have access to the application by creating an \\textbf{AWS Lambda@Edge} function to intercept and sign valid requests.
        \\item Devised and deployed the infrastructure in TypeScript through \\textbf{AWS CDK}, then created efficient algorithms to process data from a custom \\textbf{REST API}, so it could scale to handle millions of deliveries.
        \\item Setup a CI/CD pipeline and exceeded requirements in each stage, which lead to the application being pushed to production.
    \\end{bullets}
    \\sectionsep

    \\resumeHeading{University of Windsor}{Research Assistant (RA)}{Windsor, ON}{Feb 2020 - May 2020}
    \\begin{bullets}
        \\item Developed a Personal Health Record (PHR) system in \\textbf{\\href{https://spring.io/}{Spring}} based on the theoretical model outlined in \\underlinedLink{https://research.library.mun.ca/11920}{Mitu Kumar's thesis}.
        \\item Applied the \\href{https://link.springer.com/chapter/10.1007/978-3-642-10838-9\\_23}{mCP-ABE} encryption scheme using the \\href{http://gas.dia.unisa.it/projects/jpbc/}{JPBC} library, so patients have fine-grained access control over their health records with the ability to instantly revoke access.
    \\end{bullets}
    \\sectionsep

    \\resumeHeading{JoaTu}{Software Engineer Intern}{Montreal, QC}{Dec 2018 – May 2019}
    \\begin{bullets}
        \\item Rewrote legacy \\textbf{Django code} in \\textbf{Ruby in Rails} and refactored it to make the system more extensible.
        \\item Created \\textbf{UML} diagrams and documented where features were implemented, to make the codebase more maintainable.
    \\end{bullets}
    \\sectionsep

    %--------------------------------------------------------------
    %     Projects
    %--------------------------------------------------------------
    \\section{Projects}

    \\projectHeading{Automated Spear-Phisher}{https://github.com/Aarif123456/Fb-Twitter-gui}{Python, PySpark, Selenium, Apache, NLP, Big Data}
    A security research tool to send targeted spam messages on either Facebook or Twitter. The program analyzes the feed of its target to increase the effectiveness of the messages.\\\\
    \\sectionsep
    
    \\projectHeading{Image Repository}{https://github.com/Aarif123456/image\\_repository}{Java, PHP, React, TypeScript, Maven, GCP, MySQL}
    A full-stack image repository, where users can store their files. Created a GCP cloud function to implement \\href{https://www.cs.utexas.edu/~bwaters/publications/papers/cp-abe.pdf}{CP-ABE} encryption and used it to ensure files are secure at rest.\\\\
    \\sectionsep

    \\projectHeading{Biometric Dynamic Keystroke Spoofer}{https://github.com/Aarif123456/KeystrokeDynamicsSpoofer}{Python, Object-Oriented Design, CyberSecurity}
    A program that authenticates users based on their typing patterns. And a spoofer that uses the genetic algorithm to mimic the user's typing pattern.
    \\sectionsep

    \\projectHeading{Distributed Key-Value store}{https://github.com/Aarif123456/Distributed-DB}{Java, Distributed System, Computer Networks, Concurrency}
    A distributed key-value store which automatically replicates data in the background while the user manages their data. Implemented a custom P2P protocol to maximize fault tolerance and scalability.\\\\
    \\sectionsep

    \\projectHeading{War of Weebles}{https://github.com/Aarif123456/GoalOrientedBehaviour}{C\\#, Unity, Concurrency, Artificial Intelligence}
    A capture-the-flag-styled shooting game composed of AI-controlled players. The agents change their goals based on various factors, such as their health, current weapon, their personality and what they see.\\\\
    \\sectionsep

    % Example using bullets and dates 
    % \\projectHeadingWithDate{Hogwart\\textquotesingle{}s Library Management System}{https://github.com/Aarif123456/hogwartslibrary}{PHP, JavaScript, HTML, CSS, MySQL}{Aug 2019}
    % \\begin{bullets}
        % \\item A full-stack library management system, where users can manage books and holds on their accounts. Users can search the library\\textquotesingle{}s catalogue, which has every book mentioned in the Harry Potter series. The system distinguishes between 4 users. For examples, librarians who can also check or return books on behalf of users.\\\\
    % \\end{bullets}
    % \\sectionsep
    

    %--------------------------------------------------------------
    %     Skills
    %--------------------------------------------------------------
    \\section{Skills}
    \\begin{skillList}
        \\singleItem{Languages:}{Java, C++, Python, C\\#, PHP, Prolog, Bash, C, Racket, SQL}
        \\\\
        \\singleItem{Web Development:}{React, JavaScript, TypeScript, HTML/CSS}
        \\\\
        \\singleItem{Technology:}{Git, AWS, GCP, Azure, Docker, Unity, Apache, \\LaTeX, MongoDB, DynamoDB, Neo4j}
    \\end{skillList}

    % A more concise alternate 
    % \\begin{skillList}
    %     \\doubleItem{Languages:}{Java, C++, Python, C\\#, PHP, Prolog, Bash, C, Racket}%
    %     {Databases:}{SQL, MongoDB, Neo4j, DynamoDB}
    %     \\\\
    %     \\doubleItem{Web Development:}{JavaScript, TypeScript, React, HTML/CSS}
    %     {Technology:}{Git, AWS, GCP, Azure, Docker, \\LaTeX}%
    % \\end{skillList}
    \\end{document}

    INSTRUCTIONS TO GEMINI:
    - DO NOT OMIT ANY OF THE ABOVE STRUCTURE.
    - DO NOT GENERATE ANY NON-LATEX TEXT.
    - EVERY SECTION MUST MIRROR THE EXAMPLES ABOVE EXACTLY.
    - IF THE INPUT INCLUDES ANY DOT JOTS, REMOVE THEM

    `
    ,
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