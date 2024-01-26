import { useCallback, useEffect, useState } from "react";
import { FinalStat, getCharacterStat } from "../../api/stat";
import StatInfoListItem from "./StatInfoListItem";

interface StatInfoProps {
  ocid: string;
}
const StatInfoList = ({ ocid }: any) => {
  const [statInfo, setStatInfo] = useState<FinalStat[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  
  const getStatInfo = useCallback(async (ocid: string) => {
    try {
      const result = await getCharacterStat(ocid);
      setStatInfo(result);
    } catch (e) {
      setStatInfo([]);
      alert(e);
    }
  }, []);

  useEffect(() => {
    getStatInfo(ocid);
  }, [getStatInfo, ocid]);

  return (
    <div className="stat-info">
    <ul className={`stat-info-list ${isOpen ? 'isOpen' : ''}`}>
      <h1 className="info-title">스탯</h1>
      {statInfo.map((stat) => (
        <StatInfoListItem stat={stat} key={`${stat.stat_name}${stat.stat_value}`}/>
      ))}
    </ul>
    <button className="open-button" onClick={()=>setIsOpen(!isOpen)}>{isOpen ? '접기' : '펼치기'}</button>
    </div>
  );
};

export default StatInfoList;
