import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-green-100 py-12 lg:py-28">
      <div className="align-element grid lg:grid-cols-2 items-center gap-8 lg:gap-16">
        {/* Text Content */}
        <motion.article
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Intro Line */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-emerald-600 font-medium mb-3 lg:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight"
          >
            Georgios{" "}
            <span className="text-emerald-600 block lg:inline">Petsoulis</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            className="my-4 lg:my-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-700 font-light tracking-wide">
              Front-end Developer
            </h2>
            {/* Decorative line  */}
            <div className="hidden lg:block w-24 h-1 bg-emerald-500 mt-4 mx-auto lg:mx-0"></div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Creating exceptional digital experiences through code and design.
          </motion.p>

          {/* CTA Buttons  */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-6 lg:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href="#projects"
              className="bg-emerald-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold
               hover:bg-emerald-700 transition-all duration-300 shadow-lg 
               hover:shadow-xl transform hover:-translate-y-1 text-center"
            >
              View My Work
            </a>
            <a
              href="https://www.linkedin.com/in/georgios-petsoulis-02b3ba365/"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-emerald-600 text-emerald-600 px-6 sm:px-8 py-3 
              rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all
               duration-300 text-center"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center lg:justify-start gap-4 mt-6 lg:mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a
              href="https://github.com/pro804"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare
                className="h-8 w-8 sm:h-9 sm:w-9 text-slate-600 hover:text-emerald-600 
              transition-all duration-300 hover:scale-110"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/georgios-petsoulis-02b3ba365/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                className="h-8 w-8 sm:h-9 sm:w-9 text-slate-600 hover:text-emerald-600 
               transition-all duration-300 hover:scale-110"
              />
            </a>
          </motion.div>
        </motion.article>

        {/* Hero Image */}
        <motion.article
          className="relative order-first lg:order-last"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.img
            src={heroImg}
            alt="Developer illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-none lg:ml-auto h-48 sm:h-64 md:h-80 lg:h-96"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Decorative circles*/}
          <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-emerald-200 rounded-full opacity-50"></div>
          <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-emerald-300 rounded-full opacity-30"></div>
        </motion.article>
      </div>
    </div>
  );
};

export default Hero;
