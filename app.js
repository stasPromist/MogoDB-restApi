const PORT = process.env.PORT || 3400;
const express = require("express");
const app = express();
app.use(express.json());
const user = require('./routes/user');
 require('./databases/mongoDB');


app.use('/user', user);

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
});