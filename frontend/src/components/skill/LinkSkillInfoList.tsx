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
    <ul className="link-info-list">
      <h1 className="info-title">링크스킬</h1>
      {linkSkillInfo.character_owned_link_skill && (
        <li className="link-info-item">
          <div className="link-icon">
            <img src={linkSkillInfo.character_owned_link_skill.skill_icon} alt={`${linkSkillInfo.character_owned_link_skill.skill_name} icon`} />
          </div>
          <div className="link-description">
            <p className="link-skill-name">
              {linkSkillInfo.character_owned_link_skill.skill_name} <span>Lv.{linkSkillInfo.character_owned_link_skill.skill_level}</span>
            </p>
            <p className="link-skill-effect">{linkSkillInfo.character_owned_link_skill.skill_effect} </p>
          </div>
        </li>
      )}
      {linkSkillInfo.character_link_skill &&
        linkSkillInfo.character_link_skill.map((skill) => (
          <li key={skill.skill_name} className="link-info-item">
            <div className="link-icon">
              <img src={skill.skill_icon} alt={`${skill.skill_name} icon`} />
            </div>
            <div className="link-description">
              <p className="link-skill-name">
                {skill.skill_name}
                <span>Lv.{skill.skill_level}</span>
              </p>
              <p className="link-skill-effect">{skill.skill_effect} </p>
            </div>
          </li>
        ))}
    </ul>
  );
};
export default LinkSkillInfoList;
