"use client"
import React, { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc'; 
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { authClient } from '@/lib/authclient';


import { toast } from 'react-toastify';

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSignin = async (e) => {
    e.preventDefault();
    setErrors({});
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    // 💡 ম্যানুয়াল ক্লায়েন্ট সাইড ভ্যালিডেশন
    
const {data,error}=await authClient . signIn.email({
  email,
  password
})


  if(error){
    toast.error(error.message)
    return;
  }

  if(data){
  toast.success("Login successful!")
  setTimeout(() => {
    router.push("/")
  }, 1000) 
}
  };

  
    const handlegoogle=async()=>{
      console.log("google")
      const data = await authClient.signIn.social({
      provider: "google",
    });
    }

  return (
    <div className="min-h-[80vh] bg-base-100 flex items-center justify-center p-4 text-white">
      
      {/* 💳 প্রিমিয়াম লগইন কার্ড কন্টেইনার */}
      <div className="w-full max-w-md bg-[#141412] border border-zinc-800 p-6 sm:p-8 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-zinc-100 mb-6">Please Login</h2>
        
        {/* 📝 মেইন লগইন ফর্ম */}
        <form className="w-full flex flex-col gap-4" onSubmit={handleSignin}>
          
         
           
          {/* Email Field */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-zinc-300 text-sm font-medium">Email</label>
            <input 
              required
              name="email"
              type="email" 
              placeholder="john@example.com" 
              className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-lime-500 transition-colors text-sm"
            />
            {errors.email && <p className="text-xs text-red-500 mt-0.5">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-zinc-300 text-sm font-medium">Password</label>
            <input 
              required
              name="password"
              type="password" 
              placeholder="Enter your password" 
              className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-lime-500 transition-colors text-sm"
            />
            <p className="text-[11px] text-zinc-500 leading-tight">
              Must be 8+ characters with 1 uppercase & 1 number
            </p>
            {errors.password && <p className="text-xs text-red-500 mt-0.5">{errors.password}</p>}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-2 w-full">
            <button 
              type="submit" 
              disabled={loading}
              className="flex-1 bg-lime-600 hover:bg-lime-700 disabled:bg-zinc-700 text-white font-semibold rounded-xl h-11 transition-colors flex items-center justify-center gap-1.5 text-sm"
            >
              {!loading && <BiCheck className="text-xl" />} 
              {loading ? "Submitting..." : "Submit"}
            </button>
            <button 
              type="reset" 
              className="px-4 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-xl h-11 text-sm transition-colors"
            >
              Reset
            </button>
          </div>
        </form>

        {/* ➖ OR Divider ➖ */}
        <div className="flex items-center my-6 w-full">
          <div className="flex-1 border-t border-zinc-800"></div>
          <span className="px-3 text-[10px] text-zinc-500 uppercase tracking-wider">Or continue with</span>
          <div className="flex-1 border-t border-zinc-800"></div>
        </div>

        {/* 🔴 গুগল সোশ্যাল লগইন বাটন */}
        <button  onClick={handlegoogle}
          type="button" 
          className="w-full h-11 border border-zinc-800 hover:bg-zinc-900 text-zinc-200 font-medium flex items-center justify-center gap-2 rounded-xl text-sm transition-colors"
        >
          <FcGoogle className="text-xl" />
        Login in with Google
        </button>

        
        {/* 🔗 রেজিস্টার পেজের লিংক */}
        <p className="text-center text-sm text-zinc-400 mt-6">
          Dont have an account?{" "}
          <Link href="/signin" className="text-lime-500 hover:underline font-medium">
            Register here
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;