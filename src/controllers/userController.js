/**
 * @param {import('../services').Services} services
 */
export default function makeUserController(services) {
    return {
        /**
         * @param {*} req
         * @param {import('../entities/profile').Profile} profile
         * @param {string} encryptionKey
         */
        createUserProfile: async (req, profile, encryptionKey) => {
            const encryptedUserProfile = await services.encryption.encryptUserProfile(profile, encryptionKey);
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

        /**
         * @param {*} req
         * @param {import('../entities/profile').SharedProfile} sharedProfile
         * @param {import('../entities/profile').GrantConfiguration} grantConfiguration
         */
        grantUserProfileAccess: async (req, sharedProfile, grantConfiguration) => {
            const encryptionKey = await services.encryption.generateEncryptionKey();
            /** @type {Profile} */
            const profile = {
                ...sharedProfile,
            };
            const encryptedUserProfile = await services.encryption.encryptUserProfile(profile, encryptionKey);
            const grant = await services.user.grantAccess(encryptedUserProfile, grantConfiguration, encryptionKey);
            return grant;
        },
    };
}

/**
 * @typedef {import('../entities/profile').SharedProfile} SharedProfile
 * @typedef {import('../entities/profile').Profile} Profile
 */
