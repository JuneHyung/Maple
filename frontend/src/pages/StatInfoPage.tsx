import PageMeta from "../components/PageMeta";
import { CommonProps } from "../components/TabContent";
import LinkSkillInfoList from "../components/skill/LinkSkillInfoList";
import AbilityInfoList from "../components/stat/AbilityInfoList";
import HyperStatInfoList from "../components/stat/HyperStatInfoList";
import StatInfoList from "../components/stat/StatInfoList";
import SymbolInfoList from "../components/stat/SymbolInfoList";

const StatInfoPage = ({ ocid }: CommonProps) => {
  return (
    <div className="stat-info-page">
      <PageMeta title="캐릭터 스탯 정보조회" desc="스탯, 어빌리티, 하이퍼스탯, 심볼, 링크스킬 정보조회"/>
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
