import { PROVIDER_GET_GQL } from "@/app/api/provider";

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
        assignment_file
        priority
        status
        ticket_id
        created_at
        conversation_messages {
            message
            conversations {
                accounts {
                    photo_profile
                    username
                    name
                }
                customers {
                    nama_lengkap
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
    take,
  };
  const response = await PROVIDER_GET_GQL(token, query, variables);
  return response;
};

export const getTicketsById = async (token, id) => {
  await delay();
  const query = `
    query Assignments($id: String) {
        assignments(
            where: { ticket_id: { equals: $id } }
        ) {
            id
            assignment_name
            assignment_detail
            assignment_file
            priority
            status
            ticket_id
            created_at
            conversation_messages {
                message
                conversations {
                    accounts {
                        photo_profile
                        username
                        name
                    }
                    customers {
                        nama_lengkap
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
