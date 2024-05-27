
export type CharacterType = "전사" | "궁수" | "마법사" | "도적" | "해적";
export interface ClassInfo {
  key: string;
  type: CharacterType;
  label: string;
}
