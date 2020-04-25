import services from '../services';
import makeUserController from './userController';
const controllers = {
    user: makeUserController(services),
};

export default controllers;
