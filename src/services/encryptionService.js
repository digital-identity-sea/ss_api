import Lib from '../lib';
import { Profile, EncryptedProfile } from '../entities/profile';
export default function makeEncryptionService() {
    return {
        /**
         * Generates an encrypted version of a user's profile
         * @param {Profile} profile
         * @returns {Promise<EncryptedProfile>}
         */
        encryptUserProfile: async (profile) => {
            const encryptedDataEncoding = 'hex';
            const { fullName, dateOfBirth, email, phoneMobile, encryptionKey } = profile;
            const encryptor = Lib.encryption.createEncryptor(profile.encryptionKey);
            const data = Buffer.from(JSON.stringify({ fullName, dateOfBirth, email, phoneMobile }));
            const encodingResult = await encryptor.encode(data);
            return {
                iv: encodingResult.iv,
                encryptedData: encodingResult.encryptedData.toString(encryptedDataEncoding),
                encryptedDataEncoding,
                email,
                encryptionKey,
            };
        },
    };
}
