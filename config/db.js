const mongoose = require('mongoose')

// Set mongoDB connection
const connectMongoDB = async () => {
    try{
        let connect = await mongoose.connect(process.env.MONGO_DB)
        console.log(`mongoDB connect successfully HOST : ${ connect.connection.host }`.bgCyan);
    }catch( error ){
        console.log(error.message);
    }

}

// export connection
module.exports =  connectMongoDB