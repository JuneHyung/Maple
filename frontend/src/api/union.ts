import dayjs from "dayjs";
import { getData } from ".";
import { CharacterType } from "./util";
const baseDay = dayjs().subtract(1, "day").format("YYYY-MM-DD");
const baseUrl = process.env.REACT_APP_BACKEND_URL;

export interface UnionInfo {
  date: string;
  union_level: number;
  union_grade: string;
}
interface UnionInnerStat {
  stat_field_id: "string";
  stat_field_effect: "string";
}
interface CellPosBlock {
  x: number;
  y: number;
}
interface UnionBlock {
  block_type: CharacterType;
  block_class: "string";
  block_level: "string";
  block_control_point: CellPosBlock;
  block_position: CellPosBlock[];
}
export interface UnionRaiderInfo {
  date: string;
  union_raider_stat: string[];
  union_occupied_stat: string[];
  union_inner_stat: UnionInnerStat[];
  union_block: UnionBlock[];
}
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
