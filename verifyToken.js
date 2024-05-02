const jwt = require("jsonwebtoken");

const secretKey = "smktibazma1992";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE2LCJ1c2VybmFtZSI6IlNhZWZ1bCBSIiwia2VsYXMiOiJYSSIsImlhdCI6MTcxNDYzMzEzNn0.20RWukzQyQJbP8wekLitA9Bcd0ZKpK8W_OWk61Si9vY";

jwt.verify(token, secretKey, { ignoreNotBefore: true }, (err, decoded) => {
  if (err) console.error("Error verifying token:", err);
  else delete decoded.iat;
  console.log("Decoded token is valid:", decoded);
});
