import Background from "../assets/Background.jpg";
import GoogleIcon from "../assets/googleIcon.png"
import { Orbit } from "lucide-react"
import { TextAlignJustify } from "lucide-react"
import { Lock } from "lucide-react"
import { Zap } from "lucide-react";
import { Rocket } from "lucide-react";
import { Star } from "lucide-react";
import { useState } from "react";
import { easeIn, easeOut, motion } from "framer-motion";

function SignInUp() {

  const [isSwitched, setIsSwitched] = useState(false);
  
  return (
    <div
      className=" overflow-hidden relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      
        <motion.div
        initial={{ y:-30 }}
        animate={{ y:0 }}
        transition={{ ease: easeIn, duration: 0.2 }}
        >

      <TextAlignJustify size={38} className="absolute left-4 sm:left-12 top-8 z-50" />
      <Orbit size={38} className="absolute left-18 sm:left-[50%] top-8 z-50" />

        <div className="absolute right-4 sm:right-8 top-8 z-50">
      <button className={` cursor-pointer mr-2 sm:mr-7 border-gray-400 px-2.5 py-1 rounded border ${!isSwitched ?'bg-white text-black' : 'bg-none text-white'}`} onClick={() => setIsSwitched(false) }>Sign In</button>
      <button className={` cursor-pointer mr-0 sm:mr-7 border-gray-400 px-2.5 py-1 rounded border ${isSwitched ? 'bg-white text-black' : 'bg-none text-white'}`} onClick={() => setIsSwitched(true) }>Sign Up</button>
      </div>

      </motion.div>

      <motion.div 
          animate={{ x: isSwitched ? "-50%" : "0%" }}
          transition={{ ease: easeOut, duration: 0.4 }}
         className="flex w-[200vw] h-screen"
          >

      {/* Sign In Section */}
      <section className="relative w-screen h-screen overflow-y-auto overflow-x-hidden lg:overflow-visible flex flex-col items-center lg:block pt-24 pb-10 lg:py-0 px-4 lg:px-0">
        
        <div className="lg:absolute lg:top-40 lg:left-125 text-center lg:text-left">
        <motion.h1
        initial={{ opacity:0, x:30 }}
        animate={{ opacity: 1, x:0 }}
        transition={{ ease: easeIn, duration: 0.6 }}
        className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl wrap-break-words">Welcome Back User</motion.h1>
        </div>

        <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeIn }}
          className="
            relative mt-10 lg:mt-0 lg:absolute lg:left-[22vw] lg:top-86
            rounded-3xl border border-white/20
            bg-white/20 p-6 pb-10 lg:p-8 shadow-2xl
            backdrop-blur-md
            will-change-[backdrop-filter]
            h-auto lg:h-140
            w-full max-w-120 lg:w-120
            items-center
          "
        >
          <h3 className="text-white mb-4 text-4xl sm:text-5xl text-center mt-4">Sign In</h3>
          <form className="flex flex-col gap-6 lg:gap-10 items-center text-[1rem] mt-8 lg:mt-18">
            <input
              className="w-full max-w-95 h-16 rounded-2xl border border-white/30 bg-white/10 p-3 text-white placeholder-white/60 outline-none focus:bg-white/20 transition-all"
              type="email"
              placeholder="E-mail"
            />

            <input
              className="w-full max-w-95 h-16 rounded-2xl border border-white/30 bg-white/10 p-3 text-white placeholder-white/60 outline-none focus:bg-white/20 transition-all"
              type="password"
              placeholder="Password"
            />

            <button type="submit" className="
            w-60 h-15 cursor-pointer bg-[#e7f6f3] text-black text-[1.4rem] rounded-2xl
            ">Sign In</button>

            <u className="cursor-pointer hover:text-gray-400" onClick={() => setIsSwitched(true) }>Don't have an Account yet?</u>

          </form>
        </motion.div>

        <div className="order-3 mt-10 lg:mt-0 relative lg:absolute flex flex-col lg:bottom-85 lg:right-140 
        rounded-3xl border border-white/20 gap-5
            bg-white/5 p-6 pb-24 lg:p-8 shadow-2xl
            backdrop-blur-md
            will-change-[backdrop-filter]
            h-auto lg:h-100
            w-full max-w-120 lg:w-120
            items-center
        ">
          <Orbit className="mt-16" size={80}/>
          <h2 className="text-4xl">Minimal</h2>
          <p>a Majestic Frontend Journey</p>
          <button className="bg-white text-black px-4 py-1 rounded cursor-pointer hover:bg-gray-400 duration-200">Learn More</button>
           </div>

      </section>

        {/* Sign Up Section */}

      <section className="relative w-screen h-screen overflow-y-auto overflow-x-hidden lg:overflow-visible flex flex-col items-center lg:block pt-24 pb-10 lg:py-0 px-4 lg:px-0">

        <div className="order-3 mt-10 lg:mt-0 relative lg:absolute flex flex-col lg:bottom-85 lg:left-140 
        rounded-3xl border border-white/20 gap-5
            bg-white/5 p-6 pb-24 lg:p-8 shadow-2xl
            backdrop-blur-md
            will-change-[backdrop-filter]
            h-auto lg:h-100
            w-full max-w-120 lg:w-120
            
        ">

          <h3 className="text-center text-2xl">Why Us?</h3>
          <div className="flex items-center gap-3"><Lock /> <p>End-to-End Encryption — Your data is fully safe.</p></div>
          <div className="flex items-center gap-3"><Zap /> <p>Instant Setup — Ready to use in seconds.</p></div>
          <div className="flex items-center gap-3"><Rocket /> <p>Cloud Sync — Access your dashboard from anywhere.</p></div>
          <div className="flex justify-center mt-5"><Star size={40} color="#FACC15"/> <Star size={40} color="#FACC15"/> <Star size={40} color="#FACC15"/> 
          <Star size={40} color="#FACC15"/> <Star size={40} className="opacity-70" color="#FACC15"/> <div className="absolute bottom-15 flex" ><img src={GoogleIcon} className="w-7 h-7 " />
           <p>Provided By Google</p> </div></div>
        </div>
        
        <div className="order-1 lg:absolute lg:top-40 lg:left-125 text-center lg:text-left">
        <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl wrap-break-words">Hello There, Stranger</h1>
        </div>

        <div
          className="
            order-2 relative mt-10 lg:mt-0 lg:absolute lg:right-[22vw] lg:top-86
            rounded-3xl border border-white/20
            bg-white/20 p-6 pb-10 lg:p-8 shadow-2xl
            backdrop-blur-md
            will-change-[backdrop-filter]
            h-auto lg:h-140
            w-full max-w-120 lg:w-120
            items-center
          "
        >
          <h3 className="text-white mb-4 text-4xl sm:text-5xl text-center mt-4">Sign Up</h3>
          <form className="flex flex-col gap-6 lg:gap-10 items-center text-[1rem] mt-8 lg:mt-18">
            <input
              className="w-full max-w-95 h-16 rounded-2xl border border-white/30 bg-white/10 p-3 text-white placeholder-white/60 outline-none focus:bg-white/20 transition-all"
              type="email"
              placeholder="E-mail"
            />

            <input
              className="w-full max-w-95 h-16 rounded-2xl border border-white/30 bg-white/10 p-3 text-white placeholder-white/60 outline-none focus:bg-white/20 transition-all"
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