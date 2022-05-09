import ApiClient from "./clients/ApiClient";

export default{
    async getAll(){
        const response = await ApiClient.get();
        return response.data;
    },
    async create(){
        
    },
}