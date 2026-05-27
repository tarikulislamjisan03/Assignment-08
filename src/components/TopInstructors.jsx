import React from 'react';

const TopInstructors = () => {
  const instructors = [
    {
      id: 1,
      initials: 'JD',
      bgColor: 'bg-[#295b36]', // Dark Green
      name: 'John Doe',
      title: 'Full Stack Engineer',
      courses: '12 courses',
      students: '8.4k students',
    },
    {
      id: 2,
      initials: 'SA',
      bgColor: 'bg-[#9d3c5b]', // Soft Magenta/Maroon
      name: 'Sara Ahmed',
      title: 'Senior UX Designer',
      courses: '8 courses',
      students: '5.2k students',
    },
    {
      id: 3,
      initials: 'MC',
      bgColor: 'bg-[#f4a15b]', // Warm Orange/Ochre
      name: 'Mike Chen',
      title: 'Growth Marketer',
      courses: '10 courses',
      students: '6.1k students',
    },
    {
      id: 4,
      initials: 'RL',
      bgColor: 'bg-[#1264a2]', // Nice Corporate Blue
      name: 'Rachel Lee',
      title: 'Data Scientist',
      courses: '7 courses',
      students: '4.8k students',
    },
  ];

  return (
    <section className="bg-[#fef9f1] text-[#1a1a19] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* 📌 Top Tagline with Icon */}
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-xs font-bold text-[#65a30d] tracking-wider uppercase">
                <span className="text-sm">🏆</span> MEET THE EXPERTS
            </div>

            {/* 📌 Main Headings */}
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                Top instructors
            </h2>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-lg">
                Industry veterans whove trained thousands of professionals.
            </p>
        </div>

        {/* 📌 Instructors Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="flex flex-col items-center gap-5 p-10 bg-white border border-zinc-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-zinc-200"
            >
              {/* Initials Container with Custom Background Color */}
              <div
                className={`w-24 h-24 flex items-center justify-center rounded-full text-3xl font-bold text-white shadow-inner ${instructor.bgColor}`}
              >
                {instructor.initials}
              </div>

              {/* Name & Title */}
              <div className="flex flex-col gap-1.5 text-center">
                <h3 className="text-xl font-bold text-gray-950">
                  {instructor.name}
                </h3>
                <p className="text-xs text-zinc-500 uppercase font-semibold tracking-wide">
                  {instructor.title}
                </p>
              </div>

              {/* Course & Student Stats */}
              <div className="text-center text-xs font-medium text-zinc-600">
                  <span className='font-semibold text-gray-800'>{instructor.courses}</span> • <span className='font-semibold text-gray-800'>{instructor.students}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopInstructors;