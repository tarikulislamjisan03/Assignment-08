"use client"; // 

import Link from "next/link";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b0a] flex flex-col items-center justify-center text-white px-6 relative overflow-hidden">
      
     
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="text-center z-10 flex flex-col items-center max-w-lg">
        
       
        <h1 className="text-[120px] md:text-[160px] font-extrabold tracking-tighter leading-none bg-gradient-to-b from-white via-zinc-400 to-zinc-800 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(255,255,255,0.05)]">
          404
        </h1>

        
        <h2 className="text-2xl md:text-3xl font-bold mt-4 text-zinc-100 tracking-tight">
          Oops! Page Not Found
        </h2>
        
        <p className="text-zinc-500 text-sm md:text-base mt-3 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track!
        </p>

       
        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
          
         
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-zinc-800 rounded-xl text-sm font-semibold text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-700 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <FaArrowLeft className="text-xs" />
            Go Back
          </button>

         
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#65a30d] text-black font-semibold rounded-xl text-sm shadow-lg shadow-green-900/20 hover:bg-[#54880a] hover:shadow-green-900/40 transition-all duration-300 active:scale-95"
          >
            <FaHome className="text-base" />
            Back to Home
          </Link>

        </div>
      </div>

      <div className="absolute bottom-6 text-xs text-zinc-700 tracking-wider">
        SkillSphere Security Protocol • 404_ERROR
      </div>
    </div>
  );
}