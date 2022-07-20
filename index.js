const express = require('express');
const sequelize = require('./db');
const router = require('./routes/index');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json());
app.use('/api', router);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port, () => {console.log(`Server working with port ${port}`)});
    } catch (e) {
        console.log(e)
    }
}
start();