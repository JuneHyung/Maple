import { useCallback, useEffect, useState } from "react";
import { HyperStat, HyperStatPreset, getCharacterHyperStat } from "../../api/stat";

const initialState = {
  "hyper_stat_preset_1": [
    {
      "stat_type": "",
      "stat_point": 0,
      "stat_level": 0,
      "stat_increase": ""
    }
  ],
  "hyper_stat_preset_1_remain_point": 0,
  "hyper_stat_preset_2": [
    {
      "stat_type": "",
      "stat_point": 0,
      "stat_level": 0,
      "stat_increase": ""
    }
  ],
  "hyper_stat_preset_2_remain_point": 0,
  "hyper_stat_preset_3": [
    {
      "stat_type": "",
      "stat_point": 0,
      "stat_level": 0,
      "stat_increase": ""
    }
  ],
  "hyper_stat_preset_3_remain_point": 0
}

const HyperStatInfo = ({ocid}: any) => {
  const [hyperStatInfo, setHyperStatInfo] = useState<HyperStat>(
    initialState
  );
  const getHyperStatInfo = useCallback(async (targetOcid: string)=>{
    try{
      const info = await getCharacterHyperStat(targetOcid);
      const {hyper_stat_preset_1, hyper_stat_preset_1_remain_point, hyper_stat_preset_2, hyper_stat_preset_2_remain_point, hyper_stat_preset_3, hyper_stat_preset_3_remain_point } = info;
      // console.log(hyper_stat_preset_1)
      setHyperStatInfo({
        hyper_stat_preset_1, hyper_stat_preset_1_remain_point, hyper_stat_preset_2, hyper_stat_preset_2_remain_point, hyper_stat_preset_3, hyper_stat_preset_3_remain_point 
      })
    }catch(e){
      setHyperStatInfo(initialState);
      alert(e);
    }
  }, [])

  useEffect(()=>{
    getHyperStatInfo(ocid)
  }, [getHyperStatInfo, ocid])


  return (
    <ul className="hyper-stat-info-list">
    <h1>하이퍼 스탯</h1>
    {
      hyperStatInfo.hasOwnProperty('hyper_stat_preset_1_remain_point') 
      ? <li>
      <p>남은 포인트 : {hyperStatInfo.hyper_stat_preset_1_remain_point}</p>
      {
        hyperStatInfo.hyper_stat_preset_1.map((stat, idx)=>
          <p key={`preset${idx+1}${stat.stat_type}`}>{stat.stat_type} : {stat.stat_level} / {stat.stat_level===0 ? 0 : stat.stat_increase}</p>
        )
      } 
    </li>
    :<li>없음</li>
    }
    
  </ul>
  );
}

export default HyperStatInfo;