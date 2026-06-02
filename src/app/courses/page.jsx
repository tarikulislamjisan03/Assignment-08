"use client"
import CourseData from "@/components/CourseCard";
import datas from "@/data.json";
import { useState } from "react";
const CoursePage = () => {
 


      const [search, setSearch] = useState("");

      const filteredtitle=datas.filter(data=>data.title.toLowerCase().includes(search.toLowerCase()))
      
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
         
            <div className="grid grid-cols-3 gap-5 container mx-auto mt-10"> 

                {
                filteredtitle.map(data=><CourseData key={data.id} data={data}> </CourseData>)
            }
            </div>
        </div>
    );
};
 
export default CoursePage;