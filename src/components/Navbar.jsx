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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link href="/" className="text-xl font-bold flex items-center gap-1 shrink-0">
          <div className="relative w-10 h-10">
            <Image src="/globe.png" alt="logo" fill className="object-contain" priority />
          </div>
          <div className="text-base sm:text-xl">
            Skill<span className="text-green-900">Sphere</span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          <li>
            <Link href="/" className="text-sm text-black font-bold hover:text-green-900 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/courses" className="text-sm text-black font-bold hover:text-green-900 transition-colors">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/profile" className="text-sm hover:text-green-900 transition-colors text-black font-semibold">
              My Profile
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <>
              <Link 
                href="/login" 
                className="text-sm text-white font-bold px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition-colors min-w-[80px] text-center"
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="text-sm text-white bg-green-700 px-4 py-2 rounded-xl hover:bg-green-800 transition-colors min-w-[80px] text-center"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10 ring-2 ring-green-900/10">
                <Avatar.Image  
                  className="w-10 h-10 rounded-full"
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
                className="text-sm text-white bg-red-600 px-4 py-2 rounded-xl hover:bg-red-700 transition-colors font-bold"
              >
                Logout
              </button>
            </div> 
          )}
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-xl hover:bg-black/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

      </div>

      <div className={`md:hidden bg-amber-50 border-t border-divider w-full overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[350px] opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}>
        <div className="px-4 py-5 flex flex-col gap-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-sm text-black font-bold hover:text-green-900 transition-colors py-1">
            Home
          </Link>
          <Link href="/courses" onClick={() => setMenuOpen(false)} className="text-sm text-black font-bold hover:text-green-900 transition-colors py-1">
            Courses
          </Link>
          <Link href="/profile" onClick={() => setMenuOpen(false)} className="text-sm text-black font-semibold hover:text-green-900 transition-colors py-1">
            My Profile
          </Link>
          
          <div className="flex gap-3 pt-4 border-t border-divider items-center w-full">
            {!user ? (
              <>
                <Link href="/login" onClick={() => setMenuOpen(false)} className="text-sm text-white font-bold px-4 py-2.5 rounded-xl bg-blue-500 transition-colors text-center flex-1">
                  Login
                </Link>
                <Link href="/register" onClick={() => setMenuOpen(false)} className="text-sm text-white bg-green-700 px-4 py-2.5 rounded-xl hover:bg-green-800 text-center flex-1">
                  Register
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-4 w-full justify-between">
                <Avatar className="w-11 h-11 shrink-0">
                  <Avatar.Image 
                    alt={user?.name || "User"} 
                    src={user?.image} 
                    referrerPolicy="no-referrer"  
                  />
                  <Avatar.Fallback>
                    {user?.name ? user.name[0].toUpperCase() : "U"}
                  </Avatar.Fallback>
                </Avatar>
                <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="text-sm text-white bg-red-600 px-4 py-2.5 rounded-xl font-bold text-center flex-1">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;