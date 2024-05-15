import { PROVIDER_GET_GQL } from "@/app/api/provider";

const delay = () => new Promise((res) => setTimeout(() => res(), 800));

export const getKeywords = async (token, take) => {
  await delay();
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
