import { PROVIDER_GET_GQL } from "@/app/api/provider";

export const getComments = async (token) => {
  const query = `query Assignment_conversations {
    assignment_conversations {
        assignment_id
        assignment_messages{
            sender
            sent_time
            receiver
            message
        }
        }
    }`;

  return PROVIDER_GET_GQL(query, token);
};
