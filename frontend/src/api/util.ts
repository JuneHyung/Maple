export const divideNumberComma = (num: number) => {
  if(num) return Number(num).toLocaleString("ko-KR")
  return null;
}

export type Grade = '레전드리' | '에픽' | '유니크' | '레어';

export const divideGrade = (grade: Grade)=>{
  switch(grade){
    case '레전드리': return 'rank-legend';
    case '에픽': return 'rank-epic';
    case '유니크': return 'rank-unique';
    case '레어': return 'rank-rare';
    default: return 'rank-rare';
  }
}


export type CharacterType = '전사' | '궁수' | '마법사' | '도적' | '해적'
export const divideCharacterType = (val: CharacterType) => {
  switch(val){
    case '전사' : return 'warrior-block';
    case '궁수' : return 'archer-block';
    case '마법사' : return 'wizard-block';
    case '도적' : return 'thief-block';
    case '해적' : return 'pirate-block';
    default: return 'other-block';
  }

}