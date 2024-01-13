import { useCallback, useEffect, useState } from "react";
import { RankInfo, getRankOverall } from "../../api/rank";

const RankInfoList = ({selected}: any) => {
  const [rankInfoList, setRankInfoList] = useState<RankInfo>([] as RankInfo);

  const getRankingInfoList = useCallback(async() => {
    try {
      const info = await getRankOverall(selected.key);
      console.log(info)
      setRankInfoList(info);
    } catch (e) {
      setRankInfoList([] as RankInfo);
      alert(e);
    }
  },[selected.key])

  
  useEffect(() => {
    if(selected.key){
      getRankingInfoList();
    }else{
      setRankInfoList([] as RankInfo)
    }
  }, [getRankingInfoList, selected.key]);

  return (
    <ul className="rank-info-list">
      {rankInfoList.map((info, idx) =>{
        return <li className="rank-info-item" key={info.character_name}>
          <p>{idx+1 < 10 ? `0${idx+1}` : idx+1}</p>
          <p>{info.character_name}</p>
          <p>{info.world_name}</p>
          <p>{info.sub_class_name}</p>
          <p>Lv.{info.character_level}</p>
          <p>인기도 : {info.character_popularity}</p>
        </li>
      })}
    </ul>
  )
}
export default RankInfoList;