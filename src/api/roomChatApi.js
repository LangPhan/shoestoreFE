import axiosClient from "@/lib/axiosConfig";

export const roomChatApi = {
  getRoomChats: async ({ pageable = {}, accessToken }) => {
    let params = {};
    if (pageable && pageable.length > 0) {
      params = {
        pageNo: pageable.pageNo.toString(),
        pageSize: pageable.pageSize.toString(),
        sortDirection: pageable.sortDirection,
        sortBy: pageable.sortBy,
      };
    }

    try {
      const res = await axiosClient.get(
        `/roomChat/admin/gets?pageNo=0&pageSize=50&sortDirection=asc&sortBy=createdDate`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return res;
    } catch (error) {
      console.error("Error fetching room chats:", error);
      throw "Failed to fetch room chats";
    }
  },
};
