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


// [2. 강화수치] 
// MAIN STAT
// 1~4LV      크뎀 : +0.35% 보공,방무 : +1.00%  데미지 : +0.75%  공격력 : +5  주스텟 : +100
// 5~7LV      크뎀 : +0.70% 보공,방무 : +2.00%  데미지 : +1.50%  공격력 : +10  주스텟 : +200
// 8~9LV      크뎀 : +1.05% 보공,방무 : +3.00%  데미지 : +2.25%  공격력 : +15  주스텟 : +300
// 10LV        크뎀 : +1.40% 보공,방무 : +4.00%  데미지 : +3.00%  공격력 : +20  주스텟 : +400
// 총합        크뎀 : +7.00% 보공,방무 : +20.00%  데미지 : +15.00%  공격력 : +100  주스텟 : +2000

// ADDITIONAL STAT : 레벨당 증가량 동일. 
// 크뎀 : +0.35% 보공,방무 : +1.00%  데미지 : +0.75%  공격력 : +5 주스텟 : +100
export const calcHexaPlusScore = (level: number, name: string) => {

  const s = ['공격력 증가', '크리티컬 데미지 증가', '주력 스탯 증가', '데미지 증가', '보스 데미지 증가', '방어율 무시']

  return '';
}