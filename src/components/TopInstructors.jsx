import React from 'react';

const TopInstructors = () => {
  const instructors = [
    {
      id: 1,
      initials: 'JD',
      bgColor: 'bg-[#295b36]',
      name: 'John Doe',
      title: 'Full Stack Engineer',
      courses: '12 courses',
      students: '8.4k students',
    },
    {
      id: 2,
      initials: 'SA',
      bgColor: 'bg-[#9d3c5b]',
      name: 'Sara Ahmed',
      title: 'Senior UX Designer',
      courses: '8 courses',
      students: '5.2k students',
    },
    {
      id: 3,
      initials: 'MC',
      bgColor: 'bg-[#f4a15b]',
      name: 'Mike Chen',
      title: 'Growth Marketer',
      courses: '10 courses',
      students: '6.1k students',
    },
    {
      id: 4,
      initials: 'RL',
      bgColor: 'bg-[#1264a2]',
      name: 'Rachel Lee',
      title: 'Data Scientist',
      courses: '7 courses',
      students: '4.8k students',
    },
  ];

  return (
    <section className="bg-[#fef9f1] text-[#1a1a19] py-12 px-4 sm:px-8 md:px-12 lg:px-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-[#65a30d] tracking-wider uppercase">
            <span className="text-sm">🏆</span> MEET THE EXPERTS
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
            Top instructors
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto sm:mx-0">
            Industry veterans who have trained thousands of professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="flex flex-col items-center gap-5 p-6 sm:p-8 md:p-10 bg-white border border-zinc-100 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-zinc-200 w-full"
            >
              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full text-2xl sm:text-3xl font-bold text-white shadow-inner shrink-0 ${instructor.bgColor}`}
              >
                {instructor.initials}
              </div>

              <div className="flex flex-col gap-1.5 text-center w-full">
                <h3 className="text-lg sm:text-xl font-bold text-gray-950 truncate">
                  {instructor.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-zinc-500 uppercase font-semibold tracking-wide line-clamp-1">
                  {instructor.title}
                </p>
              </div>

              <div className="text-center text-xs font-medium text-zinc-600 border-t border-zinc-100 pt-4 w-full">
                <span className="font-semibold text-gray-800">{instructor.courses}</span> • <span className="font-semibold text-gray-800">{instructor.students}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopInstructors;