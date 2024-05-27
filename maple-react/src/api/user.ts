import { getData } from ".";

const baseUrl = import.meta.env.VITE_BACKEND_URL;
interface OCIDResponse {
  ocid: string;
}
// 종합 랭킹 정보 조회
export const getOcidByCharacterName = async (name: string) => {
  const response = await getData<OCIDResponse>(`${baseUrl}/user/ocid`, {
    params: { characterName: name },
  });
  return response.result;
};
