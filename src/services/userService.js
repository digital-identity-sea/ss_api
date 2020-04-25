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
            let currentProfileRaw = await new Promise((resolve, reject) => {
                fs.readFile(TARGET_STORE, (err, data) => {
                    err ? reject(err) : resolve(data.toString());
                });
            });
            let currentProfile = JSON.parse(currentProfileRaw);
            if (typeof currentProfile !== 'object') {
                currentProfile = {};
            }
            currentProfile[email] = profile;
            await new Promise((resolve, reject) => {
                fs.writeFile(TARGET_STORE, JSON.stringify(currentProfile, null, 2), (err, data) => {
                    err ? reject(err) : resolve(data);
                });
            });
        },
    };
}
