import { assert } from 'chai';
import '../../helpers/test/setup';
import { createEncryptor } from '../../lib/encryption';
import crypto from 'crypto';
import { getConfig } from '../../config/ConfigurationManager';
describe('Encryption', () => {
    it('Encodes and decodes data correctly', async () => {
        const encryptionKey = getConfig().encyption_key;
        let data = 'abc123';
        const encrpytor = createEncryptor(encryptionKey);
        const { encryptedData, iv } = await encrpytor.encode(data);
        const val = await encrpytor.decode(encryptedData, iv);
        assert.equal(val, data, 'Encryption / Decryption failed.');
    });
});
