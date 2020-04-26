import { EncryptedProfile, GrantConfiguration } from '../entities/profile';
import * as uuid from 'uuid';
import UserStore from './store/user';
import GrantStore from './store/grant';
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
        /**
         * @param {EncryptedProfile} profile
         * @param {GrantConfiguration} grantConfigurationg
         */
        async grantAccess(profile, grantConfiguration) {
            const accessGrantId = uuid.v4();
            await GrantStore.insertGrant({ ...profile, ...grantConfiguration, accessGrantId });
            return {
                ...profile,
                accessGrantId,
            };
        },
    };
}
