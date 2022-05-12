const mongoose = require('mongoose');
const { SCHEMA, USER, PASSWORD, HOSTNAME, DATABASE, OPTIONS} = require("../config");
const URI = `${SCHEMA}://${USER}:${PASSWORD}@${HOSTNAME}/${DATABASE}?${OPTIONS}`;
mongoose.connect(URI);

class Task {
    constructor(){
        const schema = {
            name: String,
        }
        this.model = mongoose.model("tasks", new mongoose.Schema(schema));
    }
    async getAll() {
        //let find = search ? { name: { $regex: search, $options: "i" } } : {}
        const products = await this.model.find();
        return products;
    }
    async create(obj) {
        const item = await this.model.create(obj);
        return item;
    }
    async update(id, obj) {
        const item = await this.model.findByIdAndUpdate(id, obj)
        return item;
        //if (!item) throw new Error('Item not found')
    }
    async delete(id) {
        const item = await this.model.findByIdAndDelete(id);
        if (!item) throw new Error('Item not found')
    }
}

module.exports = Task