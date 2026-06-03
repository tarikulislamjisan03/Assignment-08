import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

const CourseDetails = async ({ params }) => {
  const res = await fetch("https://assignment-08-pink.vercel.app/data.json");
  const datas = await res.json();
  const { id } = await params;

  const course = datas.find((item) => item.id == id);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0b0b0a] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden w-full">
      <div className="max-w-5xl mx-auto w-full">
        
        <div className="flex justify-center sm:justify-start w-full">
          <Link href="/courses" className="inline-flex items-center text-sm text-zinc-400 hover:text-lime-400 mb-6 transition-colors group">
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Back to All Courses
          </Link>
        </div>

        <div className="bg-[#141412] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl w-full">
          
          <div className="relative h-48 sm:h-72 md:h-96 w-full bg-zinc-900">
            <Image
              src={course.image}
              alt={course.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1024px"
              className="object-cover object-center opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141412] via-transparent to-transparent"></div>
          </div>

          <div className="p-4 sm:p-8 md:p-10">
            
            <div className="flex flex-wrap gap-2 items-center mb-4 justify-center sm:justify-start">
              <span className="text-[10px] sm:text-xs font-bold bg-lime-950/50 text-lime-400 border border-lime-900/50 px-3 py-1 rounded-full uppercase tracking-wider">
                {course.category}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">
                {course.level}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-zinc-100 tracking-tight leading-tight mb-4 text-center sm:text-left">
              {course.title}
            </h1>

            <div className="flex justify-center sm:justify-start">
              <p className="text-xs sm:text-sm text-zinc-400 mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] font-bold text-white uppercase">
                  {course.instructor.charAt(0)}
                </span>
                by <span className="text-zinc-200 font-medium">{course.instructor}</span>
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 my-6 border-y border-zinc-800/60 w-full">
              <div className="text-center sm:text-left">
                <span className="block text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wide">Rating</span>
                <span className="text-base sm:text-lg font-bold text-amber-500 mt-1 block">⭐ {course.rating}</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wide">Duration</span>
                <span className="text-base sm:text-lg font-bold text-zinc-200 mt-1 block">⏱ {course.duration}</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wide">Price</span>
                <span className="text-base sm:text-lg font-bold text-emerald-400 mt-1 block">Free / Enrolled</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wide">Access</span>
                <span className="text-base sm:text-lg font-bold text-zinc-200 mt-1 block">Lifetime</span>
              </div>
            </div>

            <div className="mb-8 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-zinc-200 mb-3">About this Course</h3>
              <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
                {course.description || "Dive deep into this comprehensive program designed by industry experts to take your skills to the next level with professional and hand-on projects."}
              </p>
            </div>

            <div className="bg-[#0b0b0a] border border-zinc-800 p-4 sm:p-6 rounded-2xl mb-8 w-full">
              <h3 className="text-base sm:text-lg font-bold text-zinc-200 mb-4 flex items-center justify-center sm:justify-start gap-2">
                <span>📂</span> Course Curriculum
              </h3>
              <div className="space-y-3 w-full">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-4 bg-[#141412] rounded-xl border border-zinc-800/50 text-center sm:text-left w-full">
                  <span className="text-lime-400 font-bold text-sm sm:text-base shrink-0">01</span>
                  <div className="w-full">
                    <h4 className="text-xs sm:text-sm font-semibold text-zinc-200">Welcome & Environment Setup</h4>
                    <p className="text-[11px] sm:text-xs text-zinc-500 mt-1 sm:mt-0.5">Introduction to the core tools and setup requirements.</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-4 bg-[#141412] rounded-xl border border-zinc-800/50 text-center sm:text-left w-full">
                  <span className="text-lime-400 font-bold text-sm sm:text-base shrink-0">02</span>
                  <div className="w-full">
                    <h4 className="text-xs sm:text-sm font-semibold text-zinc-200">Deep Dive into Fundamentals</h4>
                    <p className="text-[11px] sm:text-xs text-zinc-500 mt-1 sm:mt-0.5">Understanding foundational concepts with theoretical & practical examples.</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-4 bg-[#141412] rounded-xl border border-zinc-800/50 text-center sm:text-left w-full">
                  <span className="text-lime-400 font-bold text-sm sm:text-base shrink-0">03</span>
                  <div className="w-full">
                    <h4 className="text-xs sm:text-sm font-semibold text-zinc-200">Building Hands-on Industry Projects</h4>
                    <p className="text-[11px] sm:text-xs text-zinc-500 mt-1 sm:mt-0.5">Step-by-step guidance to develop real-world responsive applications.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <button className="w-full py-3 sm:py-3.5 bg-lime-600 hover:bg-lime-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-lime-900/20 text-center text-sm sm:text-base">
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