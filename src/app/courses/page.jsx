"use client"
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

      const filteredCourses=datas.filter(data=>data.title.toLowerCase().includes(search.toLowerCase()))
      
    return (
        <div>
            <div className="flex justify-center mt-6 px-4">
     <input
  type="text"
  placeholder="Search courses..."
  value={search}
  onChange={(e) => {
    setSearch(e.target.value);
    console.log("Typing:", e.target.value); // 👈 সরাসরি এখানে কনসোল লগ
  }}
  className="w-full max-w-md px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-lime-500 transition-colors text-sm"
/>
      </div>
         {loading ? (
        <div className="flex flex-col items-center justify-center mt-20 gap-3">
          <div className="w-10 h-10 border-4 border-zinc-700 border-t-lime-500 rounded-full animate-spin"></div>
          <p className="text-zinc-400 text-sm animate-pulse">Loading courses, please wait...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto mt-10 px-4"> 
          {filteredCourses.length > 0 ? (
            filteredCourses.map(data => (
              <CourseData key={data.id} data={data} />
            ))
          ) : (
            <div className="col-span-full text-center text-zinc-500 mt-10">
  {`No courses found matching "${search}"`}
</div>
          )}
        </div>
      )}
        </div>
    );
};
 
export default CoursePage;