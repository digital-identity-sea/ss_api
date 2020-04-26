import fs from 'fs';
import path from 'path';
const FILEPATH_USER_STORE = path.resolve(path.join(__dirname, '../../../data/user.json'));
if (!fs.existsSync(FILEPATH_USER_STORE)) {
    fs.writeFileSync(FILEPATH_USER_STORE, '{}');
}
const stores = {
    insertUserProfile: async (profile) => {
        const { email } = profile;
        let userStore = await load();
        userStore[email] = profile;
        await write(userStore);
    },
    getUserProfile: async (email) => {
        const id = email;
        const store = await load();
        return store[id];
    },
};

export default stores;

async function load() {
    let store = {};
    let storeData = await new Promise((resolve, reject) => {
        fs.readFile(FILEPATH_USER_STORE, (err, data) => {
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
        fs.writeFile(FILEPATH_USER_STORE, JSON.stringify(data, null, 2), (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}
