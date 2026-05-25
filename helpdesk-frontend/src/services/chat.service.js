import axios from "axios";

const baseURL = "http://localhost:8082/api/v1";

export const sendMessagesToServer = async (message, conversationId) => {
    const response = await axios.post(`${baseURL}/helpdesk`, message, {
        headers: {
            ConversationId: conversationId,
        },
    });

    return response.data;
};
