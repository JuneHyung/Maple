
import CharacterTypeList from '@/components/rank/CharacterTypeList';
import RankInfoList from '@/components/rank/RankInfoList';

const RankInfoPage = () => {
  return (
    <div className="rank-info-page">
      <CharacterTypeList />
      <RankInfoList />
    </div>
  );
};

export default RankInfoPage;
