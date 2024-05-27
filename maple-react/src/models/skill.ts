import { PlusScore } from "./util";

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