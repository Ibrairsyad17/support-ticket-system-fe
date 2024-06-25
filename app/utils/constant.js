export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.BASE_URL_DEV
    : process.env.BASE_URL_PROD;
