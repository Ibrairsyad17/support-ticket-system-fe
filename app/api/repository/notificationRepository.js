import { PROVIDER_GET_GQL } from "@/app/api/provider";

export const getAllNotifications = async (token) => {
  const query = `
    query Notifications {
        notifications(
            take: 5
            orderBy: { updated_at: desc }
        ){
            action_by_accounts{
                id
                photo_profile
                name
            }
            action_message
            recipient
            action_type
            recipient_accounts{
                name
            }
            updated_at
        }
    }
  `;
  const response = await PROVIDER_GET_GQL(token, query);
  return response;
};

export const getNotificationByRecipient = async (token, recipient) => {
  const query = `
    query Notifications($action_by: String) {
        notifications(where: { recipient: { equals: $recipient } }) {
            id
            action_by_accounts{
                id
                photo_profile
                name
            }
            action_message
            recipient
            updated_at
        }
    }
  `;
  const variables = {
    recipient,
  };
  const response = await PROVIDER_GET_GQL(token, query, variables);
  return response;
};
