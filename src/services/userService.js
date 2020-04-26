import { EncryptedProfile } from '../entities/profile';
import UserStore from './store/user';
export default function makeUserService() {
    return {
        /**
         * @param {EncryptedProfile} profile
         */
        async createUser(profile) {
            await UserStore.insertUserProfile(profile);
        },
        /**
         * Get a user's profile by string
         * @param {string} email
         * @returns {Promise<EncryptedProfile>}
         */
        async getUserProfileByEmail(email) {
            return await UserStore.getUserProfile(email);
        },
    };
}
