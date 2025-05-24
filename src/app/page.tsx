import Image from "next/image";
import { FaGithub } from 'react-icons/fa'; // Add this at the top
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoIosArrowDown } from "react-icons/io";


export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <nav className ="w-19/20 mx-auto relative top-4 bg-black rounded-3xl shadow-md p-4 z-50 flex justify-between items-center">

        <div className="text-lg font-bold text-white">
          <button className="relative text-white after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            resumeapp
          </button>
        </div>
        <div className="flex space-x-6">
          <button className="relative text-white after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Source Code
          </button>
          <button className="text-md text-black bg-white p-2 rounded-md"><a href="/build">Gen Now</a></button>
        </div>
          
      </nav>
      <main className="mt-20 text-white text-center px-6">
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 p-12 text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
              The 
                <span className="relative mx-3 inline-block">
                  <span className="absolute -inset-2 -rotate-3 transform bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg blur-[1px] opacity-80 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative rotate-3 inline-block px-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-100">
                    AI
                  </span>
                </span>
              Resume Generator
            </h1>
            <p className="text-xl text-gray-300 mb-10 mx-auto">
              Generate professional LaTeX resumes effortlessly — powered by AI, designed for devs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-x-6 sm:space-y-0">
            <a
              href="/build"
              className="bg-white text-black px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
            >
              Generate Now
            </a>
            <a
              href="https://github.com/yourusername/yourrepo"
              className="bg-transparent border border-white px-6 py-3 rounded-xl text-white hover:bg-white hover:text-black transition"
              target="_blank" rel="noopener noreferrer"
            >
              <div className="flex space-x-2">
                <span>Source Code</span>
                <FaGithub className="text-xl"/>
              </div>
              
            </a>
          </div>
          {/* form -> resume visual*/}
          <div className="flex justify-center items-center my-24 space-x-8 md:space-x-16">
            
            {/* form placeholder */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-800 rounded-2xl border-4 border-dashed border-gray-600 flex items-center justify-center">
                  {/* insert component */}
              </div>
            </div>

             {/* arrow */}
            <div className="text-gray-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>

            {/* resume placeholder*/}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-800 rounded-2xl border-4 border-dashed border-gray-600 flex items-center justify-center">
                {/* insert component */}
              </div>
            </div>
          </div>

          {/* optional arrow */}
          {/* <div className='flex items-center justify-center'>
            <button className ='flex items-center space-x-2 font-bold text-white px-6 transition'>
              <IoIosArrowDown className ='text-3xl'/>
            </button>
              
          </div> */}

        </div>

      
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
              Build Resumes That Get Noticed
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to create the perfect developer resume
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
              <div className="text-2xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Suggestions</h3>
              <p className="text-gray-400">
                [Placeholder] Our AI analyzes your experience and suggests impactful bullet points.
              </p>
            </div>

            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
              <div className="text-2xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3">LaTeX Quality Output</h3>
              <p className="text-gray-400">
                [Placeholder] Professionally formatted resumes that pass through ATS systems.
              </p>
            </div>

            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
              <div className="text-2xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Preview</h3>
              <p className="text-gray-400">
                [Placeholder] See changes instantly as you build your perfect resume.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-white bg-black border-t border-gray-800 py-6 mt-10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6 text-2xl">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="hover:text-gray-400 transition" />
            </a>
            <a href="https://x.com/justinpchow?s=21" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <FaXTwitter className="hover:text-gray-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/justin-chow-a74a972b5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-gray-400 transition" />
            </a>
          </div>
          <p className="text-sm text-gray-400">&copy; Justin Chow 2025</p>
        </div>
      </footer>
    </div>
  );
}
