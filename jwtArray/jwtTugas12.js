const jwt = require("jsonwebtoken");

const secretKey = "LiburanLebaran2024";

function createRegistrationToken(
  id,
  fullName,
  address,
  phoneNumber
) {
  const data = {
    id,
    fullName,
    address,
    phoneNumber
  };
  return jwt.sign(data, secretKey);
}

function verifyRegistrationToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null; // Token tidak valid atau kadaluwarsa
  }
}

const participants = [
  {
    id: 1,
    fullName: "Ahmad Tauhid",
    address: "Makassar",
    phoneNumber: "081234567890",
  },
  {
    id: 2,
    fullName: "Diandra D Airlangga",
    address: "Bandung",
    phoneNumber: "082345678901",
  },
  {
    id: 3,
    fullName: "Mufiz Ihsanulhaq",
    address: "Bekasi",
    phoneNumber: "083456789012",
  },
  {
    id: 4,
    fullName: "Radid Aditya",
    address: "Lampung",
    phoneNumber: "084567890123",
  },
  {
    id: 5,
    fullName: "Rofi Dzaki",
    address: "Bogor",
    phoneNumber: "085678901234"
  },
];

const registrationTokens = [];

participants.forEach((participant) => {
  const token = createRegistrationToken(
    participant.id,
    participant.fullName,
    participant.address,
    participant.phoneNumber,
  );
  registrationTokens.push(token);
});

registrationTokens.forEach((token, index) => {
  console.log(`Token Pendaftaran Peserta ${index + 1}: ${token}`);

  // Verifikasi token
  const decodedToken = verifyRegistrationToken(token);
  if (decodedToken) {
    console.log("Token valid. Data peserta:", decodedToken);
  } else {
    console.log("Token tidak valid atau kadaluwarsa.");
  }
});
