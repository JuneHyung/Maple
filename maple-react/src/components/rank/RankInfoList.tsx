import { useCallback, useEffect, useState } from 'react';

import RankInfoListItem from './RankInfoListItem';
import { getRankOverall } from '@/api/rank';
import { useRankStore } from '@/store/rank';
import { RankInfo, Ranking } from '@/models/rank';
import { useUserStore } from '@/store/user';
import { getOcidByCharacterName } from '@/api/user';
import { useNavigate } from 'react-router-dom';

const RankInfoList = () => {
  const [rankInfoList, setRankInfoList] = useState<RankInfo>([] as RankInfo);
  const { selectedClass } = useRankStore();
  const { setOcid } = useUserStore();
  const nav = useNavigate();
  // 선택한 직업의 랭킹목록 조회.
  const getRankingInfoList = useCallback(async () => {
    try {
      const info = await getRankOverall(selectedClass.key);
      if (info) setRankInfoList(info);
    } catch (e) {
      setRankInfoList([] as RankInfo);
      alert(e);
    }
  }, [selectedClass.key]);

  useEffect(() => {
    if (selectedClass.key) {
      getRankingInfoList();
    } else {
      setRankInfoList([] as RankInfo);
    }
  }, [getRankingInfoList, selectedClass.key]);

  // 클릭시 해당 캐릭터 조회
  const handleOnClick = useCallback(async (character: Ranking) => {
    try {
      const { ocid } = await getOcidByCharacterName(character.character_name);
      setOcid(ocid);
      nav(`/user/${character.character_name}/stat`, { replace: true });
    } catch (e) {
      setOcid('');
    }
  }, []);

  return (
    <ul className="rank-info-list">
      {rankInfoList.length !== 0 &&
        rankInfoList.map((info, idx) => {
          return (
            <RankInfoListItem
              info={info}
              idx={idx}
              onClick={handleOnClick}
              key={`${info.character_name}${info.character_level}`}
            />
          );
        })}
    </ul>
  );
};
export default RankInfoList;
