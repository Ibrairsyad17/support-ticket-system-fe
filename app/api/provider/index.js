import { BASE_URL } from "@/app/utils/constant";
import axios from "axios";

export const PROVIDER_GET = async (url, token) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(`${BASE_URL}/${url}`, { headers });

    switch (response.status) {
      case 200:
        return response;
      case 201:
        return response;
      case 403:
        throw new Error("forbidden");
      default:
        throw new Error("error");
    }
  } catch (err) {
    throw err;
  }
};

export const PROVIDER_DELETE = async (token, url) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const options = {
      method: "DELETE",
      headers,
      url: `${BASE_URL}/${url}`,
    };
    const response = await axios(options).then((res) => res);
    switch (response.status) {
      case 204:
        return [];
      case 404:
        return "Data not found";
      default:
        return response;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response.data;
    }
  }
};

export const PROVIDER_GET_GQL = async (token, query, variables) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const requestBody = {
      query,
      variables,
    };
    const options = {
      method: "POST",
      headers,
      url: `${BASE_URL}/graphql`,
      data: requestBody,
    };
    const response = await axios(options).then((res) => res);
    return response;
  } catch (error) {
    return error;
  }
};
