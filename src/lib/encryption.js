import crypto from 'crypto';
export function createEncryptor(ENCRYPTION_KEY) {
    return {
        /**
         * @param {string} text
         */
        encode: async (text) => {
            var crypto = require('crypto');
            var iv = crypto.randomBytes(64).toString('hex').slice(0, 16);
            var mykey = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
            var encryptedData = mykey.update(text, 'utf8', 'hex');
            encryptedData += mykey.final('hex');
            return {
                iv,
                encryptedData,
            };
        },
        /**
         * @param {string} text
         * @param {string} iv
         */
        decode: async (text, iv) => {
            let encryptedText = Buffer.from(text, 'hex');
            let decipher = crypto.createDecipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
            let decrypted = decipher.update(encryptedText);
            decrypted = Buffer.concat([decrypted, decipher.final()]);
            return decrypted.toString();
        },
    };
}
