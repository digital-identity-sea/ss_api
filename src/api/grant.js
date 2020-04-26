import express from 'express';
import Controllers from '../controllers';
const router = express.Router();
/**
 *
 * @api {get} /grant/get Get Grant
 * @apiName GetGrant
 * @apiGroup Grant
 * @apiVersion  1.0.0
 *
 *
 * @apiParam  {String} accessGrantId ID of the grant
 *
 * @apiSuccess (200) {type} name description
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "accessGrantId" : "5cc17dd9-2d39-4fb7-befa-fae4febd7f4f"
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

router.get('/get', async (req, res) => {
    const { accessGrantId } = req.query;
    const profile = await Controllers.grant.getProfileByGrantId(req, accessGrantId);
    res.json(profile);
});
export default router;
