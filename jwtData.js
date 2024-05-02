const jwt = require("jsonwebtoken");

const secretkey = "smktibazma";

// Fungsi untuk membuat token
function createToken(id, name, classes, adress, hobby) {
  const data = { id, name, classes, adress, hobby };

  // Membuat token tanpa properti iat
  const tokenWithoutIat = jwt.sign(data, secretkey);
  const decoded = jwt.decode(tokenWithoutIat);
  delete decoded.iat;

  return jwt.sign(data, secretkey);
}

function verify(token) {
  try {
    const decoded = jwt.verify(token, secretkey);
    delete decoded.iat;
    return decoded;
  } catch (err) {
    console.log(err);
  }
}

const siswa = {
  id: 1,
  name: "Jamaludin",
  class: "XI",
  adress: "Tangerang City",
  hobby: ["coding js", "coding express"],
};

// membuat token siswa
const token = createToken(
  siswa.id,
  siswa.name,
  siswa.classes,
  siswa.adress,
  siswa.hobby
);
console.log("Token siswa:", token);

// verifikasi token siswa
const decodedSiswa = verify(token);
console.log("Decoded token:", decodedSiswa);
