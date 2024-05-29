import { useCallback, useEffect, useState } from "react";
import { FinalStat, getCharacterStat } from "../../api/stat";
import StatInfoListItem from "./StatInfoListItem";
import { CommonProps } from "../TabContent";
import OpenButton from "../common/OpenButton";

const StatInfoList = ({ ocid }: CommonProps) => {
  const [statInfo, setStatInfo] = useState<FinalStat[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  
  // ocid로 캐릭터의 스탯정보 조회
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
    <OpenButton list={statInfo} isOpen={isOpen} handleIsOpen={setIsOpen}/>
    </div>
  );
};

export default StatInfoList;
