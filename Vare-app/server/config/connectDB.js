const mongoose = require('mongoose');
const uri = "mongodb+srv://rafajara986:<12345>@chembae.80adh6z.mongodb.net/?retryWrites=true&w=majority&appName=chembae";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB se conecto !");
  } catch (error) {
    console.error("MongoDB no se conecto sad.!", error);
    process.exit(1);
  }
};

module.exports = connectDB;