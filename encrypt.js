import CryptoJS from 'crypto-js';

const key = CryptoJS.SHA512("CYsHR61AKPa8I").toString().substring(0, 32);
const encryptionIv = CryptoJS.SHA512("H9aDq26KD").toString().substring(0, 16);

console.log("keys :", key,encryptionIv)

function encryptData(data) {
  const encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: encryptionIv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

function decryptData(encryptedData) {
  const decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
    iv: encryptionIv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
  if (decryptedText.length === 0) {
    console.log("Its length is 0");
    return "";
  }
  return decryptedText;
}

export {
  encryptData,
  decryptData
};

const testString = "asdas#~";
const encryptedTest = encryptData(testString);
console.log("Encrypted:", encryptedTest);
const resp = decryptData("Y2Y4NTU5ODM3ODFkMzQ2MDBmMzEzZDc1MWFjMTJkZDI=");
console.log("Decrypted:", resp);
