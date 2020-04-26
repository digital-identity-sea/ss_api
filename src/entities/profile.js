export class Profile {
    /** @type {string} */
    fullName;
    /** @type {string} */
    dateOfBirth;
    /** @type {string} */
    email;
    /** @type {string} */
    phoneMobile;
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

export class EncryptedGrant {
    /** @type {string} */
    accessGrantId;
    /** @type {string} */
    encryptionKey;
    // Grant Config
    /** @type {string} */
    expiryDate;
    /** @type {boolean} */
    deleteAfterAccessed;
    // Encrypted Profile
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
export class SharedProfile {
    /** @type {string} */
    fullName;
    /** @type {string} */
    dateOfBirth;
    /** @type {string} */
    email;
    /** @type {string} */
    phoneMobile;
}

export class GrantConfiguration {
    /** @type {string} */
    expiryDate;
    /** @type {boolean} */
    deleteAfterAccessed;
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
