import axios, { Axios, AxiosRequestConfig } from "axios";

export const api: Axios = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

interface APIResponse<T> {
  statusCode: number; // 상태코드 (보인 서버상태코드)
  errorCode: number; // 에러코드 (본인 서버에러코드)
  message: string; // 메시지
  result: T; // 데이터 내용
  timestamp: Date; // 시간
}

export const getData = async <T>(url: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
  try {
    const response = await api.get<APIResponse<T>>(url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
