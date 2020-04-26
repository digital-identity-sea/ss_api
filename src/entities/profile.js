export class Profile {
    /** @type {string} */
    fullName;
    /** @type {string} */
    dateOfBirth;
    /** @type {string} */
    email;
    /** @type {string} */
    phoneMobile;
    /** @type {string} */
    encryptionKey;
    constructor(props) {
        Object.assign(this, props);
    }
}

export class EncryptedProfile {
    /** @type {string} */
    iv;
    /** @type {'hex' | 'binary' | 'ascii'} */
    encryptedDataEncoding;
    /** @type {string} */
    encryptedData;
    /** @type {string} */
    email;
    constructor(props) {
        Object.assign(this, props);
    }
}

/**
 * The info required to decrypt a profile
 */
export class DecryptInfo {
    /** @type {string} */
    email;
    /** @type {string} */
    encryptionKey;
    constructor(props) {
        Object.assign(this, props);
    }
}
