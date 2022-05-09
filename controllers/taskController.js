const Task = require('../models/task');
const TaskModel = new Task();

module.exports = {
    get: async (req, res) => {
        try {
            const tasks = await TaskModel.getAll()
            res.send(tasks)
        } catch (err) {
            res.status(500).send({
                error: e.message
            })
        }
    },
    post: async (req, res) => {
        try{
           const { body } = req
           const item = await TaskModel.create(body)
           res.status(201).send(item.id)
        }catch(e){
            res.status(500).send({
                error: e.message
            })
        }
    },
    put: async (req, res) => {
        try {
            const { id } = req.params
            const { body } = req
            await TaskModel.update(id, body)
            res.sendStatus(200)
          }catch (e) {
            console.log(e)
            res.send({ error: e.message })
          }
    },
    delete: async (req, res) => {
        try {
            const {
                id
            } = req.params
            await TaskModel.delete(id)
            res.sendStatus(200)
        } catch (e) {
            console.log(e)
            res({
                error: e.message
            })
        }
    },
}