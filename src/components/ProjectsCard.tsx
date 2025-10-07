import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

interface ProjectCardProps {
  id: string;
  img: string;
  url: string;
  github: string;
  title: string;
  text: string;
}

const ProjectsCard: React.FC<ProjectCardProps> = ({
  url,
  img,
  github,
  title,
  text,
}) => {
  return (
    <>
      <article
        className="bg-white rounded-lg shadow-md 
    hover:shadow-xl duration-300"
      >
        <div className="aspect-video overflow-hidden rounded-t-lg ">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover "
            loading="lazy"
          />
        </div>
        <div className=" p-8">
          <h2 className="text-xl font-medium tracking-wide ">{title}</h2>
          <p className="mt-4 text-slate-700 leading-loose">{text}</p>
          <div className="mt-4  flex gap-x-4">
            <a href={url} target="_blank" rel="noreferrer">
              <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectsCard;
