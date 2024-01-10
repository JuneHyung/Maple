import { useCallback, useEffect, useState } from "react";
import { FinalStat, getCharacterBasic, getCharacterStat } from "../../api/stat";
import { divideNumberComma } from "../../api/util";

interface StatInfoProps {
  ocid: string
}
const StatInfo= ({ocid}: any) => {
  const [statInfo, setStatInfo] = useState<FinalStat[]>([])

  const getStatInfo = useCallback(async (ocid:string)=>{
    try{
      const result = await getCharacterStat(ocid);
      setStatInfo(result)
    }catch(e){
      setStatInfo([]);
      alert(e)
    }
  }, [])

  useEffect(()=>{
    getStatInfo(ocid);
  },[getStatInfo, ocid]);

  return (
    <div>
      <h1>스탯</h1>
      <ul>
        {
          statInfo.map((stat)=>
            <li key={`${stat.stat_name}${stat.stat_value}`}>
              <span>{stat.stat_name}</span>
              <span>{stat.stat_value}</span>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default StatInfo;