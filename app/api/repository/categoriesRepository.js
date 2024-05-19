import { PROVIDER_DELETE, PROVIDER_GET_GQL } from "@/app/api/provider";

const delay = () => new Promise((res) => setTimeout(() => res(), 800));

export const getCategoriesAndKeywords = async (token, take) => {
  await delay();
  const query = `
    query getCategoriesAndKeywords($take: Int){
        categories(
            take: $take
        ){
            id
            name
            keywords{
                id
                name
            }
        }
    }
    `;
  const variables = {
    take,
  };
  const response = await PROVIDER_GET_GQL(token, query, variables);
  return response;
};

export const deleteCategory = async (token, id) => {
  await delay();
  const response = await PROVIDER_DELETE(token, `categories/${id}`);
  return response;
};
