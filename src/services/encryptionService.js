import Lib from '../lib';
import { Profile, EncryptedProfile } from '../entities/profile';
export default function makeEncryptionService() {
    return {
        /**
         * Generates an encrypted version of a user's profile
         * @param {Profile} profile
         * @param {string} encryptionKey
         * @returns {Promise<EncryptedProfile>}
         */
        encryptUserProfile: async (profile, encryptionKey) => {
            const encryptedDataEncoding = 'hex';
            const { fullName, dateOfBirth, email, phoneMobile } = profile;
            const encryptor = Lib.encryption.createEncryptor(encryptionKey);
            const data = Buffer.from(JSON.stringify({ fullName, dateOfBirth, email, phoneMobile }));
            const encodingResult = await encryptor.encode(data);
            return {
                iv: encodingResult.iv,
                encryptedData: encodingResult.encryptedData.toString(encryptedDataEncoding),
                encryptedDataEncoding,
                email,
            };
        },
        /**
         * @param {EncryptedProfile} profile
         * @param {string} encryptionKey
         */
        decryptUserProfile: async (profile, encryptionKey) => {
            const { iv, encryptedData } = profile;
            const encryptedDataEncoding = profile.encryptedDataEncoding;
            const decryptor = Lib.encryption.createEncryptor(encryptionKey);
            const decodedData = await decryptor.decode(Buffer.from(encryptedData, encryptedDataEncoding), iv);
            const data = JSON.parse(decodedData.toString());
            return new Profile(data);
        },
        /**
         * Generates an encryption key
         */
        generateEncryptionKey: async () => {
            return await Lib.encryption.generateEncryptionKey();
        },
    };
}
