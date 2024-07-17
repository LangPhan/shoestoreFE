import aiApi from "@/api/aiApi"
import { useMutation } from "@tanstack/react-query"

const useAI = {
  postQuestion: () => {
    return useMutation({
      mutationKey: "postQuestionAI",
      mutationFn: (question) => {
        return aiApi.askAi(question)
      },
      onSuccess: (data) => {
        return data?.candidates[0]?.content.parts[0].jsonRecommendReturnType
      }
    })
  }
}

export default useAI