import LinkSkillInfoList from "@/components/skill/LinkSkillInfoList";
import AbilityInfoList from "@/components/stat/AbilityInfoList";
import HyperStatInfoList from "@/components/stat/HyperStatInfoList";
import StatInfoList from "@/components/stat/StatInfoList";
import SymbolInfoList from "@/components/stat/SymbolInfoList";

const StatInfoPage = () => {
  return (
    <div className="stat-info-page">
      <div className="info-block">
        <StatInfoList />
        <AbilityInfoList />
      </div>
      <div className="info-block">
      <HyperStatInfoList />
      </div>
      <div className="info-block">
      <SymbolInfoList />
      </div>
      <div className="info-block">
      <LinkSkillInfoList />
      </div>
    </div>
  );
};

export default StatInfoPage;
