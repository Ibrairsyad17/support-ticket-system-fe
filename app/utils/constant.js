export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.BASE_URL
    : "http://localhost:3000/";
