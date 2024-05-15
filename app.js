const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const authRoute = require('./Routes/AuthRoute');
const todosRoute = require('./Routes/TodosRoute');
app.use('/api/auth', authRoute);
app.use('/api', todosRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // Menjalankan PORT
  console.log(`Server is running on port ${PORT}`);
});
