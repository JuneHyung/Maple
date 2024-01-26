import { useCallback, useEffect, useState } from "react";
import { RankInfo, Ranking, getRankOverall } from "../../api/rank";

const RankInfoList = ({ selected, handleOCID, setCharacterName }: any) => {
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
            <li className="rank-info-item" key={info.character_name} onClick={() => handleOnClick(info)}>
              <p className="rank-info-row">
                <span className="rank-number">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
              </p>
              <p className="rank-info-row">
                <span className="character-world-name">[{info.world_name}]</span>
                <span className="character-name">{info.character_name}</span>
              </p>
              <p className="rank-info-row">
                <span className="character-level">Lv.{info.character_level}</span>
                <span className="class-name">{info.sub_class_name || info.class_name}</span>
              </p>
              <p className="rank-info-row">
                <span className="character-popularity">인기도 : {info.character_popularity}</span>
              </p>
              <p className="rank-info-row">
                <span className="character-guild-name">길드 : {info.character_guildname ?? "없음"}</span>
              </p>
            </li>
          );
        })}
    </ul>
  );
};
export default RankInfoList;
