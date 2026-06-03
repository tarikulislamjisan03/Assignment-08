"use client";

import CourseData from "@/components/CourseCard";
import { useEffect, useState } from "react";

const CoursePage = () => {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://assignment-08-pink.vercel.app/data.json");
        const data = await res.json();
        setDatas(data);
      } catch (error) {
        console.error("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const filteredCourses = datas.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-[#11110f] min-h-screen pt-20 pb-16 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-10">
          <div className="text-center sm:text-left w-full sm:w-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Explore Our Courses
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              Find the perfect path to advance your skill sets
            </p>
          </div>
          <div className="w-full sm:w-72 md:w-80 lg:w-96 shrink-0">
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                console.log("Typing:", e.target.value);
              }}
              className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-zinc-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500/20 transition-all text-sm placeholder:text-zinc-500 shadow-inner"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3 w-full">
            <div className="w-10 h-10 border-4 border-zinc-800 border-t-lime-500 rounded-full animate-spin"></div>
            <p className="text-zinc-500 text-xs sm:text-sm animate-pulse tracking-wide">
              Loading courses, please wait...
            </p>
          </div>
        ) : (
          <div className="w-full">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {filteredCourses.map((data) => (
                  <CourseData key={data.id} data={data} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-16 px-4 border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/20 max-w-xl mx-auto mt-6">
                <span className="text-2xl mb-2">🔍</span>
                <p className="text-zinc-400 text-sm font-medium">
                  {`No courses found matching "${search}"`}
                </p>
                <p className="text-zinc-600 text-xs mt-1">
                  Try checking for typos or searching for a different keyword.
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default CoursePage;