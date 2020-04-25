import crypto from 'crypto';
const KEY_SERIALIZATION_FORMAT = 'hex';
/**
 * @param {string} ENCRYPTION_KEY_RAW The raw key provided by the
 */
export function createEncryptor(ENCRYPTION_KEY_RAW) {
    const ENCRYPTION_KEY = Buffer.from(ENCRYPTION_KEY_RAW, KEY_SERIALIZATION_FORMAT);
    return {
        /**
         * Encrypt data
         * @param {Buffer} decryptedData
         */
        encode: async (decryptedData) => {
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

/**
 * Generates an encryption key
 * - Verification: Using hexadecimal with a character space of 16, with a key length of 64 characters, generates (16 ^ 64) combinations
 * - An AES 256 bit key has key length (2 ^ 256) which is equivalent to (16 ^ 64)
 * - Hence, the key generation method allows for us to generate keys within the entire combination space of all possibilities
 */
export async function generateEncryptionKey() {
    /** @type {Buffer} */
    const key = await new Promise((resolve, reject) => {
        crypto.randomBytes(32, (err, buffer) => {
            err ? reject(err) : resolve(buffer);
        });
    });
    return key.toString(KEY_SERIALIZATION_FORMAT);
}
