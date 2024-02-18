import PageMeta from "../components/PageMeta";
import { CommonProps } from "../components/TabContent";
import HexaStatInfoList from "../components/skill/HexaStatInfoList";
import SkillInfoList from "../components/skill/SkillInfoList";

const SkillInfoPage = ({ ocid }: CommonProps) => {
  return (
    <div className="skill-info-page">
      <PageMeta title="스킬 정보 조회" desc="하이퍼스킬, 5차, 6차 스킬, Hexa 스탯 정보조회"/>
      <SkillInfoList ocid={ocid} grade="hyperpassive" />
      <SkillInfoList ocid={ocid} grade={5} />
      <SkillInfoList ocid={ocid} grade={6} />
      <HexaStatInfoList ocid={ocid} />
    </div>
  );
};
export default SkillInfoPage;
