const crypto = require('crypto');

function generateRandomCode(length) {
  return crypto.randomBytes(length).toString('base64').slice(0, length);
}

const code = generateRandomCode(32); // Vous pouvez ajuster la longueur selon vos besoins
console.log(`Generated Code: ${code}`);