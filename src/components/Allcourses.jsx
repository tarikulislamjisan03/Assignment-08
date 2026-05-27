import datas from "@/data.json";
import Image from "next/image";
import Link from "next/link"; // ✅ প্রবলেম ১ ফিক্স: Link ইম্পোর্ট করা হলো

const Allcourses = () => {

    const topRatedCourses = datas
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
  return (
    <div>
        <h1 className="text-center font-bold text-2xl mt-5 ">Most Popular Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-5  mt-10 px-4"> 
        {
          topRatedCourses && topRatedCourses.map((data) => {
            return (
              // ✅ প্রবলেম ২ ফিক্স: এখানে key={data.id} বসানো হলো
              <div key={data.id} className="p-2 rounded-xl overflow-hidden hover:bg-purple-200 border border-transparent transition-all duration-300 group shadow-2xl mb-10 w-[400px]  text-white">
                
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={data.image} // 💡 মনে রাখবেন ভাই, এই ইমেজের ডোমেইন next.config.mjs এ whitelist থাকতে হবে
                    alt={data.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Body */}
                <div className="p-5">
                  
                  {/* Category + Level */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {data.category}
                    </span>
                    <span className="text-xs text-zinc-400">{data.level}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-sm leading-snug mb-2 line-clamp-2 text-black">
                    {data.title}
                  </h3>

                  {/* Instructor */}
                  <p className="text-xs text-zinc-400 mb-3">
                    by {data.instructor}
                  </p>

                  {/* Rating + Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-amber-500">
                      ⭐ {data.rating}
                    </span>
                    <span className="text-xs text-zinc-400">⏱ {data.duration}</span>
                  </div>

                  {/* Button */}
                  <Link href={`/data/${data.id}`}>
                    <button className="w-full py-2 bg-lime-600 hover:bg-lime-700 text-white text-sm font-semibold rounded-lg transition-colors">
                      View Details
                    </button>
                  </Link>

                </div>
              </div>
            );
          })
        } 
      </div>
    </div>
  );
};

export default Allcourses;