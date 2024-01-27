import { CommonProps } from "../components/TabContent";
import HexaStatInfoList from "../components/skill/HexaStatInfoList";
import SkillInfoList from "../components/skill/SkillInfoList";

const SkillInfoPage = ({ ocid }: CommonProps) => {
  return (
    <div className="skill-info-page">
      <SkillInfoList ocid={ocid} grade="hyperpassive" />
      <SkillInfoList ocid={ocid} grade={5} />
      <SkillInfoList ocid={ocid} grade={6} />
      <HexaStatInfoList ocid={ocid} />
    </div>
  );
};
export default SkillInfoPage;
