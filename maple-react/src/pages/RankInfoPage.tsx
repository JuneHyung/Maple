
import RankInfoList from '@/assets/scss/components/rank/RankInfoList';
import CharacterTypeList from '@/components/rank/CharacterTypeList';

const RankInfoPage = () => {
  return (
    <div className="rank-info-page">
      <CharacterTypeList />
      <RankInfoList />
    </div>
  );
};

export default RankInfoPage;
