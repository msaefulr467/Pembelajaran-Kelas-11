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
const prayerTimes = [
  ["05:00", "12:00", "15:45", "18:00", "19:00"],
  ["05:10", "12:10", "15:50", "18:10", "19:10"],
  ["05:20", "12:20", "16:00", "18:20", "19:20"],
  ["05:30", "12:30", "16:10", "18:30", "19:30"],
  ["05:40", "12:40", "16:20", "18:40", "19:40"],
];
const mealTimes = [
  ["08:00", "12:00", "20:00"],
  ["08:10", "12:10", "20:10"],
  ["08:20", "12:20", "20:20"],
  ["08:30", "12:30", "20:30"],
  ["08:40", "12:40", "20:40"],
];
const playTimes = ["21:00", "21:10", "21:20", "21:30", "21:40"];

// Membuat token untuk jadwal kegiatan libur Lebaran
const scheduleTokens = [];

for (let i = 0; i < 5; i++) {
  const scheduleToken = createScheduleToken(
    prayerTimes[i],
    mealTimes[i],
    playTimes[i]
  );
  scheduleTokens.push(scheduleToken);
}

console.log("Schedule Tokens:", scheduleTokens);

// Verifikasi token untuk memastikan kebenarannya sebelum mengikuti jadwal kegiatan
scheduleTokens.forEach((token, index) => {
  console.log(`Token ${index + 1}:`);
  const verifiedToken = verifyScheduleToken(token);
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
});
