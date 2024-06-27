import {
  PROVIDER_DELETE,
  PROVIDER_GET_GQL,
  PROVIDER_PATCH,
  PROVIDER_POST,
} from "@/app/api/provider";

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
              id
              sender
              receiver
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
      conversations(
        where: {
          id: { equals: $id }
        }
      ){
        id
        customer_id
        account_id
        conversation_messages {
          id
          sender
          receiver
          message
          sent_time
        }
      }
    }`;
  const variables = {
    id,
  };
  const response = await PROVIDER_GET_GQL(token, query, variables);
  return response;
};

export const getTemplateMessages = async (token) => {
  await delay();
  const query = `
    query getTemplateMessages{
      template_messages {
          id
          message
      }
    }
  `;
  const response = await PROVIDER_GET_GQL(token, query);
  return response;
};

export const createTemplateMessage = async (token, data) => {
  try {
    const res = await PROVIDER_POST(token, "template-messages", data);
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const deleteTemplateMessage = async (token, id) => {
  try {
    const res = await PROVIDER_DELETE(token, `template-messages/${id}`);
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const changeMessageStatus = async (id, status, token) => {
  const res = await PROVIDER_PATCH(token, `conversations/${id}`, {
    status: status,
  });
  return res;
};
