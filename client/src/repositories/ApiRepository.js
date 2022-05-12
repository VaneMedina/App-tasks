import ApiClient from "./clients/ApiClient";

export default {
    async getAll() {
        const url = '/api/tasks';
        const response = await ApiClient.get(url);
        return response;
    },
    async create(data) {
        const url = '/api/tasks';
        const response = await ApiClient.post(url, data);
        return response;
    },
    async update(id, data){
        const url = `/api/tasks/${id}`;
        const response = await ApiClient.put(url, data);
        return response;
    },
    async deleteTask(id){
        const url = `/api/tasks/${id}`;
        await ApiClient.delete(url);
    }
}