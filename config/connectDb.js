const mongoose = require('mongoose');
const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName:"Todo_App"
        }
        await mongoose.connect(DATABASE_URL , DB_OPTIONS)
        console.log('Connected Successfully..')
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB;