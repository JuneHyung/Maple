import dayjs from "dayjs";
import { getData } from ".";
const baseDay = dayjs().subtract(1, 'day').format('YYYY-MM-DD');
const baseUrl = process.env.REACT_APP_BACKEND_URL

export const getCharacterBasic = async (ocid: string) => {
  const response = await getData<any>(`${baseUrl}/stat/basic`, {
    params: {ocid, date: baseDay}
  })
  console.log(response.result)
  return response.result;
}

export const getCharacterAbility = async (ocid: string) => {
  const response = await getData(`${baseUrl}/stat/ability`, {
    params: {ocid, date:baseDay}
  })
  return response.result;
}

export const getCharacterStat = async (ocid: string) => {
  const response = await getData(`${baseUrl}/stat/total`, {
    params: {ocid, date:baseDay}
  })
  return response.result;
}

export const getCharacterHyperStat = async (ocid: string) => {
  const response = await getData(`${baseUrl}/stat/hyper`, {
    params: {ocid, date:baseDay}
  })
  return response.result;
}
