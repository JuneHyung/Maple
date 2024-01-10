import { useCallback, useEffect, useState } from "react";
import { LinkSkillInfo, getCharacterLinkSkill } from "../../api/skill";

const LinkSkillInfoList = ({ ocid }: any) => {
  const [linkSkillInfo, setLinkSkillInfo] = useState<LinkSkillInfo>({} as LinkSkillInfo);

  const getLinkSkillInfo = useCallback(async (targetOcid: string) => {
    try {
      const info = await getCharacterLinkSkill(targetOcid);
      console.log(info);
      setLinkSkillInfo(info);
    } catch (e) {
      setLinkSkillInfo({} as LinkSkillInfo);
      alert(e);
    }
  }, []);
  useEffect(() => {
    getLinkSkillInfo(ocid);
  }, [getLinkSkillInfo, ocid]);
  return (
    <ul className="stat-info-list">
      <h1 className="info-title">링크스킬</h1>
      <li>
        <div className="">
          <div className="">
            <img src={linkSkillInfo.character_owned_link_skill.skill_icon} alt={`${linkSkillInfo.character_owned_link_skill.skill_name} icon`} />
          </div>
          <div className="equipment-description">
            <p className="">{linkSkillInfo.character_owned_link_skill.skill_name}</p>
            <p className="">{linkSkillInfo.character_owned_link_skill.skill_level} </p>
            <p className="">{linkSkillInfo.character_owned_link_skill.skill_effect} </p>
          </div>
        </div>
      </li>
      {linkSkillInfo.character_link_skill.map((skill) => (
        <li key={skill.skill_name} className="">
          <div className="">
            <div className="">
              <img src={skill.skill_icon} alt={`${skill.skill_name} icon`} />
            </div>
            <div className="equipment-description">
              <p className="">{skill.skill_name}</p>
              <p className="">{skill.skill_level} </p>
              <p className="">{skill.skill_effect} </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default LinkSkillInfoList;
