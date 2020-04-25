import { assert } from 'chai';
import '../../helpers/test/setup';
import { createEncryptor, generateEncryptionKey } from '../../lib/encryption';
import crypto from 'crypto';
import { getConfig } from '../../config/ConfigurationManager';
import fs from 'fs';
import path from 'path';
describe('Encryption', () => {
    it('Encodes and decodes data correctly', async () => {
        const encryptionKey = await generateEncryptionKey();
        let data = Buffer.from('abc123');
        const encrpytor = createEncryptor(encryptionKey);
        const { encryptedData, iv } = await encrpytor.encode(data);
        const decryptedData = await encrpytor.decode(encryptedData, iv);
        assert.isTrue(Buffer.compare(data, decryptedData) === 0, 'Encryption / Decryption failed.');
    });
    it('Encodes and decodes files correctly', async () => {
        const TEST_FILE_PATH = path.join(__dirname, '../data/test.png');
        /** @type {Buffer} */
        const data = await new Promise((resolve, reject) => {
            fs.readFile(TEST_FILE_PATH, (err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
        const encryptionKey = await generateEncryptionKey();
        const encrpytor = createEncryptor(encryptionKey);
        const { encryptedData, iv } = await encrpytor.encode(data);
        const decryptedData = await encrpytor.decode(encryptedData, iv);
        assert.isTrue(Buffer.compare(data, decryptedData) === 0, 'Encryption / Decryption failed.');
    });
});
