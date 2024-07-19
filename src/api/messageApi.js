import axiosClient from "@/lib/axiosConfig";

export const messageApi = {
  getMessageList: async ({ accessToken, roomChatId }) => {
    try {
      const res = await axiosClient.get(`/message/getMessage/${roomChatId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  },
};
