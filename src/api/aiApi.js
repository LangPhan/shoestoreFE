import axiosClient from "@/lib/axiosConfig"

export const aiApi = {
  askAi: async (question) => {
    try {
      const res = await axiosClient.post("ai-recommendation/ask", question)
      return res
    } catch (error) {
      throw error
    }
  }
}

export default aiApi