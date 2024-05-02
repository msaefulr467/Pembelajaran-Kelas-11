const jwt = require("jsonwebtoken");

// Fungsi untuk membuat token JWT untuk jadwal kegiatan libur Lebaran
function createScheduleToken(prayerTime, mealTime, playTime) {
  const data = {
    prayerTime: prayerTime,
    mealTime: mealTime,
    playTime: playTime,
  };

  const secretKey = "s1h1rL3b4r4n";

  const expiresIn = "24h";

  // Membuat token dengan waktu kedaluwarsa 24 jam
  const token = jwt.sign(data, secretKey, { expiresIn, noTimestamp: true });

  return token;
}

// Fungsi untuk memverifikasi token JWT untuk jadwal kegiatan libur Lebaran
function verifyScheduleToken(token) {
  const secretKey = "s1h1rL3b4r4n";

  try {
    const decoded = jwt.verify(token, secretKey);

    // Memeriksa apakah token berisi informasi jadwal kegiatan yang sesuai
    if (decoded.prayerTime && decoded.mealTime && decoded.playTime) {
      // Jika token valid dan berisi informasi jadwal kegiatan yang sesuai, mengembalikan objek decoded
      return decoded;
    } else {
      // Jika token tidak valid atau tidak berisi informasi jadwal kegiatan yang sesuai, melemparkan error
      throw new Error("Invalid token or missing schedule information");
    }
  } catch (err) {
    // Menangkap dan menangani error jika token tidak valid
    console.error("Error verifying token:", err.message);
    return null;
  }
}

// Contoh penggunaan:
const prayerTime = [
  "05:00",
  "12:00",
  "15:45",
  "18:00",
  "19:00"
];
const mealTime = [
  "08:00",
  "12:00",
  "20:00"
];
const playTime = "21:00";

// Membuat token untuk jadwal kegiatan libur Lebaran
const scheduleToken = createScheduleToken(prayerTime, mealTime, playTime);
console.log("Schedule Token:", scheduleToken);

// Verifikasi token untuk memastikan kebenarannya sebelum mengikuti jadwal kegiatan
const verifiedToken = verifyScheduleToken(scheduleToken);
if (verifiedToken) {
  console.log(
    "Token is valid and contains correct schedule information:",
    verifiedToken
  );
} else {
  console.log(
    "Token verification failed or does not contain correct schedule information."
  );
}
