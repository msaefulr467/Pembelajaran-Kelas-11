const jwt = require("jsonwebtoken");

const secretKey = "smktibazma1992";

const payload = {
  userId: 16,
  username: "Saeful R",
  kelas: "XI",
};

const generateToken = jwt.sign(payload, secretKey);
console.log("JWT token:", generateToken);
