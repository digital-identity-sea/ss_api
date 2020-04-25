import express from 'express';
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
 * @apiParam  {String} dateOfBirth The date of birth of the user in YYYY-MM-DD format
 *
 * @apiSuccess (200) {String} status Status of the request
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "fullName" : "John Doe",
 *     "dateOfBirth": "1983-10-11"
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
    res.json({
        status: 'ok',
    });
});
export default router;
