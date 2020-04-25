/**
 * @param {import('../services').Services} services
 */
export default function makeUserController(services) {
    return {
        /**
         * @param {*} req
         * @param {import('../entities/profile').Profile} profile
         */
        createUserProfile: async (req, profile) => {
            const encryptedUserProfile = await services.encryption.encryptUserProfile(profile);
            await services.user.createUser(encryptedUserProfile);
        },
        /**
         * @param {*} req
         * @param {import('../entities/profile').DecryptInfo} decryptInfo
         */
        decryptUserProfile: async (req, decryptInfo) => {
            const { email, encryptionKey } = decryptInfo;
            const encryptedUserProfile = await services.user.getUserProfileByEmail(email);
            return await services.encryption.decryptUserProfile(encryptedUserProfile, encryptionKey);
        },
    };
}
