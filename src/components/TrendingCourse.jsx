import React from 'react';
import { FaRegClock } from 'react-icons/fa'; // টাইমিং আইকনের জন্য

const TrendingCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Next.js 15 — Full Course",
      instructor: "John Doe",
      category: "Web Dev",
      duration: "18 hrs",
      isNew: true,
    },
    {
      id: 2,
      title: "Figma to Code Mastery",
      instructor: "Sara Ahmed",
      category: "Design",
      duration: "12 hrs",
      isNew: true,
    },
    {
      id: 3,
      title: "Python for Data Science",
      instructor: "Rachel Lee",
      category: "Data",
      duration: "25 hrs",
      isNew: false,
    },
    {
      id: 4,
      title: "AI Prompt Engineering",
      instructor: "Mike Chen",
      category: "AI",
      duration: "10 hrs",
      isNew: true,
    },
  ];

  return (
    // 🌌 মেইন ব্যাকগ্রাউন্ড: হালকা আইসি ব্লু বা আকাশী ভাইব (bg-[#f1f5f9] বা bg-[#f4f7fc])
    <section className="w-full bg-[#8eb2ec] text-[#1e293b] py-16 px-6 md:px-12 lg:px-24 border-t border-blue-100">
      
      {/* মেইন কন্টেইনার (ফুল উইডথ ছড়ানোর জন্য max-w-7xl) */}
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* 📌 Top Tagline */}
        <div className="flex flex-col gap-2">
          {/* 🚀 টেক্সট কালার এখন ব্রাইট রয়্যাল ব্লু (#2563eb) */}
          <div className="flex items-center gap-2 text-xs font-bold text-[#2563eb] tracking-wider uppercase">
            <span>🚀</span> TRENDING NOW
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            New Releases
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Fresh courses added this month — be the first to enroll.
          </p>
        </div>

        {/* 📌 Courses Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col justify-between p-6 bg-[#8eb2ec] border border-blue-100 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-300 cursor-pointer relative overflow-hidden"
            >
              <div>
                {/* 🔢 ব্যাকগ্রাউন্ড নাম্বার: হালকা নীলচে গ্রেডিয়েন্ট ফিল (text-blue-50) */}
                <div className="text-5xl font-black text-blue-50/70 mb-4 group-hover:text-blue-100 transition-colors">
                  {String(course.id).padStart(2, "0")}
                </div>

                {/* 📚 Title & Badge */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  {/* হোভার করলে টাইটেল রয়্যাল ব্লু হয়ে যাবে */}
                  <h3 className="text-base font-bold leading-snug text-slate-800 group-hover:text-[#2563eb] transition-colors">
                    {course.title}
                  </h3>
                  {course.isNew && (
                    // নিউ ব্যাজটি নীলচে থিমের সাথে মিলিয়ে করা হয়েছে
                    <span className="shrink-0 text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-200 px-2 py-0.5 rounded-md uppercase tracking-wide">
                      New
                    </span>
                  )}
                </div>

                {/* 👤 Instructor & Category */}
                <p className="text-xs text-slate-500 font-medium">
                  by {course.instructor} • <span className="text-blue-500 font-semibold">{course.category}</span>
                </p>
              </div>

              {/* 🕒 Duration Stats */}
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-6 pt-4 border-t border-blue-50">
                <FaRegClock className="text-blue-400" />
                <span className="text-slate-500">{course.duration}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrendingCourses;