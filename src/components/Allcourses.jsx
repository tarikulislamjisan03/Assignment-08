import Image from "next/image";
import Link from "next/link"; 

export default async function Allcourses() {
  const res = await fetch("https://assignment-08-pink.vercel.app/data.json");
  const datas = await res.json();

  const topRatedCourses = datas
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="py-10 bg-black">
      <h1 className="text-center font-bold text-3xl mt-5 text-white">
        Most Popular Courses
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6 mt-10 px-6 max-w-7xl mx-auto"> 
        {
          topRatedCourses && topRatedCourses.map((data) => {
            return (
              <div 
                key={data.id} 
                className="p-3 rounded-xl overflow-hidden hover:bg-zinc-900 border border-zinc-800 transition-all duration-300 group shadow-2xl w-full text-white bg-[#141412] flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden rounded-lg">
                    <Image
                      src={data.image} 
                      alt={data.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold bg-lime-950/50 text-lime-400 border border-lime-900/50 px-3 py-1 rounded-full">
                        {data.category}
                      </span>
                      <span className="text-xs text-zinc-400">{data.level}</span>
                    </div>

                    <h3 className="font-semibold text-base leading-snug mb-2 line-clamp-2 text-zinc-100 group-hover:text-lime-400 transition-colors">
                      {data.title}
                    </h3>

                    <p className="text-xs text-zinc-400 mb-3">
                      by {data.instructor}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-amber-500">
                        ⭐ {data.rating}
                      </span>
                      <span className="text-xs text-zinc-400">⏱ {data.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <Link href={`/courses/${data.id}`}>
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
}