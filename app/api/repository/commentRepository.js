import { PROVIDER_GET_GQL, PROVIDER_POST_FORM_DATA } from "@/app/api/provider";

export const getCommentsById = async (token, id) => {
  const query = `
        query Comments($id: Int) {
            assignment_conversations(
                where: {
                    assignment_id: {
                        equals: $id
                    }
                }
            ){
                id
                assignment_id
                assignment_messages{
                    sender_photo_profile
                    sender_name
                    sender
                    receiver
                    message
                    sent_time
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

export const postComment = async (token, data) => {
  const form = new FormData();
  form.append("assignment_id", data.assignment_id);
  form.append("assignment_conversation_id", data.assignment_conversation_id);
  form.append("chat", data.chat);
  form.append("recipient", data.recipient);
  form.append("sent_time", data.sent_time);

  const send = await PROVIDER_POST_FORM_DATA(token, "assignment-message", form);
  return send;
};
