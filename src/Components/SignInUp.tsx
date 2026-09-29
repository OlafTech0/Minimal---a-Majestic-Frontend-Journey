import Background from "../assets/Background.jpg";
import { Orbit } from "lucide-react"
import { TextAlignJustify } from "lucide-react"
import { useState } from "react";
import { easeOut, motion } from "framer-motion";

function SignInUp() {

  const [isSwitched, setIsSwitched] = useState(false);
  
  return (
    <div
      className=" overflow-hidden relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >

      <TextAlignJustify size={38} className="absolute left-12 top-8" />
      <Orbit size={38} className="absolute left-[50%] top-8" />

      <motion.div 
          animate={{ x: isSwitched ? "-50%" : "0%" }}
          transition={{ ease: easeOut, duration: 0.4 }}
         className="flex w-[200vw] h-screen"
          >

      {/* Sign In Section */}
      <section className="relative w-screen">
        
        <div className="absolute top-40 left-30">
        <h1 className="text-white text-9xl">Welcome Back User</h1>
        </div>

        <div
          className="
            absolute left-[22vw] top-86
            rounded-3xl border border-white/20
            bg-white/20 p-8 shadow-2xl
            backdrop-blur-md
            will-change-[backdrop-filter]
            h-140
            w-120
            items-center
          "
        >
          <h3 className="text-white mb-4 text-5xl text-center mt-4">Sign In</h3>
          <form className="flex flex-col gap-10 items-center text-[1rem] mt-18">
            <input
              className="w-95 h-16 rounded-2xl border border-white/30 bg-white/10 p-3 text-white placeholder-white/60 outline-none focus:bg-white/20 transition-all"
              type="email"
              placeholder="E-mail"
            />

            <input
              className="w-95 h-16 rounded-2xl border border-white/30 bg-white/10 p-3 text-white placeholder-white/60 outline-none focus:bg-white/20 transition-all"
              type="password"
              placeholder="Password"
            />

            <button type="submit" className="
            w-60 h-15 cursor-pointer bg-[#e7f6f3] text-black text-[1.4rem] rounded-2xl
            ">Sign In</button>

            <u className="cursor-pointer hover:text-gray-400" onClick={() => setIsSwitched(true) }>Don't have an Account yet?</u>

          </form>
        </div>

      </section>

        {/* Sign Up Section */}

      <section className="relative w-screen">
        
        <div className="absolute top-40 right-60">
        <h1 className="text-white text-9xl">Welcome Stranger</h1>
        </div>

        <div
          className="
            absolute right-[22vw] top-86
            rounded-3xl border border-white/20
            bg-white/20 p-8 shadow-2xl
            backdrop-blur-md
            will-change-[backdrop-filter]
            h-140
            w-120
            items-center
          "
        >
          <h3 className="text-white mb-4 text-5xl text-center mt-4">Sign Up</h3>
          <form className="flex flex-col gap-10 items-center text-[1rem] mt-18">
            <input
              className="w-95 h-16 rounded-2xl border border-white/30 bg-white/10 p-3 text-white placeholder-white/60 outline-none focus:bg-white/20 transition-all"
              type="email"
              placeholder="E-mail"
            />

            <input
              className="w-95 h-16 rounded-2xl border border-white/30 bg-white/10 p-3 text-white placeholder-white/60 outline-none focus:bg-white/20 transition-all"
              type="password"
              placeholder="Password"
            />

            <button type="submit" className="
            w-60 h-15 cursor-pointer bg-[#e7f6f3] text-black text-[1.4rem] rounded-2xl
            ">Sign Up</button>

            <u className="cursor-pointer hover:text-gray-400" onClick={() => setIsSwitched(false) }>Have an Account already?</u>

          </form>
        </div>

      </section>

      

      </motion.div>
      

    </div>
  );
}

export default SignInUp;