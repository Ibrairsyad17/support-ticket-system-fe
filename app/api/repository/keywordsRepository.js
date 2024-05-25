import { PROVIDER_GET_GQL } from "@/app/api/provider";

export const getKeywords = async (token, take) => {
  const query = `
    query getKeywords($take: Int){
     keywords(
        take: $take,
        orderBy: {
            count: desc
        }
    ){
      id
      name
      count
     }
    }
  `;
  const variables = {
    take,
  };
  const response = await PROVIDER_GET_GQL(token, query, variables);
  return response;
};
