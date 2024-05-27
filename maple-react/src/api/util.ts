import { CharacterType } from "@/models/classType";
// import { PosInfo } from "../components/union/UnionTable";

export const divideNumberComma = (num: number) => {
  if (num) return Number(num).toLocaleString("ko-KR");
  return null;
};

export type Grade = "레전드리" | "에픽" | "유니크" | "레어";
export type GradeClass = "rank-legend" | "rank-epic" | "rank-unique" | "rank-rare";

// 등급에 따라 클래스 리턴
export const divideGrade = (grade: Grade) => {
  switch (grade) {
    case "레전드리":
      return "rank-legend";
    case "에픽":
      return "rank-epic";
    case "유니크":
      return "rank-unique";
    case "레어":
      return "rank-rare";
    default:
      return "rank-rare";
  }
};

// 직업 타입에 따라 클래스 리턴
export const divideCharacterType = (val: CharacterType) => {
  switch (val) {
    case "전사":
      return "warrior-block";
    case "궁수":
      return "archer-block";
    case "마법사":
      return "wizard-block";
    case "도적":
      return "thief-block";
    case "해적":
      return "pirate-block";
    default:
      return "other-block";
  }
};

// 유니온 테이블에서 직업에 따라 클래스 리턴
export const checkIsActiveUnionBlock = (posInfo: PosInfo[], cx: number, cy: number) => {
    for(const {x, y, block_class} of posInfo){
      // console.log(x, cy, y, cx, block_class)
      if(x===(cy-11) && y+cx===10){ 
        switch(block_class){
          case '히어로':case '팔라딘':case '다크나이트':case '소울마스터':case '미하일':case '블래스터':case '데몬슬레이어':case '데몬어벤져':case '아란':case '카이저':case '아델':case '제로':
            return 'active-cell active-warrior-cell';
          case '보우마스터':case '신궁':case '패스파인더':case '윈드브레이커':case '와일드헌터':case '메르세데스':case '카인':
            return 'active-cell active-archer-cell';
          case '아크메이지(불,독)':case '아크메이지(썬,콜)':case '비숍':case '플레임위저드':case '배틀메이지':case '에반':case '루미너스':case '일리움':case '라라':case '키네시스':
            return 'active-cell active-wizard-cell';
          case '나이트로드':case '섀도어':case '듀얼블레이더':case '나이트워커':case '팬텀':case '카데나':case '칼리':case '호영':
            return 'active-cell active-thief-cell';
          case '바이퍼':case '캡틴':case '캐논마스터':case '스트라이커':case '메카닉':case '은월':case '엔젤릭버스터':case '아크':
            return 'active-cell active-pirate-cell';
          case '제논':
            return 'active-cell active-hybrid-cell';
          default: 
            return 'active-cell';
        }
      }
    }
    return '';
}

// [2. 강화수치]
// MAIN STAT
// 1~4LV      크뎀 : +0.35% 보공,방무 : +1.00%  데미지 : +0.75%  공격력 : +5  주스텟 : +100
// 5~7LV      크뎀 : +0.70% 보공,방무 : +2.00%  데미지 : +1.50%  공격력 : +10  주스텟 : +200
// 8~9LV      크뎀 : +1.05% 보공,방무 : +3.00%  데미지 : +2.25%  공격력 : +15  주스텟 : +300
// 10LV        크뎀 : +1.40% 보공,방무 : +4.00%  데미지 : +3.00%  공격력 : +20  주스텟 : +400
// 총합        크뎀 : +7.00% 보공,방무 : +20.00%  데미지 : +15.00%  공격력 : +100  주스텟 : +2000

// ADDITIONAL STAT : 레벨당 증가량 동일.
// 크뎀 : +0.35% 보공,방무 : +1.00%  데미지 : +0.75%  공격력 : +5 주스텟 : +100
export interface PlusScore {
  "크리티컬 데미지 증가": number[];
  "보스 데미지 증가": number[];
  "방어율 무시": number[];
  "데미지 증가": number[];
  "공격력 증가": number[];
  "주력 스탯 증가": number[];
}
const mainPlusScore: PlusScore = {
  "크리티컬 데미지 증가": [0, 0.35, 0.35, 0.35, 0.35, 0.7, 0.7, 0.7, 1.05, 1.05, 1.4],
  "보스 데미지 증가": [0, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 2.0, 3.0, 3.0, 4.0],
  "방어율 무시": [0, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 2.0, 3.0, 3.0, 4.0],
  "데미지 증가": [0, 0.75, 0.75, 0.75, 0.75, 1.5, 1.5, 1.5, 2.25, 2.25, 3.0],
  "공격력 증가": [0, 5, 5, 5, 5, 10, 10, 10, 15, 15, 20],
  "주력 스탯 증가": [0, 100, 100, 100, 100, 200, 200, 200, 300, 300, 400],
};
const additionalPlusScore: PlusScore = {
  "크리티컬 데미지 증가": [0, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35],
  "보스 데미지 증가": [0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
  "방어율 무시": [0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
  "데미지 증가": [0, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
  "공격력 증가": [0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  "주력 스탯 증가": [0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
};

// HEXA스탯 수치 계산
export const calcHexaPlusScore = (level: number, name: keyof PlusScore, status: "main" | "additional") => {
  if (status === "main") {
    const arr = mainPlusScore[name].slice(0, level + 1);
    const sum = arr.reduce((a, c) => a + c, 0).toLocaleString();
    return sum;
  } else {
    const arr = additionalPlusScore[name].slice(0, level + 1);
    const sum = arr.reduce((a, c) => a + c, 0).toLocaleString();
    return sum;
  }
};
