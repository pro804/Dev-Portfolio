interface skillCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}
const SkillsCard: React.FC<skillCardProps> = ({ icon, title, text }) => {
  return (
    <article className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:border-emerald-200">
      <div className="flex justify-center">
        <div className="p-3 bg-emerald-50 rounded-full group-hover:bg-emerald-100 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h4 className="mt-6 font-bold text-slate-800 text-center">{title}</h4>
      <p className="mt-2 text-slate-500 text-center">{text}</p>
    </article>
  );
};

export default SkillsCard;
