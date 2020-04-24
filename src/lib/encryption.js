import crypto from 'crypto';
export function createEncryptor(ENCRYPTION_KEY) {
    return {
        /**
         * Encrypt data
         * @param {Buffer} decryptedData
         */
        encode: async (decryptedData) => {
            var crypto = require('crypto');
            var iv = crypto.randomBytes(64).toString('hex').slice(0, 16);
            var cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
            var encryptedData = cipher.update(decryptedData);
            encryptedData = Buffer.concat([encryptedData, cipher.final()]);
            return {
                iv,
                encryptedData,
            };
        },
        /**
         * Decrypt encrypted data
         * @param {Buffer} encryptedData
         * @param {string} iv
         */
        decode: async (encryptedData, iv) => {
            let decipher = crypto.createDecipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
            let decryptedData = decipher.update(encryptedData);
            decryptedData = Buffer.concat([decryptedData, decipher.final()]);
            return decryptedData;
        },
    };
}
