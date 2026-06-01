"use client";
import { authClient } from "@/lib/authclient";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Avatar } from "@heroui/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const userdata = authClient.useSession();
  const user = userdata.data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-divider backdrop-blur-lg bg-amber-50">
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-4 sm:px-6">

        <Link href="/" className="text-xl font-bold flex items-center gap-1">
          <div>
            <Image src={"/globe.png"} alt="logo" width={40} height={20} priority />
          </div>
          <div>
            Skill<span className="text-green-900">Sphere</span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link href="/" className="text-sm text-black font-bold hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/courses" className="text-sm text-black font-bold hover:text-foreground transition-colors">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/profile" className="text-sm hover:text-foreground transition-colors text-black font-semibold">
              My Profile
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-2 sm:gap-3">
          {!user ? (
            <>
              <Link 
                href="/login" 
                className="text-xs sm:text-sm text-white font-bold px-3 sm:px-4 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors"
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="text-xs sm:text-sm text-white bg-green-700 px-3 sm:px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <Avatar.Image 
                  alt={user?.name || "User"} 
                  src={user?.image} 
                  referrerPolicy="no-referrer"  
                />
                <Avatar.Fallback>
                  {user?.name ? user.name[0].toUpperCase() : "U"}
                </Avatar.Fallback>
              </Avatar>

              <button 
                onClick={handleLogout}
                className="text-xs sm:text-sm text-white bg-red-600 px-3 sm:px-4 py-1.5 rounded-lg hover:bg-red-700 transition-colors font-bold"
              >
                Logout
              </button>
            </div> 
          )}
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-amber-50 border-t border-divider px-4 py-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-sm text-black font-bold hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/courses" onClick={() => setMenuOpen(false)} className="text-sm text-black font-bold hover:text-foreground transition-colors">
            Courses
          </Link>
          <Link href="/profile" onClick={() => setMenuOpen(false)} className="text-sm text-black font-semibold hover:text-foreground transition-colors">
            My Profile
          </Link>
          
          <div className="flex gap-3 pt-4 border-t border-divider items-center">
            {!user ? (
              <>
                <Link href="/login" onClick={() => setMenuOpen(false)} className="text-sm text-white font-bold px-4 py-1.5 rounded-lg bg-blue-500 transition-colors text-center flex-1">
                  Login
                </Link>
                <Link href="/register" onClick={() => setMenuOpen(false)} className="text-sm text-white bg-green-700 px-4 py-1.5 rounded-lg hover:opacity-90 text-center flex-1">
                  Register
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3 w-full justify-between">
                <Avatar className="w-12 h-12">
                  <Avatar.Image 
                    alt={user?.name || "User"} 
                    src={user?.image} 
                    referrerPolicy="no-referrer"  
                  />
                  <Avatar.Fallback>
                    {user?.name ? user.name[0].toUpperCase() : "U"}
                  </Avatar.Fallback>
                </Avatar>
                <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="text-sm text-white bg-red-600 px-4 py-1.5 rounded-lg font-bold text-center flex-1">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;