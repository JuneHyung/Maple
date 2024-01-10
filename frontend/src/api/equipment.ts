import dayjs from "dayjs";
import { getData } from ".";
import { Grade } from "./util";
const baseDay = dayjs().subtract(1, "day").format("YYYY-MM-DD");
const baseUrl = process.env.REACT_APP_BACKEND_URL;

interface ItemCommonOption {
  str: string
  dex: string
  int: string
  luk: string
  max_hp: string
  max_mp: string
  attack_power: string
  magic_power: string
}
interface ItemBaseOption extends ItemCommonOption{
  armor: string;
  speed: string;
  jump: string;
  boss_damage: string;
  ignore_monster_armor: string;
  all_stat: string;
  max_hp_rate: string;
  max_mp_rate: string;
  base_equipment_level: number;
}
interface ItemTotalOption extends ItemCommonOption {
  armor: string;
  speed: string;
  jump: string;
  boss_damage: string;
  ignore_monster_armor: string;
  all_stat: string;
  damage: string;
  equipment_level_decrease: number;
  max_hp_rate: string;
  max_mp_rate: string;
}
interface ItemExceptionalOption extends ItemCommonOption{}
interface ItemAddOption extends ItemCommonOption{
  armor: string;
  speed: string;
  jump: string;
  boss_damage: string;
  damage: string;
  all_stat: string;
  equipment_level_decrease: number;
}
interface ItemEtcOption extends ItemCommonOption{
  armor: string;
  speed: string;
  jump: string;
}
interface ItemStarforceOption extends ItemCommonOption{
  armor: string;
  speed: string;
  jump: string;
}
interface ItemInfo {
  item_equipment_part: string;
  item_equipment_slot: string;
  item_name: string;
  item_icon: string;
  item_description: string;
  item_shape_name: string;
  item_shape_icon: string;
  gender: string;
  item_total_option: ItemTotalOption;
  item_base_option: ItemBaseOption;
  equipment_level_increase: number;
  item_exceptional_option: ItemExceptionalOption;
  item_add_option: ItemAddOption;
  growth_exp: number;
  growth_level: number;
  scroll_upgrade: string;
  cuttable_count: string;
  golden_hammer_flag: string;
  scroll_resilience_count: string;
  scroll_upgradeable_count: string;
  soul_name: string;
  soul_option: string;
  item_etc_option: ItemEtcOption;
  starforce: string;
  starforce_scroll_flag: string;
  item_starforce_option: ItemStarforceOption;
  special_ring_level: number;
  date_expire: string;
}

interface PotentialEquipment extends ItemInfo {
  potential_option_grade: Grade;
  additional_potential_option_grade: Grade;
  potential_option_1: string;
  potential_option_2: string;
  potential_option_3: string;
  additional_potential_option_1: string;
  additional_potential_option_2: string;
  additional_potential_option_3: string;
}
type ItemEquipment = PotentialEquipment[];
type DragonEquipment = ItemInfo[];
type MechanicEquipment = ItemInfo[];

export interface EquipmentInfo {
  date: string;
  character_gender: string;
  character_class: string;
  item_equipment: ItemEquipment;
  title: {
    title_name: string;
    title_icon: string;
    title_description: string;
    date_expire: string;
    date_option_expire: string;
  };
  dragon_equipment: DragonEquipment;
  mechanic_equipment: MechanicEquipment;
}

// 장착 장비 정보 조회 (캐시 제외)
export const getCharacterEquipment = async (ocid: string) => {
  const response = await getData<EquipmentInfo>(`${baseUrl}/equipment/wear`, {
    params: { ocid, date: baseDay },
  });
  console.log(response.result);
  return response.result;
};
