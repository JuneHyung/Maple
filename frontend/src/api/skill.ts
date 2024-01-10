import dayjs from "dayjs";
import { getData } from ".";
const baseDay = dayjs().subtract(1, "day").format("YYYY-MM-DD");
const baseUrl = process.env.REACT_APP_BACKEND_URL;

interface CharacterLinkSkill{
  "skill_name": string,
  "skill_description": string,
  "skill_level": number,
  "skill_effect": string,
  "skill_icon": string
}
interface CharacterOwnedLinkSkill{
  "skill_name": string,
  "skill_description": string,
  "skill_level": number,
  "skill_effect": string,
  "skill_icon": string
}
export interface LinkSkillInfo{
  "date": string,
  "character_class": string,
  "character_link_skill": CharacterLinkSkill[],
  "character_owned_link_skill": CharacterOwnedLinkSkill
}

export const getCharacterLinkSkill = async (ocid: string) => {
  const response = await getData<LinkSkillInfo>(`${baseUrl}/skill/link`, {
    params: { ocid, date: baseDay },
  });
  return response.result;
};
