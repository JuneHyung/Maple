import HexaStatInfoList from '@/components/skill/HexaStatInfoList';
import SkillInfoList from '@/components/skill/SkillInfoList';

const SkillInfoPage = () => {
  return (
    <div className="skill-info-page">
      <div className="info-block">
        <SkillInfoList grade="hyperpassive" />
      </div>
      <div className="info-block">
        <SkillInfoList grade={5} />
      </div>
      <div className="info-block">
        <SkillInfoList grade={6} />
      </div>
      <div className="info-block">
        <HexaStatInfoList />
      </div>
    </div>
  );
};
export default SkillInfoPage;
