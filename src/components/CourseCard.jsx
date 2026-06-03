"use client";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ data }) => {
  return (
    <div className="w-full sm:max-w-[380px] md:max-w-full mx-auto shadow-md sm:shadow-lg hover:shadow-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800/80 p-3 rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col justify-between h-full">
      <div>
        <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-xl">
          <Image
            src={data.image}
            alt={data.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4 sm:p-5 px-1 sm:px-2">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] sm:text-xs font-semibold bg-lime-950/50 text-lime-400 border border-lime-900/50 px-2.5 py-1 rounded-full truncate">
              {data.category}
            </span>
            <span className="text-[11px] sm:text-xs text-zinc-400 shrink-0">
              {data.level}
            </span>
          </div>

          <h3 className="font-bold text-sm sm:text-base leading-snug mb-2 line-clamp-2 text-zinc-100 group-hover:text-lime-400 transition-colors">
            {data.title}
          </h3>

          <p className="text-xs text-zinc-400 mb-3">
            by {data.instructor}
          </p>

          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-semibold text-amber-500 flex items-center gap-1">
              ⭐ {data.rating}
            </span>
            <span className="text-xs text-zinc-400 flex items-center gap-1">
              ⏱ {data.duration}
            </span>
          </div>
        </div>
      </div>

      <div className="px-1 sm:px-2 pb-1">
        <Link href={`/courses/${data.id}`} className="block w-full">
          <button className="w-full py-2.5 bg-lime-600 hover:bg-lime-700 text-white text-sm font-semibold rounded-xl transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;