import {
  PROVIDER_DELETE,
  PROVIDER_GET,
  PROVIDER_GET_GQL,
  PROVIDER_PATCH,
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
            id
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

export const importPIC = async (data, token) => {
  const formData = new FormData();
  formData.append("file", data);

  const response = await PROVIDER_POST_FORM_DATA(
    token,
    "pic-roles/upload-template",
    formData,
  );
  return response;
};

export const fetchUserPhoto = async (token, data) => {
  const res = await PROVIDER_POST(token, "users/image", data);
  return res;
};

export const changeCompanyInfo = async (data, token) => {
  const response = await PROVIDER_PATCH(token, "company", data);
  return response;
};

export const changePassword = async (data, token) => {
  const response = await PROVIDER_PATCH(token, "auth/change-password", data);
  return response;
};

export const resetPassword = async (data, tokenUrl, idUrl) => {
  const response = await PROVIDER_POST(
    "",
    `auth/reset-password?token=${tokenUrl}&id=${idUrl}`,
    data,
  );
  return response;
};

export const forgotPassword = async (data) => {
  const response = await PROVIDER_POST("", "auth/forgot-password", data);
  return response;
};

export const userLogout = async (token) => {
  const response = await PROVIDER_GET("auth/logout", token);
  return response;
};

export const sendRequestDemo = async (data) => {
  const response = await PROVIDER_POST("", "demo", data);
  return response;
};

export const getSyncAccounts = async (token) => {
  const query = `
  query SyncAccounts{
    social_media(
        where: {
            status: {
                equals: "CONNECTED"
            }
        }
    ){
        id
        name
        platform
        status
    }
}`;
  const response = await PROVIDER_GET_GQL(token, query);
  return response;
};

export const editPIC = async (data, token, id) => {
  const response = await PROVIDER_PATCH(token, `users/${id}`, data);
  return response;
};

export const syncInstagramAccount = async (token, data) => {
  const response = await PROVIDER_POST(token, "ig/auth/login", data);
  return response;
};

export const logoutInstagramAccount = async (token, sessionID) => {
  const response = await PROVIDER_POST(token, `ig/auth/${sessionID}/logout`);
  return response;
};

export const startWhatsappSession = async (token) => {
  const response = await PROVIDER_GET("whatsapp-2/session/start", token);
  return response;
};

export const deleteWhatsappSession = async (token, sessionID) => {
  const response = await PROVIDER_DELETE(
    token,
    `whatsapp-2/session/${sessionID}`,
  );
  return response;
};
