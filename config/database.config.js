const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://lcky:YykC3TJZhY@cluster0.skjwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/library')
        console.log('Kết nỗi MongoDB thành công')
    }catch(err){
        console.error('Lỗi kết nỗi MongoDB:', err)
        process.exit(1);
    }
}

module.exports = connectDB;