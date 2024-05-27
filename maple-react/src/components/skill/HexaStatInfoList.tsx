import { useCallback, useEffect, useState } from "react";
import { getCharacterHexaStat } from "@/api/skill";
import { calcHexaPlusScore } from "@/api/util";
import HexaStatInfoListItem from "./HexaStatInfoListItem";
import { useUserStore } from "@/store/user";
import { HexaStatInfo } from "@/models/skill";

const HexaStatInfoList = () => {
  const {ocid} = useUserStore();
  const [hexaStatInfoList, setHexaSkillInfoList] = useState<HexaStatInfo>(
    {} as HexaStatInfo
  );
  
  // ocid로 hexa stat정보 조회
  const getHexaStat = useCallback(async (targetOcid: string) => {
    try {
      const info = await getCharacterHexaStat(targetOcid);
      setHexaSkillInfoList(info);
    } catch (e) {
      setHexaSkillInfoList({} as HexaStatInfo);
      alert(e);
    }
  }, []);

  useEffect(() => {
    if(ocid){
      getHexaStat(ocid);
    }
  }, [getHexaStat, ocid]);
  
  return (
    <ul className="hexa-stat-list">
      <h1 className="info-title">Hexa 스탯</h1>
      {hexaStatInfoList.character_hexa_stat_core &&
        hexaStatInfoList.character_hexa_stat_core.map((stat) => {
          return (
            <HexaStatInfoListItem stat={stat} score={calcHexaPlusScore(stat.stat_level, stat.stat_name, stat.stat_pos)} key={`${stat.stat_name}${stat.stat_level}`}/>
          );
        })}
    </ul>
  );
};

export default HexaStatInfoList;
