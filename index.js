const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')
const { PORT } = require('./config')

const app = express();
const tasksRouter = require("./routes/task");
//Middlewares

app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json())
app.use("/static", express.static(path.join(__dirname, 'public')));


//Routes
app.use("/api/tasks", tasksRouter);

app.listen(PORT, () => console.log(`listening on port: ${PORT}`))