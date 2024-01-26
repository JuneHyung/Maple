import LinkSkillInfoList from "../components/skill/LinkSkillInfoList";
import AbilityInfoList from "../components/stat/AbilityInfoList";
import HyperStatInfoList from "../components/stat/HyperStatInfoList";
import StatInfoList from "../components/stat/StatInfoList";
import SymbolInfoList from "../components/stat/SymbolInfoList";

const StatInfoPage = ({ ocid }: any) => {
  return (
    <div className="stat-info-page">
      <div>
        <StatInfoList ocid={ocid} />
        <AbilityInfoList ocid={ocid} />
      </div>
      <HyperStatInfoList ocid={ocid} />
      <SymbolInfoList ocid={ocid} />
      <LinkSkillInfoList ocid={ocid} />
    </div>
  );
};

export default StatInfoPage;
