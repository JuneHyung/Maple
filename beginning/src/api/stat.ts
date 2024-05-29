import dayjs from "dayjs";
import { getData } from ".";
import { Grade } from "./util";
const baseDay = dayjs().subtract(1, "day").format("YYYY-MM-DD");
const baseUrl = process.env.REACT_APP_BACKEND_URL;
export interface BasicInfo {
  date: string;
  character_name: string;
  world_name: string;
  character_gender: string;
  character_class: string;
  character_class_level: string;
  character_level: number;
  character_exp: number;
  character_exp_rate: string;
  character_guild_name: string;
  character_image: string;
}
export interface FinalStat {
  stat_name: string;
  stat_value: string;
}
export interface TotalStat {
  date: string;
  character_class: string;
  final_stat: FinalStat[];
  remain_ap: number;
}

export const getCharacterBasic = async (ocid: string) => {
  const response = await getData<BasicInfo>(`${baseUrl}/stat/basic`, {
    params: { ocid, date: baseDay },
  });
  return response.result;
};

export interface AbilityInfoItem {
  ability_no: string;
  ability_grade: Grade;
  ability_value: string;
}

export interface Ability {
  date: string;
  ability_grade: Grade;
  ability_info: AbilityInfoItem[];
  remain_fame: number;
}

export const getCharacterAbility = async (ocid: string) => {
  const response = await getData<Ability>(`${baseUrl}/stat/ability`, {
    params: { ocid, date: baseDay },
  });
  return response.result.ability_info;
};

export const getCharacterStat = async (ocid: string) => {
  const response = await getData<TotalStat>(`${baseUrl}/stat/total`, {
    params: { ocid, date: baseDay },
  });
  return response.result.final_stat;
};

export interface HyperStatPreset {
  stat_type: string;
  stat_point: number;
  stat_level: number;
  stat_increase: string;
}
export interface HyperStat {
  date: string;
  preset_no: number;
  hyper_stat_list: HyperStatPreset[];
  hyper_stat_remain_point: number;
}

// 하이퍼스탯 정보 조회
export const getCharacterHyperStat = async (ocid: string) => {
  const response = await getData<HyperStat>(`${baseUrl}/stat/hyper`, {
    params: { ocid, date: baseDay },
  });
  return response.result;
};

export interface Symbol {
  symbol_name: string;
  symbol_icon: string;
  symbol_description: string;
  symbol_force: string;
  symbol_level: number;
  symbol_str: string;
  symbol_dex: string;
  symbol_int: string;
  symbol_luk: string;
  symbol_hp: string;
  symbol_growth_count: number;
  symbol_require_growth_count: number;
}
export interface SymbolInfo {
  date: string;
  character_class: string;
  symbol: Symbol[];
}

// 장착 심볼 정보 조회
export const getCharacterSymbol = async (ocid: string) => {
  const response = await getData<SymbolInfo>(`${baseUrl}/stat/symbol`, {
    params: { ocid, date: baseDay },
  });
  return response.result;
};
