import fs from 'fs';
import path from 'path';
const FILEPATH_DATA_FOLDER = path.resolve(path.join(__dirname, '../../../data'));
const FILEPATH_STORE = path.join(FILEPATH_DATA_FOLDER, '/user.json');
if (!fs.existsSync(FILEPATH_DATA_FOLDER)) {
    fs.mkdirSync(FILEPATH_DATA_FOLDER);
}
if (!fs.existsSync(FILEPATH_STORE)) {
    fs.writeFileSync(FILEPATH_STORE, '{}');
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
