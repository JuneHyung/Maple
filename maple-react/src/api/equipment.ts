import dayjs from "dayjs";
import { getData } from ".";
import { CashEquipmentInfo, EquipmentInfo } from "@/models/equipment";

const baseDay = dayjs().subtract(1, "day").format("YYYY-MM-DD");
const baseUrl = import.meta.env.VITE_BACKEND_URL;

// 장착 장비 정보 조회 (캐시 제외)
export const getCharacterEquipment = async (ocid: string) => {
  const response = await getData<EquipmentInfo>(`${baseUrl}/equipment/wear`, {
    params: { ocid, date: baseDay },
  });
  return response.result;
};

// 장착 캐시 장비 정보 조회
export const getCharacterCashEquipment = async (ocid: string) => {
  const response = await getData<CashEquipmentInfo>(`${baseUrl}/equipment/cash/wear`, {
    params: { ocid, date: baseDay },
  });
  return response.result;
};
