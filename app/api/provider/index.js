import { BASE_URL } from "@/app/utils/constant";
import axios from "axios";

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
