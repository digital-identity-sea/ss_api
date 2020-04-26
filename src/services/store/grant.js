import fs from 'fs';
import path from 'path';
import { EncryptedGrant } from '../../entities/profile';

const FILEPATH_STORE = path.resolve(path.join(__dirname, '../../../data/grant.json'));
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
        return store[id];
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
