import { useCallback, useEffect, useState } from "react";
import { useUserStore } from "@/store/user";
import { getCharacterAbility } from "@/api/stat";
import { divideGrade } from "@/api/util";
import AbilityInfoListItem from "./AbilityInfoListItem";
import { AbilityInfoItem } from "@/models/stat";

const AbilityInfoList = () => {
  const {ocid} = useUserStore();
  const [abilityInfo, setAbilityInfo] = useState<AbilityInfoItem[]>([]);

  // ocid로 캐릭터의 어빌리티 정보를 조회
  const getAbilityInfo = useCallback(async (targetOcid: string) => {
    try {
      const info = await getCharacterAbility(targetOcid);
      setAbilityInfo(info);
    } catch (e) {
      setAbilityInfo([]);
      alert(e);
    }
  }, []);

  useEffect(() => {
    if(ocid.length>0) getAbilityInfo(ocid);
  }, [getAbilityInfo, ocid]);

  return (
    <ul className="ability-info-list">
      <h1 className="info-title">어빌리티</h1>
      <ul className="ability-info-content">
        {abilityInfo.map((ability) => (
          <AbilityInfoListItem ability={ability} grade={divideGrade(ability.ability_grade)} key={ability.ability_no}/>
        ))}
      </ul>
    </ul>
  );
};

export default AbilityInfoList;
