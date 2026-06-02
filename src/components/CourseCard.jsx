"use client"
import Image from "next/image";
import Link from "next/link";



const CourseCard = ({ data }) => {


  return (


<section>
   

 

    <div className=" mb-10 shadow-xl hover:bg-purple-200 p-2 rounded-xl overflow-hidden hover:border-primary transition-all duration-300 group">
      
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-lg ">
        <Image
          src={data.image}
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
          <span className="text-xs text-foreground/50">{data.level}</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-sm leading-snug mb-2 line-clamp-2">
          {data.title}
        </h3>

        {/* Instructor */}
        <p className="text-xs text-foreground/50 mb-3">
          by {data.instructor}
        </p>

        {/* Rating + Duration */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-amber-500">
            ⭐ {data.rating}
          </span>
          <span className="text-xs text-foreground/50">⏱ {data.duration}</span>
        </div>

        {/* Button */}
        <Link href={`/courses/${data.id}`}>
          <button className="w-full py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
            View Details
          </button>
        </Link>

      </div>
    </div>
</section>

  );
};

export default CourseCard;