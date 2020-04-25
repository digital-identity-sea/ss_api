import { EncryptedProfile } from '../entities/profile';
import fs from 'fs';
import path from 'path';
const TARGET_STORE = path.resolve(path.join(__dirname, '../../data/user.json'));
if (!fs.existsSync(TARGET_STORE)) {
    fs.writeFileSync(TARGET_STORE, '{}');
}
export default function makeUserService() {
    return {
        /**
         * @param {EncryptedProfile} profile
         */
        async createUser(profile) {
            const { email } = profile;
            let userStore = await getUserFileStore();
            if (typeof userStore !== 'object') {
                userStore = {};
            }
            userStore[email] = profile;
            await saveDataToStore(userStore);
        },
        /**
         * Get a user's profile by string
         * @param {string} email
         * @returns {Promise<EncryptedProfile>}
         */
        async getUserProfileByEmail(email) {
            const userStore = await getUserFileStore();
            let profile = userStore[email];
            return profile;
        },
    };
}

async function getUserFileStore() {
    let store = {};
    let storeData = await new Promise((resolve, reject) => {
        fs.readFile(TARGET_STORE, (err, data) => {
            err ? reject(err) : resolve(data.toString());
        });
    });
    try {
        store = JSON.parse(storeData);
    } catch (err) {}
    return store;
}

async function saveDataToStore(data) {
    await new Promise((resolve, reject) => {
        fs.writeFile(TARGET_STORE, JSON.stringify(data, null, 2), (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}
