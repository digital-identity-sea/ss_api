import express from 'express';
import Controllers from '../controllers';
const router = express.Router();
/**
 *
 * @api {post} /profile/create Create Profile
 * @apiName CreateProfile
 * @apiGroup Profile
 * @apiVersion  1.0.0
 *
 *
 * @apiParam  {String} fullName Full name of the user
 * @apiParam  {String} dateOfBirth The date of birth of the user in DD/MM/YYYY format
 * @apiParam  {String} email Email address of the user
 * @apiParam  {String} phoneMobile Mobile phone number of the user
 * @apiParam  {String} encryptionKey 64 hexadecimal encoded string
 *
 *
 * @apiSuccess (200) {String} status Status of the request
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "fullName" : "John Doe",
 *     "dateOfBirth" : "01/01/1989",
 *     "email" : "johndoe@example.com",
 *     "phoneMobile": "+6592847283",
 *     "encryptionKey": "bPeShVmYq3s6v9y$B&E)H@McQfTjWnZr",
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "status" : "ok"
 * }
 *
 *
 */
router.post('/create', async (req, res) => {
    const userProfile = req.body;
    await Controllers.user.createUserProfile(req, userProfile);
    res.json({
        status: 'ok',
    });
});

/**
 *
 * @api {post} /profile/decrypt Decrypt Profile
 * @apiName DecryptProfile
 * @apiGroup Profile
 * @apiVersion  1.0.0
 *
 *
 * @apiParam  {String} email Email of the user
 * @apiParam  {String} encryptionKey The encryption key that was used to encrypt the data
 *
 * @apiSuccess (200) {String} fullName Full name of the user
 * @apiSuccess (200) {String} dateOfBirth The date of birth of the user in DD/MM/YYYY format
 * @apiSuccess (200) {String} email Email address of the user
 * @apiSuccess (200) {String} phoneMobile Mobile phone number of the user
 * @apiSuccess (200) {String} encryptionKey 64 hexadecimal encoded string
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "email": "johndoe@example.com",
 *     "encryptionKey": "bPeShVmYq3s6v9y$B&E)H@McQfTjWnZr"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "fullName" : "John Doe",
 *     "email" : "johndoe@example.com",
 *     "dateOfBirth" : "01/01/1989",
 *     "phoneMobile" : "+6592847283",
 * }
 *
 *
 */
router.post('/decrypt', async (req, res) => {
    const decryptInfo = req.body;
    const result = await Controllers.user.decryptUserProfile(req, decryptInfo);
    res.json(result);
});

/**
 *
 * @api {post} /profile/grant-access Grant Access
 * @apiName GrantAccessProfile
 * @apiGroup Profile
 * @apiVersion  1.0.0
 *
 *
 * @apiParam  {String} fullName Full name of the user
 * @apiParam  {String} dateOfBirth The date of birth of the user in DD/MM/YYYY format
 * @apiParam  {String} email Email address of the user
 * @apiParam  {String} phoneMobile Mobile phone number of the user
 * @apiParam  {String} expiryDate Date of expiry of the granted access
 * @apiParam  {Boolean} deleteAfterAccessed Delete once the profile has been accessed
 *
 * @apiSuccess (200) {String} accessGrantId The ID of the granted access
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "accessGrantId": "johndoe@example.com",
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "fullName" : "John Doe",
 *     "email" : "johndoe@example.com",
 *     "dateOfBirth" : "01/01/1989",
 *     "phoneMobile" : "+6592847283",
 * }
 *
 *
 */
router.post('/grant-access', async (req, res) => {
    const userProfileData = req.body;
    const { fullName, dateOfBirth, email, phoneMobile, expiryDate, deleteAfterAccessed } = userProfileData;
    const userProfile = { fullName, dateOfBirth, email, phoneMobile };
    const grantConfig = { expiryDate, deleteAfterAccessed };
    const grant = await Controllers.user.grantUserProfileAccess(req, userProfile, grantConfig);
    const accessGrantId = grant.accessGrantId;
    res.json({
        accessGrantId,
    });
});

export default router;
