import express from 'express';
import * as Encryption from '../lib/encryption';
const router = express.Router();
/**
 *
 * @api {get} /encryption/generate-key Generate Encryption Key
 * @apiName EncryptionGenerateKey
 * @apiGroup Encryption
 * @apiVersion  1.0.0
 *
 *
 * @apiSuccess (200) {String} encryptionKey Generated hexadecimal key (64 characters)
 *
 * @apiParamExample  {json} Request-Example:
 * {
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "encryptionKey" : "bPeShVmYq3s6v9y$B&E)H@McQfTjWnZr"
 * }
 *
 *
 */
router.get('/generate-key', async (req, res) => {
    const encryptionKey = await Encryption.generateEncryptionKey();
    res.json({
        encryptionKey,
    });
});
export default router;
