import {
  PROVIDER_GET,
  PROVIDER_GET_GQL,
  PROVIDER_PATCH,
  PROVIDER_PATCH_FORM_DATA,
  PROVIDER_POST,
  PROVIDER_POST_FORM_DATA,
} from "@/app/api/provider";

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

export const getPICById = async (token, id) => {
  await delay();
  const query = `
  query Accounts($id: String) {
    accounts(where: { id: { equals: $id } }) {
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
    id,
  };
  const response = await PROVIDER_GET_GQL(token, query, variables);
  return response;
};

export const getAllRoles = async (token) => {
  const query = `
  query getAllRoles {
    pic_roles {
      id
      role
    }
  }`;
  const response = await PROVIDER_GET_GQL(token, query);
  return response;
};

export const changeUserPhoto = async (image, token) => {
  const formData = new FormData();
  formData.append("image", image);

  const response = await PROVIDER_POST_FORM_DATA(
    token,
    "users/change-photo-profile",
    formData,
  );
  return response;
};

export const changeUserInfo = async (data, token) => {
  const response = await PROVIDER_PATCH(token, "users", data);
  return response;
};

export const changeCompanyPhoto = async (image, token) => {
  const formData = new FormData();
  formData.append("photo_profile", image);

  const response = await PROVIDER_POST_FORM_DATA(
    token,
    "company/change-photo-profile",
    formData,
  );
  return response;
};

export const changeCompanyInfo = async (data, token) => {
  const response = await PROVIDER_PATCH(token, "company", data);
  return response;
};
