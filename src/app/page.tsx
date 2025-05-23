import Image from "next/image";



export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <nav className ="w-19/20 mx-auto sticky top-4 bg-black rounded-3xl shadow-md p-4 z-50 flex justify-between items-center">

        <div className="text-lg font-bold text-white">
          resumeapp
        </div>
        <div className="flex space-x-4">
          <button className="text-md text-white">Source Code</button>
          <button className="text-md text-black bg-white p-2 rounded-md"><a href="/">Gen Now</a></button>
        </div>
          

      </nav>
      <main className="mt-24">

      
      </main>
      <footer>
       
      </footer>
    </div>
  );
}
