import { useCallback, useEffect, useState } from "react";
import { RankInfo, Ranking, getRankOverall } from "../../api/rank";
import RankInfoListItem from "./RankInfoListItem";
import { ClassInfo, RankInfoPageProps } from "../../pages/RankInfoPage";
type RankInfoListProps = {selected: ClassInfo } & RankInfoPageProps;
const RankInfoList = ({ selected, handleOCID, setCharacterName }: RankInfoListProps) => {
  const [rankInfoList, setRankInfoList] = useState<RankInfo>([] as RankInfo);

  const getRankingInfoList = useCallback(async () => {
    try {
      const info = await getRankOverall(selected.key);
      if (info) setRankInfoList(info);
    } catch (e) {
      setRankInfoList([] as RankInfo);
      alert(e);
    }
  }, [selected.key]);

  useEffect(() => {
    if (selected.key) {
      getRankingInfoList();
    } else {
      setRankInfoList([] as RankInfo);
    }
  }, [getRankingInfoList, selected.key]);

  const handleOnClick = useCallback(
    (character: Ranking) => {
      setCharacterName(character.character_name);
      handleOCID(character.character_name);
    },
    [handleOCID, setCharacterName]
  );

  return (
    <ul className="rank-info-list">
      {rankInfoList.length !== 0 &&
        rankInfoList.map((info, idx) => {
          return (
            <RankInfoListItem info={info} idx={idx} onClick={handleOnClick} key={`${info.character_name}${info.character_level}`}/>
          );
        })}
    </ul>
  );
};
export default RankInfoList;
