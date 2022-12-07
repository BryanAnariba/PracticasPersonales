import { Router } from "express";
import { upload, getFiles } from "../controllers/Image";
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
)
export {
    router
}