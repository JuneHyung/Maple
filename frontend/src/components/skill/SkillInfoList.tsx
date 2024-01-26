import { useCallback, useEffect, useState } from "react";
import { SkillInfo, getCharacterSkills } from "../../api/skill";
import SkillInfoListItem from "./SkillInfoListItem";

const SkillInfoList = ({ ocid, grade }: any) => {
  const [skillInfoList, setSkillInfoList] = useState<SkillInfo>({} as SkillInfo);
  const [isOpen, setIsOpen] = useState(false);
  
  const getHyperPassiveSkill = useCallback(
    async (targetOcid: string) => {
      try {
        const info = await getCharacterSkills(targetOcid, grade);
        setSkillInfoList(info);
      } catch (e) {
        setSkillInfoList({} as SkillInfo);
        alert(e);
      }
    },
    [grade]
  );

  useEffect(() => {
    getHyperPassiveSkill(ocid);
  }, [getHyperPassiveSkill, ocid]);

  return (
    <div className="skill-info">
      <ul className={`skill-info-list ${isOpen && "isOpen"}`}>
        <h1 className="info-title">{grade === 5 ? "5차 스킬" : grade === 6 ? "6차 스킬" : "하이퍼 패시브 스킬"}</h1>
        {skillInfoList.character_skill &&
          skillInfoList.character_skill.map((skill) => {
            if (skill.skill_level > 0) {
              return (<SkillInfoListItem skill={skill} key={`${skill.skill_name}${skill.skill_level}`}/>);
            } else return null;
          })}
      </ul>
      {(grade === 5 || grade === 6) && (
        <button className="open-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "접기" : "펼치기"}
        </button>
      )}
    </div>
  );
};

export default SkillInfoList;
