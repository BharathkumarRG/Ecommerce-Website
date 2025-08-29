const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL).then((c)=>{
        console.log('MongoDB connected to host: '+ c.connection.host)
    })
}

module.exports = connectDatabase;