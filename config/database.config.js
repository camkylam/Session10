const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongdb://localhost:27017/library')
        console.log('Kết nỗi MongoDB thành công')
    }catch(err){
        console.error('Lỗi kết nỗi MongoDB:', err)
        process.exit(1);
    }
}

module.exports = connectDB;