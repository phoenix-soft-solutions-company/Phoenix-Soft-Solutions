const crypto = require("crypto");

exports.decryptWithPrivateKey = (encryptedData) => {
  try {
    const privateKey = crypto.createPrivateKey({
      key: Buffer.from(process.env.PRIVATE_KEY, "base64"),
      format: "der",
      type: "pkcs1",
    });

    const buffer = Buffer.from(encryptedData, "base64");
    const decrypted = crypto.privateDecrypt(
      {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
      },
      buffer
    );
    return decrypted.toString("utf8");
  } catch (error) {
    throw error;
  }
};
