import Link from "next/link";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) এর নতুন আইকনের জন্য

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0a] text-zinc-400 py-16 px-6 md:px-12 lg:px-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* 📌 Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          
          {/* Column 1: Brand & Description (Takes 2 columns space on large screens) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="text-xl font-bold text-white flex items-center">
              Skill<span className="text-[#65a30d]">Sphere</span>
            </div>
            <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
              Empowering learners worldwide with expert-led, skill-focused courses for the modern world.
            </p>
            
            {/* Social Icons (With subtle square background box like screenshot) */}
            <div className="flex gap-3 mt-2">
              <a href="#" className="p-2 bg-[#141412] hover:bg-zinc-800 rounded text-zinc-500 hover:text-white transition-colors">
                <FaXTwitter className="text-base" />
              </a>
              <a href="#" className="p-2 bg-[#141412] hover:bg-zinc-800 rounded text-zinc-500 hover:text-white transition-colors">
                <FaLinkedin className="text-base" />
              </a>
              <a href="#" className="p-2 bg-[#141412] hover:bg-zinc-800 rounded text-zinc-500 hover:text-white transition-colors">
                <FaYoutube className="text-base" />
              </a>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Platform</h4>
            <Link href="/courses" className="text-sm hover:text-white transition-colors">All Courses</Link>
            <Link href="#" className="text-sm hover:text-white transition-colors">Instructors</Link>
            <Link href="#" className="text-sm hover:text-white transition-colors">Blog</Link>
          </div>

          {/* Column 3: Company Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Company</h4>
            <Link href="#" className="text-sm hover:text-white transition-colors">About Us</Link>
            <Link href="#" className="text-sm hover:text-white transition-colors">Careers</Link>
            <Link href="#" className="text-sm hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Column 4: Legal Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Legal</h4>
            <Link href="#" className="text-sm hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm hover:text-white transition-colors">Cookie Policy</Link>
          </div>

        </div>

        {/* 📌 Divider Line */}
        <div className="border-t border-zinc-900 my-6"></div>

        {/* 📌 Bottom Section: Copyright & Contact Info */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <div>
            © 2026 SkillSphere. All rights reserved.
          </div>
          <div className="flex gap-4">
            <span className="hover:text-zinc-400 transition-colors">hello@skillsphere.io</span>
            <span>•</span>
            <span className="hover:text-zinc-400 transition-colors">+1 800-555-0100</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;