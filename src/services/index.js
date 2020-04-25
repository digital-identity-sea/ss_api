import UserService from './userService';
import EncryptionService from './encryptionService';
const serviceIndex = {
    user: UserService(),
    encryption: EncryptionService(),
};
export default serviceIndex;
/**
 * @typedef {typeof serviceIndex} Services
 */
