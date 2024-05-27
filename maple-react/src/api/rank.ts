import dayjs from "dayjs";
import { getData } from ".";
import { RankInfo } from "@/models/rank";

const baseDay = dayjs().subtract(1, "day").format("YYYY-MM-DD");
const baseUrl = import.meta.env.VITE_BACKEND_URL;

// 종합 랭킹 정보 조회
export const getRankOverall = async (classKey: string) => {
  const response = await getData<RankInfo>(`${baseUrl}/user/rank`, {
    params: { classKey, date: baseDay },
  });
  return response.result;
};
