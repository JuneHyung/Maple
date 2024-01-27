import { useCallback, useEffect, useState } from "react";
import { AbilityInfoItem, getCharacterAbility } from "../../api/stat";
import AbilityInfoListItem from "./AbilityInfoListItem";
import { divideGrade } from "../../api/util";
import { CommonProps } from "../TabContent";

const AbilityInfoList = ({ ocid }: CommonProps) => {
  const [abilityInfo, setAbilityInfo] = useState<AbilityInfoItem[]>([]);

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
    getAbilityInfo(ocid);
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
