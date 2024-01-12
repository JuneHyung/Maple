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


interface CharacterSkill  {
  "skill_name": string,
  "skill_description": string,
  "skill_level": number,
  "skill_effect": string,
  "skill_icon": string,
}

export interface SkillInfo{
  "date": string,
  "character_class": string,
  "character_skill_grade": number,
  "character_skill": CharacterSkill[]
}

export const getCharacterSkills = async (ocid: string, grade: string | number) => {
  const response = await getData<SkillInfo>(`${baseUrl}/skill/class`, {
    params: {
      ocid,
      date: baseDay,
      character_skill_grade: grade
    }
  })
  console.log(response)
  return response.result;
}

interface CharacterHexaStatCore{
  "slot_id": string
  "main_stat_name": string,
  "sub_stat_name_1":string,
  "sub_stat_name_2":string,
  "main_stat_level": number,
  "sub_stat_level_1": number,
  "sub_stat_level_2": number,
  "stat_grade": number,
}
export interface HexaStatInfo {
  "date": string,
  "character_class": string,
  "character_hexa_stat_core": CharacterHexaStatCore[]
}

export const getCharacterHexaStat = async (ocid: string) => {
  const response = await getData<HexaStatInfo>(`${baseUrl}/skill/hexa/stat`, {
    params: {
      ocid,
      date: baseDay,
    }
  })
  console.log(response)
  return response.result;
}