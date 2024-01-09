import dayjs from "dayjs";
import { getData } from ".";
const baseDay = dayjs().subtract(1, 'day').format('YYYY-MM-DD');
const baseUrl = process.env.REACT_APP_BACKEND_URL

// 유니온 정보 조회
export const getCharacterEquipment = async (ocid: string) => {
  const response = await getData<any>(`${baseUrl}/character/item-equipment`, {
    params: {ocid, date: baseDay}
  })
  console.log(response.result)
  return response.result;
}
