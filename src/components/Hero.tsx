import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
          >
            I'm
            <br />
            <span className="text-emerald-600">Georgios</span> Petsoulis
          </motion.h1>

          <p className="mt-6 text-2xl sm:text-3xl text-slate-700 font-semibold">
            Front-end Developer
          </p>

          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            Crafting seamless web and mobile experiences.
          </p>

          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/pro804"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/georgios-petsoulis-02b3ba365/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>

        <article className="hidden md:block">
          <motion.img
            src={heroImg}
            alt="Developer illustration"
            className="h-80 lg:h-96 mx-auto"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          />
        </article>
      </div>
    </div>
  );
};

export default Hero;
