import ApiClient from "./clients/ApiClient";

export default {
    async getAll() {
        const response = await ApiClient.get('/api/tasks');
        return response.data;
    },
    async create(data) {
        const response = await ApiClient.post('/api/tasks', data);
        return response.data;
    },
    async updateTask(id, data){
        const url = `/api/tasks/${id}`;
        await ApiClient.put(url, data);
    },
    async deleteTask(id){
        const url = `/api/tasks/${id}`;
        await ApiClient.delete(url);
    }
}