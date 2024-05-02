const jwt = require("jsonwebtoken");

// Fungsi untuk membuat token JWT untuk pendaftaran libur Lebaran
function createHolidayToken(fullName, address, phoneNumber) {
  const data = {
    fullName: fullName,
    address: address,
    phoneNumber: phoneNumber,
  };

  const secretKey = "s1h1rL3b4r4n";

  const expiresIn = "24h";

  // Menambahkan opsi { noTimestamp: true } untuk menghilangkan properti iat
  const token = jwt.sign(data, secretKey, { expiresIn, noTimestamp: true });

  return token;
}

// Fungsi untuk memverifikasi token JWT untuk pendaftaran libur Lebaran
function verifyHolidayToken(token) {
  const secretKey = "s1h1rL3b4r4n";

  try {
    const decoded = jwt.verify(token, secretKey);

    // Memeriksa apakah token berisi informasi penting seperti nama lengkap dan alamat rumah
    if (decoded.fullName && decoded.address) {
      // Jika token valid dan berisi informasi penting, mengembalikan objek decoded
      return decoded;
    } else {
      // Jika token tidak valid atau tidak berisi informasi penting, melemparkan error
      throw new Error("Invalid token or missing important information");
    }
  } catch (err) {
    // Menangkap dan menangani error jika token tidak valid
    console.error("Error verifying token:", err.message);
    return null;
  }
}

// Contoh penggunaan:
const fullName = "Muhammad Saeful Ramadhan";
const address = "Jl. Gunung Jati (Cirebon Utara)";
const phoneNumber = "089571848769";

// Membuat token untuk pendaftaran libur Lebaran
const holidayToken = createHolidayToken(fullName, address, phoneNumber);
console.log("Holiday Token:", holidayToken);

// Verifikasi token untuk memastikan kebenarannya sebelum perjalanan
const verifiedToken = verifyHolidayToken(holidayToken);
if (verifiedToken) {
  console.log(
    "Token is valid and contains important information:",
    verifiedToken
  );
} else {
  console.log(
    "Token verification failed or does not contain important information."
  );
}
