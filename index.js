const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./routers/user.router");
const AuthRouter = require("./routers/auth.router");
const app = express();

const uri = 'mongodb://127.0.0.1:27017/Library';


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.once('open', () => {
    console.log('MongoDB connected successfully');
});
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", UserRouter);
app.use("", AuthRouter)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
