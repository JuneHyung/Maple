import LinkSkillInfoList from "@/components/skill/LinkSkillInfoList";
import AbilityInfoList from "@/components/stat/AbilityInfoList";
import HyperStatInfoList from "@/components/stat/HyperStatInfoList";
import StatInfoList from "@/components/stat/StatInfoList";
import SymbolInfoList from "@/components/stat/SymbolInfoList";

const StatInfoPage = () => {
  return (
    <div className="stat-info-page">
      <div>
        <StatInfoList />
        <AbilityInfoList />
      </div>
      <HyperStatInfoList />
      <SymbolInfoList />
      <LinkSkillInfoList />
    </div>
  );
};

export default StatInfoPage;
