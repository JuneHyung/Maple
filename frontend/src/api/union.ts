import dayjs from "dayjs";
import { getData } from ".";
const baseDay = dayjs().subtract(1, 'day').format('YYYY-MM-DD');
const baseUrl = process.env.REACT_APP_BACKEND_URL

// 유니온 정보 조회
export const getCharacterUnion = async (ocid: string) => {
  const response = await getData<any>(`${baseUrl}/union/basic`, {
    params: {ocid, date: baseDay}
  })
  console.log(response.result)
  return response.result;
}


// 유니온 공격대 정보 조회
export const getCharacterUnionRaider = async (ocid: string) => {
  const response = await getData<any>(`${baseUrl}/union/raider`, {
    params: {ocid, date: baseDay}
  })
  console.log(response.result)
  return response.result;
}
