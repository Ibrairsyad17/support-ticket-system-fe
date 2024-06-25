import {
  PROVIDER_GET_GQL,
  PROVIDER_POST,
  PROVIDER_POST_FORM_DATA,
} from "@/app/api/provider";

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
          account_id
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

export const sendWAMessage = async (token, id, message) => {
  const res = await PROVIDER_POST(
    token,
    `whatsapp-2/session/${id}/send-message`,
    message,
  );
  return res;
};

export const sendIGMessage = async (token, id, message) => {
  const form = new FormData();
  form.append("recipient", message.recipient);
  form.append("message", message.message);

  const res = await PROVIDER_POST_FORM_DATA(token, `ig/dm/${id}/send`, form);
  return res;
};
