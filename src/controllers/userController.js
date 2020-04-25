/**
 * @param {import('../services').Services} services
 */
export default function makeUserController(services) {
    return {
        createUserProfile: async (req, profile) => {
            const encryptedUserProfile = await services.encryption.encryptUserProfile(profile);
            await services.user.createUser(encryptedUserProfile);
        },
    };
}
