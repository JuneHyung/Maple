import dayjs from "dayjs";
import { getData } from ".";
import { UnionArtifactInfo, UnionInfo, UnionRaiderInfo } from "@/models/union";

const baseDay = dayjs().subtract(1, "day").format("YYYY-MM-DD");
const baseUrl = import.meta.env.VITE_BACKEND_URL;

// 유니온 정보 조회
export const getCharacterUnion = async (ocid: string) => {
  const response = await getData<UnionInfo>(`${baseUrl}/union/basic`, {
    params: { ocid, date: baseDay },
  });
  return response.result;
};

// 유니온 공격대 정보 조회
export const getCharacterUnionRaider = async (ocid: string) => {
  const response = await getData<UnionRaiderInfo>(`${baseUrl}/union/raider`, {
    params: { ocid, date: baseDay },
  });
  return response.result;
};

// 유니온 아티팩트 정보 조회
export const getCharacterUnionArtifact = async (ocid: string) => {
  const response = await getData<UnionArtifactInfo>(`${baseUrl}/union/artifact`, {
    params: { ocid, date: baseDay },
  });
  return response.result;
};
