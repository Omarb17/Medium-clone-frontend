import { apiClient } from '../../../../shared/api/client';


export const stories = {

    getAllStories: async () => {
        return await apiClient.get('/stories')
    }
} 