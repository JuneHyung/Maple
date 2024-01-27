import { useCallback, useEffect, useState } from "react";
import { LinkSkillInfo, getCharacterLinkSkill } from "../../api/skill";
import LinkSkillInfoListItem from "./LinkSkillInfoListItem";
import { CommonProps } from "../TabContent";

const LinkSkillInfoList = ({ ocid }: CommonProps) => {
  const [linkSkillInfo, setLinkSkillInfo] = useState<LinkSkillInfo>({} as LinkSkillInfo);
  const [isOpen, setIsOpen] = useState(false);

  const getLinkSkillInfo = useCallback(async (targetOcid: string) => {
    try {
      const info = await getCharacterLinkSkill(targetOcid);
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
    <div className="link-info">
      <ul className={`link-info-list ${isOpen ? "isOpen" : ""}`}>
        <h1 className="info-title">링크스킬</h1>
        {linkSkillInfo.character_owned_link_skill && (
          <LinkSkillInfoListItem skill={linkSkillInfo.character_owned_link_skill} key={linkSkillInfo.character_owned_link_skill.skill_name}/>
        )}
        {linkSkillInfo.character_link_skill &&
          linkSkillInfo.character_link_skill.map((skill) => (
            <LinkSkillInfoListItem skill={skill} key={skill.skill_name}/>
          ))}
      </ul>
      <button className="open-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "접기" : "펼치기"}
      </button>
    </div>
  );
};
export default LinkSkillInfoList;
