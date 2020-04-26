import fs from 'fs';
import path from 'path';
import { EncryptedGrant } from '../../entities/profile';

const FILEPATH_DATA_FOLDER = path.resolve(path.join(__dirname, '../../../data'));
const FILEPATH_STORE = path.join(FILEPATH_DATA_FOLDER, '/grant.json');
if (!fs.existsSync(FILEPATH_DATA_FOLDER)) {
    fs.mkdirSync(FILEPATH_DATA_FOLDER);
}
if (!fs.existsSync(FILEPATH_STORE)) {
    fs.writeFileSync(FILEPATH_STORE, '{}');
}
const stores = {
    /**
     * @param {EncryptedGrant} profile
     */
    insertGrant: async (profile) => {
        const id = profile.accessGrantId;
        let store = await load();
        store[id] = profile;
        await write(store);
    },
    /**
     * @returns {Promise<EncryptedGrant>}
     */
    getGrant: async (id) => {
        const store = await load();
        const grant = store[id];
        if (!grant) {
            return null;
        }
        if (grant.deleteAfterAccessed) {
            delete store[id];
            await write(store);
        }
        if (grant.expiryDate) {
            //We will use the server's timezone to check fo expiry
            let expiry = new Date(grant.expiryDate);
            expiry.setHours(23, 59, 59, 999); //Ensure that we have till the end of the day
            let currentDate = new Date();
            let currentTimestamp = currentDate.getTime();
            let expiredTimestamp = expiry.getTime();
            if (currentTimestamp > expiredTimestamp) {
                return null;
            }
        }
        return grant;
    },
};

export default stores;

async function load() {
    let store = {};
    let storeData = await new Promise((resolve, reject) => {
        fs.readFile(FILEPATH_STORE, (err, data) => {
            err ? reject(err) : resolve(data.toString());
        });
    });
    try {
        store = JSON.parse(storeData);
    } catch (err) {}
    if (typeof store !== 'object') {
        store = {};
    }
    return store;
}

async function write(data) {
    await new Promise((resolve, reject) => {
        fs.writeFile(FILEPATH_STORE, JSON.stringify(data, null, 2), (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}
