interface SectionTilteProps {
  text: string;
}
const SectionTilte: React.FC<SectionTilteProps> = ({ text }) => {
  return (
    <div
      className="border-b border-gray-200 
  pb-5"
    >
      <h2 className="text-3xl font-medium tracking-wider capitalize">{text}</h2>
    </div>
  );
};

export default SectionTilte;
