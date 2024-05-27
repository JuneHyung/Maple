import { Grade } from "./util";

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