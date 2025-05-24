import Image from "next/image";
import { FaGithub } from 'react-icons/fa'; // Add this at the top


export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <nav className ="w-19/20 mx-auto sticky top-4 bg-black rounded-3xl shadow-md p-4 z-50 flex justify-between items-center">

        <div className="text-lg font-bold text-white">
          resumeapp
        </div>
        <div className="flex space-x-6">
          <button className="text-md text-white">Source Code</button>
          <button className="text-md text-black bg-white p-2 rounded-md"><a href="/build">Gen Now</a></button>
        </div>
          
      </nav>
      <main className="mt-20 text-white text-center px-6">
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 p-12 text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              The Ulimate <span>AI</span> Resume Generator
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
        </div>
      </main>

      <footer>
       
      </footer>
    </div>
  );
}
