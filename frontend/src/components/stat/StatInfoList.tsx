import { useCallback, useEffect, useState } from "react";
import { FinalStat, getCharacterBasic, getCharacterStat } from "../../api/stat";
import { divideNumberComma } from "../../api/util";

interface StatInfoProps {
  ocid: string;
}
const StatInfoList = ({ ocid }: any) => {
  const [statInfo, setStatInfo] = useState<FinalStat[]>([]);

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
    <ul className="stat-info-list">
      <h1 className="info-title">스탯</h1>
      {statInfo.map((stat) => (
        <li key={`${stat.stat_name}${stat.stat_value}`} className="stat-info-item">
          <span className="stat-name">{stat.stat_name}</span>
          <span className="stat-value">{stat.stat_value}</span>
        </li>
      ))}
    </ul>
  );
};

export default StatInfoList;
