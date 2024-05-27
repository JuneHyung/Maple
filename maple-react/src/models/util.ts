export type Grade = "레전드리" | "에픽" | "유니크" | "레어";
export type GradeClass = "rank-legend" | "rank-epic" | "rank-unique" | "rank-rare";
export interface PlusScore {
  "크리티컬 데미지 증가": number[];
  "보스 데미지 증가": number[];
  "방어율 무시": number[];
  "데미지 증가": number[];
  "공격력 증가": number[];
  "주력 스탯 증가": number[];
}