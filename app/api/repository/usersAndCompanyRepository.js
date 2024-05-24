import { PROVIDER_GET, PROVIDER_GET_GQL } from "@/app/api/provider";

const delay = () => new Promise((res) => setTimeout(() => res(), 800));

export const getUserInfo = async (token) => {
  await delay();
  const response = await PROVIDER_GET("users/me", token);
  return response;
};

export const getUsersPIC = async (token, role) => {
  await delay();
  const query = `
  query Accounts($role: String) {
    accounts(where: { role: { equals: $role } }) {
        id
        username
        otp_enabled
        name
        role
        email
        phone_number
        photo_profile
        pic_roles{
            role
        }
    }
  }`;
  const variables = {
    role,
  };
  const response = await PROVIDER_GET_GQL(token, query, variables);
  return response;
};

export const getCompanyInfo = async (token) => {
  await delay();
  const response = await PROVIDER_GET("company", token);
  return response;
};
