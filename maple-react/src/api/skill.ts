import dayjs from "dayjs";
import { getData } from ".";
import { HexaStatInfo, LinkSkillInfo, SkillInfo } from "@/models/skill";
const baseDay = dayjs().subtract(1, "day").format("YYYY-MM-DD");
const baseUrl = import.meta.env.VITE_BACKEND_URL;

// 장착 링크 스킬 정보 조회
export const getCharacterLinkSkill = async (ocid: string) => {
  const response = await getData<LinkSkillInfo>(`${baseUrl}/skill/link`, {
    params: { ocid, date: baseDay },
  });
  return response.result;
};

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
