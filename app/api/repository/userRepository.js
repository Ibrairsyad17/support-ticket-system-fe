import { PROVIDER_GET } from "@/app/api/provider";

const delay = () => new Promise((res) => setTimeout(() => res(), 800));

export const getUserInfo = async (token) => {
  await delay();
  const response = await PROVIDER_GET("users/me", token);
  return response;
};
