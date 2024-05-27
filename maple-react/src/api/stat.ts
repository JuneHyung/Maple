import dayjs from 'dayjs';
import { getData } from '.';
import { Ability, BasicInfo, HyperStat, SymbolInfo, TotalStat } from '@/models/stat';
const baseDay = dayjs().subtract(1, 'day').format('YYYY-MM-DD');
const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getCharacterBasic = async (ocid: string) => {
  const response = await getData<BasicInfo>(`${baseUrl}/stat/basic`, {
    params: { ocid, date: baseDay },
  });
  return response.result;
};

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

// 하이퍼스탯 정보 조회
export const getCharacterHyperStat = async (ocid: string) => {
  const response = await getData<HyperStat>(`${baseUrl}/stat/hyper`, {
    params: { ocid, date: baseDay },
  });
  return response.result;
};

// 장착 심볼 정보 조회
export const getCharacterSymbol = async (ocid: string) => {
  const response = await getData<SymbolInfo>(`${baseUrl}/stat/symbol`, {
    params: { ocid, date: baseDay },
  });
  return response.result;
};
