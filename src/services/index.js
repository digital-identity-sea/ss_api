import UserService from './userService';
import EncryptionService from './encryptionService';
import GrantService from './grantService';
const serviceIndex = {
    user: UserService(),
    encryption: EncryptionService(),
    grant: GrantService(),
};
export default serviceIndex;
/**
 * @typedef {typeof serviceIndex} Services
 */
