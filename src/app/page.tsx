import Image from "next/image";
import { FaGithub } from 'react-icons/fa'; // Add this at the top
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';



export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <nav className ="w-19/20 mx-auto relative top-4 bg-black rounded-3xl shadow-md p-4 z-50 flex justify-between items-center">

        <div className="text-lg font-bold text-white">
          <Link href="/">
            <button className="relative text-white after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              CrackdResume
            </button>
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link href="/" className="relative text-white py-2 after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:after:w-full font-semibold">Source Code</Link>
          <Link href="/build" className="text-md text-black bg-white p-2 rounded-md hover:bg-gray-300 font-semibold">Gen Now</Link>
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
            <Link
              href="/build"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-300 transition"
            >
              Generate Now
            </Link>
            <Link
              href="https://github.com/yourusername/yourrepo"
              className="bg-transparent border border-white px-6 py-3 rounded-xl text-white hover:bg-white hover:text-black transition"
              target="_blank" rel="noopener noreferrer"
            >
              <div className="flex space-x-2 font-semibold">
                <span>Source Code</span>
                <FaGithub className="text-xl"/>
              </div>
              
            </Link>
          </div>
          

          <div className="flex items-center justify-center mt-10">
            <div className="flex flex-row items-center space-x-6">
              {/* original resume */}
              <div className="bg-gray-800 rounded-2xl border-4 border-dashed border-gray-600 flex items-center justify-center w-96 h-auto">
                <Image
                  src="../assets/images/jakes-resume.png" 
                  alt="Resume Image" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* right reflection */}
              <div className="bg-gray-800 rounded-2xl border-4 border-dashed border-gray-700 flex items-center justify-center w-80 h-auto opacity-20 scale-x-[-1]">
                <Image 
                  src="../assets/images/jakes-resume.png" 
                  alt="Resume Image Reflection" 
                  className="w-full h-full object-cover rounded-xl blur-[1px]"
                />
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
              <h3 className="text-xl font-semibold mb-3">AI-Powered Generation</h3>
              <p className="text-gray-400">
                Powered by Google Gemini Flash 1.5 generative AI model.
              </p>
            </div>

            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
              <div className="text-2xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3">LaTeX Quality Output</h3>
              <p className="text-gray-400">
                Professionally formatted resumes that pass through ATS systems.
              </p>
            </div>

            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
              <div className="text-2xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Lightning-Fast System</h3>
              <p className="text-gray-400">
                Build and generate industry standard resumes in less than 60 seconds.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-white bg-black border-t border-gray-800 py-6 mt-10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6 text-2xl">
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="hover:text-gray-400 transition" />
            </Link>
            <Link href="https://x.com/justinpchow?s=21" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <FaXTwitter className="hover:text-gray-400 transition" />
            </Link>
            <Link href="https://www.linkedin.com/in/justin-chow-a74a972b5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-gray-400 transition" />
            </Link>
          </div>
          <p className="text-sm text-gray-400">&copy; Justin Chow 2025</p>
        </div>
      </footer>
    </div>
  );
}
