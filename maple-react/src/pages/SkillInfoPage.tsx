import HexaStatInfoList from "@/components/skill/HexaStatInfoList";
import SkillInfoList from "@/components/skill/SkillInfoList";

const SkillInfoPage = () => {
  return (
    <div className="skill-info-page">
      <SkillInfoList grade="hyperpassive" />
      <SkillInfoList grade={5} />
      <SkillInfoList grade={6} />
      <HexaStatInfoList />
    </div>
  );
};
export default SkillInfoPage;
