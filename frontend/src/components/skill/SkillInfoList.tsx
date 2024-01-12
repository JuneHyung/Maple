import { useCallback, useEffect, useState } from "react";
import { SkillInfo, getCharacterSkills } from "../../api/skill";

const SkillInfoList = ({ ocid, grade }: any) => {
  const [skillInfoList, setSkillInfoList] = useState<SkillInfo>(
    {} as SkillInfo
  );

  const getHyperPassiveSkill = useCallback(async (targetOcid: string) => {
    try {
      const info = await getCharacterSkills(targetOcid, grade,);
      setSkillInfoList(info);
    } catch (e) {
      setSkillInfoList({} as SkillInfo);
      alert(e);
    }
  }, [grade]);

  useEffect(() => {
    getHyperPassiveSkill(ocid);
  }, [getHyperPassiveSkill, ocid]);

  return (
    <ul className="skill-info-list">
      <h1 className="info-title">{grade===5 ? '5차 스킬' : grade===6 ? '6차 스킬' : '하이퍼 패시브 스킬'}</h1>
      {skillInfoList.character_skill &&
        skillInfoList.character_skill.map((skill) => {
          if(skill.skill_level>0){
            return (
              <li key={skill.skill_name} className="skill-info-item">
                <div className="skill-icon">
                  <img src={skill.skill_icon} alt={`${skill.skill_name} icon`} />
                  <p className="skill-skill-level">
                    Lv.{skill.skill_level}
                  </p>
                </div>
                <div className="skill-introduce">
                  <p className="skill-name">{skill.skill_name}</p>
                  {
                    skill.skill_effect !== null && <div
                    className="skill-effect"
                  >{skill.skill_effect}</div>
                  }
                </div>
                <div className="skill-detail">
                  <div className="skill-description">{skill.skill_description}</div>
                </div>
              </li>
            );
          }else return null;
        })}
    </ul>
  );
};

export default SkillInfoList;
