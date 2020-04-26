import services from '../services';
import makeUserController from './userController';
import makeGrantController from './grantController';
const controllers = {
    user: makeUserController(services),
    grant: makeGrantController(services),
};

export default controllers;
