import dayjs from "dayjs";
import { getData } from ".";
const baseDay = dayjs().subtract(1, "day").format("YYYY-MM-DD");
const baseUrl = process.env.REACT_APP_BACKEND_URL;

export interface Ranking{
  "date": string,
  "ranking": number,
  "character_name": string,
  "world_name": string,
  "class_name": string,
  "sub_class_name": string,
  "character_level": number,
  "character_exp": number,
  "character_popularity": number,
  "character_guildname": string
}
export type RankInfo = Ranking[];
export const getRankOverall = async (classKey: string) => {
  const response = await getData<RankInfo>(`${baseUrl}/user/rank`, {
    params: { classKey, date: baseDay },
  });
  return response.result;
}