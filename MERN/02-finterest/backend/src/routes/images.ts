import { Router } from "express";
import { upload, getFiles, deleteFile } from "../controllers/Image";
import { multerMiddlewate } from "../middlewares/multer.middleware";
import { CheckJWT } from "../middlewares/session.middleware";

const router: Router = Router();

router.post( 
    '/uploads', 
    [
        CheckJWT,
        multerMiddlewate.single( 'file' )
    ],
    upload
);

router.get(
    '',
    [
        CheckJWT,
    ],
    getFiles
);

router.delete(
    '/:imageId',
    [
        CheckJWT,
    ],
    deleteFile,
)
export {
    router
}