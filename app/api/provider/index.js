import { BASE_URL } from "@/app/utils/constant";
import axios from "axios";

export const PROVIDER_GET = async (pathUrl) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return await axios
    .get(`${BASE_URL}/${pathUrl}`)
    .then((res) => {
      switch (res.status) {
        case 200:
          return res.data;
        case 201:
          return res.data;
        case 403:
          throw "forbidden";
        default:
          return { error: "something went wrong" };
      }
    })
    .catch((err) => {
      throw err;
    });
};
