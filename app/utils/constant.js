export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.BASE_URL_DEV
    : process.env.BASE_URL_PROD;
