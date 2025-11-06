const { encrypt, decrypt } = require("../GlobalEncDec/new");

const encMessage = encrypt(password, secKey);
console.log("encyprt:", encMessage);

const decMessage = decrypt(encMessage, secKey);
console.log("decrypt:", decMessage);
