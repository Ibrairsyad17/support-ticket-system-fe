import { PROVIDER_GET_GQL } from "@/app/api/provider";

export const getCustomerInfo = async (token, id) => {
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
          customers {
              platform
              nama_lengkap
              email
              instagram_full_name
              instagram_username
              twitter_username
              whatsapp_number
              whatsapp_username
          }
          conversation_messages {
              id
          }
      }
    }`;
  const variables = {
    id,
  };
  const response = await PROVIDER_GET_GQL(token, query, variables);
  return response;
};
