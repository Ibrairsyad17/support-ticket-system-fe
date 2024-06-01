import { PROVIDER_GET_GQL } from "@/app/api/provider";

const delay = () => new Promise((res) => setTimeout(() => res(), 500));

export const getMessages = async (token) => {
  await delay();
  const query = `
    query getMessages{
      conversations {
          id
          updated_at
          account_id
          customer_id
          customers {
              platform
              instagram_full_name
              instagram_username
              twitter_username
              whatsapp_number
              whatsapp_username
          }
          conversation_messages {
              message
              updated_at
          }
          status
      }
    }
  `;
  const response = await PROVIDER_GET_GQL(token, query);
  return response;
};

export const getMessagesById = async (token, id) => {
  await delay();
  const query = `
    query getMessagesById($id: String){
      conversations(id: $id) {
          id
          account_id
          customer_id
          customers {
              platform
              instagram_full_name
              instagram_username
              twitter_username
              whatsapp_number
              whatsapp_username
          }
          conversation_messages {
              message
              updated_at
          }
      }`;
  const variables = {
    id,
  };
  const response = await PROVIDER_GET_GQL(token, query, variables);
  return response;
};
