import { EncryptedProfile } from '../entities/profile';

/**
 * @param {import('../services').Services} services
 */
export default function makeGrantController(services) {
    return {
        /**
         * @param {*} req
         * @param {string} accessGrantId
         */
        getProfileByGrantId: async (req, accessGrantId) => {
            const encryptedGrant = await services.grant.getGrantById(accessGrantId);
            if (!encryptedGrant) {
                return null; //No grant was found
            }
            const { encryptionKey, expiryDate, deleteAfterAccessed, iv, encryptedData, encryptedDataEncoding, email } = encryptedGrant;
            const encryptedProfile = new EncryptedProfile({
                iv,
                encryptedData,
                encryptedDataEncoding,
                email,
            });
            const profile = await services.encryption.decryptUserProfile(encryptedProfile, encryptionKey);
            return profile;
        },
    };
}

/**
 * @typedef {import('../entities/profile').SharedProfile} SharedProfile
 * @typedef {import('../entities/profile').Profile} Profile
 */
