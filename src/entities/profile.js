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
}

export class EncryptedProfile {
    /** @type {string} */
    iv;
    /** @type {string} */
    encryptedDataEncoding;
    /** @type {string} */
    encryptedData;
    /** @type {string} */
    email;
    /** @type {string} */
    encryptionKey;
}
