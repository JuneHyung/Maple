import { useCallback, useEffect, useState } from "react";
import { SkillInfo, getCharacterSkills } from "../../api/skill";
import SkillInfoListItem from "./SkillInfoListItem";
import { CommonProps } from "../TabContent";
import OpenButton from "../common/OpenButton";

type SkillInfoListProps = CommonProps & {grade: 5 | 6 | 'hyperpassive'}

const SkillInfoList = ({ ocid, grade }: SkillInfoListProps) => {
  const [skillInfoList, setSkillInfoList] = useState<SkillInfo>({} as SkillInfo);
  const [isOpen, setIsOpen] = useState(false);
  
  // ocid로 현재 사용중인 스킬목록을 grade에 따라 조회
  const getCharacterSkillsByGrade = useCallback(
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
    getCharacterSkillsByGrade(ocid);
  }, [getCharacterSkillsByGrade, ocid]);

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
        <OpenButton list={skillInfoList.character_skill} isOpen={isOpen} handleIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default SkillInfoList;
