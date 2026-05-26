import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-40 w-full border-b border-divider bg-background/70 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center">
     <div>
       <Image src={"/globe.png"} alt="logo" width={40} height={20}></Image>
     </div>
         <div>
           Skill<span className="text-primary">Sphere</span>
         </div>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/courses" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/profile" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              My Profile
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm border border-divider px-4 py-1.5 rounded-lg hover:bg-default-100 transition-colors">
            Login
          </Link>
          <Link href="/register" className="text-sm bg-primary px-4 py-1.5 rounded-lg hover:opacity-90">
            Sign In
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;