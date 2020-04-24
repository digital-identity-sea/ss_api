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
 *
 * @apiSuccess (200) {String} status Status of the request
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "fullName" : "John Doe"
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
