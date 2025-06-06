require('dotenv').config({ path: __dirname + '/.env' }); // явно укажите путь
console.log('Все переменные env:', process.env);
const express = require('express')
const sequelize = require('./db')
const moduls = require('./moduls/moduls')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path');
const { table } = require('console');


const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler)
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({alter:table})
   
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }

}


start()