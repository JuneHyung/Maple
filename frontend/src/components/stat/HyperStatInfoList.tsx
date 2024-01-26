import { useCallback, useEffect, useState } from "react";
import { HyperStat, getCharacterHyperStat } from "../../api/stat";
import HyperStatInfoListItem from "./HyperStatInfoListItem";

const initialState = {
  date: '',
  preset_no: 0,
  hyper_stat_list: [
    {
      stat_type: "",
      stat_point: 0,
      stat_level: 0,
      stat_increase: "",
    },
  ],
  hyper_stat_remain_point: 0,
};

const HyperStatInfoList = ({ ocid }: any) => {
  const [hyperStatInfo, setHyperStatInfo] = useState<HyperStat>(initialState);
  
  const getHyperStatInfo = useCallback(async (targetOcid: string) => {
    try {
      const info = await getCharacterHyperStat(targetOcid);
      setHyperStatInfo(info)
    } catch (e) {
      setHyperStatInfo(initialState);
      alert(e);
    }
  }, []);

  useEffect(() => {
    getHyperStatInfo(ocid);
  }, [getHyperStatInfo, ocid]);

  return (
    <div className="stat-info">
      <ul className="stat-info-list isOpen">
        <h1 className="info-title">하이퍼 스탯</h1>
        <p>남은 포인트 : {hyperStatInfo.hyper_stat_remain_point}</p>
        {hyperStatInfo.preset_no!==0 ? (
          hyperStatInfo.hyper_stat_list.map((stat, idx) => (
            <HyperStatInfoListItem stat={stat} idx={idx} key={`${stat.stat_type}${stat.stat_level}`}/>
          ))
        ) : (
          <li>없음</li>
        )}
      </ul>
    </div>
  );
};

export default HyperStatInfoList;
