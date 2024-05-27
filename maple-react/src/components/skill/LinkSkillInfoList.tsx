import { useCallback, useEffect, useState } from "react";
import { getCharacterLinkSkill } from "../../api/skill";
import LinkSkillInfoListItem from "./LinkSkillInfoListItem";
import OpenButton from "../common/OpenButton";
import { useUserStore } from "@/store/user";
import { LinkSkillInfo } from "@/models/skill";

const LinkSkillInfoList = () => {
  const {ocid} = useUserStore();
  const [linkSkillInfo, setLinkSkillInfo] = useState<LinkSkillInfo>({} as LinkSkillInfo);
  const [isOpen, setIsOpen] = useState(false);

  // ocid로 현재 사용중인 링크스킬목록 조회
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
    if(ocid){
      getLinkSkillInfo(ocid);
    }
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
      <OpenButton list={linkSkillInfo.character_link_skill} isOpen={isOpen} handleIsOpen={setIsOpen}/>
    </div>
  );
};
export default LinkSkillInfoList;
