import { PROVIDER_GET_GQL } from "@/app/api/provider";

export const getChatsInfo = async (token, id) => {
  const query = `
    query getCustomerInfo($id: String){
      conversations(
        where: {
            id: {
                equals: $id
            }
        }
      ) {
          id
          customer_id
          social_media{
            id
            name
            platform
          }
          customers{
            instagram_username
            id
            instagram_id
            platform
            twitter_username
            email
            whatsapp_number
            whatsapp_username
          }
      }
    }`;
  const variables = {
    id,
  };
  const response = await PROVIDER_GET_GQL(token, query, variables);
  return response;
};

export const getCustomerInfo = async (token, id) => {
  const query = `
    query getCustomerInfo($id: String){
      customers(
        where: {
            id: {
                equals: $id
            }
        }
      ) {
          id
          instagram_username
          twitter_username
          whatsapp_username
          platform
      }
    }`;
  const variables = {
    id,
  };
  const response = await PROVIDER_GET_GQL(token, query, variables);
  return response;
};
