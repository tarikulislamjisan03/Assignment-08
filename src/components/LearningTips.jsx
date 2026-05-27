import { FaBullseye, FaUsers } from "react-icons/fa";
import { MdRefresh, MdBuild } from "react-icons/md";

const LearningTips = () => {
  const tips = [
    {
      // ✅ FaTarget এর বদলে সঠিক আইকন FaBullseye ব্যবহার করা হয়েছে
      icon: <FaBullseye className="text-xl text-orange-500" />,
      title: "Set daily goals",
      desc: "30 mins of focused learning daily beats 5 hours on weekends.",
    },
    {
      icon: <MdRefresh className="text-2xl text-blue-500" />,
      title: "Active recall",
      desc: "After each lesson, close the tab and write what you remember.",
    },
    {
      icon: <MdBuild className="text-xl text-yellow-500" />,
      title: "Build as you learn",
      desc: "Apply every concept to a real project immediately.",
    },
    {
      icon: <FaUsers className="text-xl text-amber-600" />,
      title: "Join communities",
      desc: "Discord groups turbo-charge your growth through peer learning.",
    },
  ];

  return (
    <section className="bg-[#11110f] text-white py-16 px-6 md:px-12 lg:px-24 mt-10">
      <div className="  mx-auto">
        
        {/* 📌 Top Tagline */}
        <div className="flex items-center gap-2 text-xs font-bold text-green-500 tracking-wider uppercase mb-3">
          <span>📌</span> PRO TIPS
        </div>

        {/* 📌 Headings */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Learn smarter, not harder
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-12">
          Techniques used by top-performing students.
        </p>

        {/* 📌 Main Grid Wrapper with Border Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-zinc-800 rounded-2xl overflow-hidden bg-[#161614]">
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`p-8 flex flex-col gap-4 transition-colors duration-300 hover:bg-[#1c1c1a] ${
                // রেসপন্সিভ বর্ডার ম্যানেজমেন্ট (স্ক্রিনশটের মতো নিখুঁত গ্রিড বর্ডার লেআউট)
                index !== 3 ? "lg:border-r border-zinc-800" : ""
              } ${
                index < 2 ? "border-b sm:border-b lg:border-b-0 border-zinc-800" : ""
              } ${
                index === 2 ? "border-b sm:border-b-0 border-zinc-800" : ""
              }`}
            >
              {/* Icon Container */}
              <div className="p-2.5 w-fit h-fit flex items-center justify-center rounded-lg bg-[#1f1f1d] border border-zinc-700/50 shadow-inner">
                {tip.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-zinc-100">
                  {tip.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningTips;