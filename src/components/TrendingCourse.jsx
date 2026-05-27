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
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
          🚀 Trending Now
        </p>
        <h2 className="text-3xl font-bold mb-2">New Releases</h2>
        <p className="text-foreground/60 mb-10">
          Fresh courses added this month — be the first to enroll.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group border border-divider rounded-xl p-5 hover:border-primary transition-all duration-300 cursor-pointer"
            >
              {/* Number */}
              <div className="text-4xl font-bold text-foreground/10 mb-3 group-hover:text-primary/20 transition-colors">
                {String(course.id).padStart(2, "0")}
              </div>

              {/* Title + Badge */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-sm font-semibold leading-snug">
                  {course.title}
                </h3>
                {course.isNew && (
                  <span className="shrink-0 text-[10px] font-bold bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full uppercase">
                    New
                  </span>
                )}
              </div>

              {/* Meta */}
              <p className="text-xs text-foreground/50">
                {course.instructor} · {course.category} · {course.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;