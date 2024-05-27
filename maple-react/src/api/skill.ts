import dayjs from "dayjs";
import { getData } from ".";
import { PlusScore } from "./util";
const baseDay = dayjs().subtract(1, "day").format("YYYY-MM-DD");
const baseUrl = import.meta.env.VITE_BACKEND_URL;

export interface CharacterLinkSkill {
  skill_name: string;
  skill_description: string;
  skill_level: number;
  skill_effect: string;
  skill_icon: string;
}
type CharacterOwnedLinkSkill = CharacterLinkSkill;
export interface LinkSkillInfo {
  date: string;
  character_class: string;
  character_link_skill: CharacterLinkSkill[];
  character_owned_link_skill: CharacterOwnedLinkSkill;
}

// 장착 링크 스킬 정보 조회
export const getCharacterLinkSkill = async (ocid: string) => {
  const response = await getData<LinkSkillInfo>(`${baseUrl}/skill/link`, {
    params: { ocid, date: baseDay },
  });
  return response.result;
};

export interface CharacterSkill {
  skill_name: string;
  skill_description: string;
  skill_level: number;
  skill_effect: string;
  skill_icon: string;
}

export interface SkillInfo {
  date: string;
  character_class: string;
  character_skill_grade: number;
  character_skill: CharacterSkill[];
}
// 스킬 정보 조회
export const getCharacterSkills = async (ocid: string, grade: string | number) => {
  const response = await getData<SkillInfo>(`${baseUrl}/skill/class`, {
    params: {
      ocid,
      date: baseDay,
      character_skill_grade: grade,
    },
  });
  return response.result;
};
export interface CharacterHexaStatCore {
  stat_name: keyof PlusScore;
  stat_level: number;
  stat_pos: 'main' | 'additional';
}
export interface HexaStatInfo {
  date: string;
  character_class: string;
  character_hexa_stat_core: CharacterHexaStatCore[];
}

// HEXA 매트릭스 설정 HEXA 스탯 정보 조회
export const getCharacterHexaStat = async (ocid: string) => {
  const response = await getData<HexaStatInfo>(`${baseUrl}/skill/hexa/stat`, {
    params: {
      ocid,
      date: baseDay,
    },
  });
  return response.result;
};
