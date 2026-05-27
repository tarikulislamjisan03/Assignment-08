import datas from "@/data.json";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

const CourseDetails = async ({ params }) => {
  const { id } = await params;
  

  const course = datas.find((item) => item.id == id);

  
  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0b0b0a] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        
      
        <Link href="/courses" className="inline-flex items-center text-sm text-zinc-400 hover:text-primary mb-6 transition-colors group">
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Back to All Courses
        </Link>

      
        <div className="bg-[#141412] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          
          
          <div className="relative h-64 sm:h-96 w-full bg-zinc-900">
          
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover object-center opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141412] via-transparent to-transparent"></div>
          </div>

     
          <div className="p-6 sm:p-10">
            
           
            <div className="flex flex-wrap gap-2 items-center mb-4">
              <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
                {course.category}
              </span>
              <span className="text-xs font-semibold bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">
                {course.level}
              </span>
            </div>

           
            <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight leading-tight mb-4">
              {course.title}
            </h1>

          
            <p className="text-sm text-zinc-400 mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold text-white">
                {course.instructor.charAt(0)}
              </span>
              by <span className="text-zinc-200 font-medium">{course.instructor}</span>
            </p>

          
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 my-6 border-y border-zinc-800/60">
              <div className="text-center sm:text-left">
                <span className="block text-xs text-zinc-500 uppercase tracking-wide">Rating</span>
                <span className="text-lg font-bold text-amber-500 mt-1 block">⭐ {course.rating}</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-xs text-zinc-500 uppercase tracking-wide">Duration</span>
                <span className="text-lg font-bold text-zinc-200 mt-1 block">⏱ {course.duration}</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-xs text-zinc-500 uppercase tracking-wide">Price</span>
                <span className="text-lg font-bold text-emerald-400 mt-1 block">Free / Enrolled</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-xs text-zinc-500 uppercase tracking-wide">Access</span>
                <span className="text-lg font-bold text-zinc-200 mt-1 block">Lifetime</span>
              </div>
            </div>

          
            <div className="mb-8">
              <h3 className="text-xl font-bold text-zinc-200 mb-3">About this Course</h3>
              <p className="text-zinc-400 text-base leading-relaxed">
                {course.description || "Dive deep into this comprehensive program designed by industry experts to take your skills to the next level with professional and hand-on projects."}
              </p>
            </div>

      
            <div className="bg-[#0b0b0a] border border-zinc-800 p-6 rounded-2xl mb-8">
              <h3 className="text-lg font-bold text-zinc-200 mb-4 flex items-center gap-2">
                📂 Course Curriculum
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-[#141412] rounded-xl border border-zinc-800/50">
                  <span className="text-primary font-bold">01</span>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-200">Welcome & Environment Setup</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">Introduction to the core tools and setup requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#141412] rounded-xl border border-zinc-800/50">
                  <span className="text-primary font-bold">02</span>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-200">Deep Dive into Fundamentals</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">Understanding foundational concepts with theoretical & practical examples.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#141412] rounded-xl border border-zinc-800/50">
                  <span className="text-primary font-bold">03</span>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-200">Building Hands-on Industry Projects</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">Step-by-step guidance to develop real-world responsive applications.</p>
                  </div>
                </div>
              </div>
            </div>

          
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 py-3.5 bg-lime-600 hover:bg-lime-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-lime-900/20 text-center">
                Start Learning Now
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseDetails;