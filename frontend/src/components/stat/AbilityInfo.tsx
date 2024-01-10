import { useCallback, useEffect, useState } from "react";
import { AbilityInfoItem, getCharacterAbility } from "../../api/stat";
import { divideGrade } from "../../api/util";


const AbilityInfo = ({ocid}: any) => {
  const [abilityInfo, setAbilityInfo] = useState<AbilityInfoItem[]>([]);
  
    const getAbilityInfo = useCallback(async (targetOcid: string)=>{
      try{
        const info = await getCharacterAbility(targetOcid);
        setAbilityInfo(info)
      }catch(e){
        setAbilityInfo([]);
        alert(e);
      }
    },[])
    useEffect(()=>{
      getAbilityInfo(ocid);
    },[getAbilityInfo, ocid])
  return (
    <ul className="ability-info-list">
      <h1>어빌리티</h1>
      <ul className="ability-info-content">
      {
        abilityInfo.map((ability)=>
          <li 
          key={`${ability.ability_no}`}
          className={`ability-info-item ${ divideGrade(ability.ability_grade)}`}
          >[ {ability.ability_grade} ] {ability.ability_value}</li>
        )
      }
      </ul>
    </ul>
  )
}

export default AbilityInfo;