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
  console.log(response);
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
  // "date": string,
  // "character_class": string,
  // "use_preset_no": string,
  // "use_available_hyper_stat": number,
  hyper_stat_preset_1: HyperStatPreset[];
  hyper_stat_preset_1_remain_point: number;
  hyper_stat_preset_2: HyperStatPreset[];
  hyper_stat_preset_2_remain_point: number;
  hyper_stat_preset_3: HyperStatPreset[];
  hyper_stat_preset_3_remain_point: number;
}
export const getCharacterHyperStat = async (ocid: string) => {
  const response = await getData<HyperStat>(`${baseUrl}/stat/hyper`, {
    params: { ocid, date: baseDay },
  });
  return response.result;
};
