import { PROVIDER_GET_GQL, PROVIDER_POST_FORM_DATA } from "@/app/api/provider";

const delay = () => new Promise((res) => setTimeout(() => res(), 500));

export const getTicketsAllPicRole = async (token, take) => {
  const query = `
    query Assignments($take: Int) {
        assignments(
            take: $take
        ) {
            id
            assignment_date
            assignment_name
            status
            account_id
            accounts {
                pic_role_id
                pic_roles {
                    role
                }
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

export const getTicketsAll = async (token, take) => {
  await delay();
  const query = `query Assignments($take: Int) {
    assignments(
        take: $take
    ) {
        id
        assignment_name
        assignment_detail
        assignment_date
        assignment_file
        priority
        status
        ticket_id
        created_at
        account_id
        accounts{
            id
            name
            photo_profile
        }
        assignment_conversations{
            id
            admin_id
        }
        conversation_messages {
            message
            conversations {
                accounts {
                    photo_profile
                    username
                    name
                }
                customers {
                    platform
                    email
                    instagram_username
                    twitter_username
                    whatsapp_number
                    whatsapp_username
                }
            }
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

export const getTicketsByPIC = async (token, id) => {
  await delay();
  const query = `
    query Assignments($id: String) {
    assignments(
        where: {
            account_id: { equals: $id }
        }
    ) {
        id
        assignment_name
        assignment_detail
        assignment_date
        assignment_file
        priority
        status
        ticket_id
        created_at
        accounts{
            id
            name
            photo_profile
        }
        assignment_conversations{
            id
            admin_id
        }
        conversation_messages {
            message
            conversations {
                accounts {
                    photo_profile
                    username
                    name
                }
                customers {
                    platform
                    email
                    instagram_username
                    twitter_username
                    whatsapp_number
                    whatsapp_username
                }
            }
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

export const getTicketsConversations = async (token, id) => {
  const query = `
    query Assignments ($id: String){
    assignments(
        where: {
            conversation_messages: {
                conversations: { id: { equals: $id } }
            }
        }
    ) {
        id
        assignment_name
        assignment_detail
        assignment_file
        priority
        status
        ticket_id
        created_at
        accounts {
            id
            photo_profile
            name
        }
        assignment_conversations{
            id
            admin_id
        }
        conversation_messages {
            message
            conversations {
                id
                accounts {
                    photo_profile
                    username
                    name
                }
                customers {
                    platform
                    email
                    instagram_username
                    twitter_username
                    whatsapp_number
                }
            }
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

export const getTicketsForPIC = async (token, id) => {
  await delay();
  const query = `
    query Assignments($id: String) {
    assignments(
        where: {
            account_id: { equals: $id }
        }
    ) {
        id
        assignment_date
        status
        assignment_name
        accounts {
            id
            name
        }
        assignment_conversations{
            id
            admin_id
        }
        conversation_messages {
            conversations {
                customers {
                    whatsapp_number
                    whatsapp_username
                    instagram_username
                    twitter_username
                }
            }
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

export const createTicket = async (token, data) => {
  const formData = new FormData();
  formData.append("assignment_name", data.assignment_name);
  formData.append("assignment_detail", data.assignment_detail);
  formData.append("recipient", data.recipient);
  formData.append("priority", data.priority);
  formData.append("status", data.status);
  formData.append("assignment_date", data.assignment_date);
  formData.append("conversation_messages_id", data.conversation_messages_id);

  const response = await PROVIDER_POST_FORM_DATA(token, "assignment", formData);
  return response;
};
