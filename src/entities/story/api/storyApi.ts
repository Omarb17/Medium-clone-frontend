import { apiClient } from "@/src/shared/api";


export const storyApi = {

    getAllStories: async () => {
        return await apiClient.get('/stories')
    },

    getStoryById: async (id : number) => {
            return await apiClient.get(`/stories/${id}`)
        },
    
    getCommentsByStoryId: async (storyId: number) => { return await apiClient.get(`/stories/${storyId}/comments`); },
} 