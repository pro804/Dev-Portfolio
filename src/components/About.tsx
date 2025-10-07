import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img
          src={aboutSvg}
          alt="about"
          className="w-full h-64 hover:scale-105 transition-transform duration-300"
        />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I'm a front-end developer with a background in industrial design
            engineering.I love transforming complex ideas into intuitive,
            user-friendly interfaces. While I'm proficient with modern tools
            like React and TypeScript, I believe in using the right technology
            for each project and am always eager to learn new approaches that
            solve problems effectively. My engineering background gives me a
            systematic approach to development, focusing on creating practical,
            maintainable solutions that make people's lives simpler.
            <br />
            <br />
            <span className="font-semibold">
              I'm currently looking for new opportunities where I can contribute
              and grow as a developer.
            </span>
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
