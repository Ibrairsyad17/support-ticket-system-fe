import { PROVIDER_DELETE, PROVIDER_GET_GQL } from "@/app/api/provider";

export const getCategoriesAndKeywords = async (token, take) => {
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

export const getCategoryById = async (token, id) => {
  const query = `
    query getCategoryById($id: Int){
        categories(
            where: {id: {equals: $id}}
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
    id,
  };
  const response = await PROVIDER_GET_GQL(token, query, variables);
  return response;
};

export const deleteCategory = async (token, id) => {
  const response = await PROVIDER_DELETE(token, `categories/${id}`);
  return response;
};
