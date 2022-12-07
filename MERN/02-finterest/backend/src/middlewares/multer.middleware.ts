import { Request } from "express";
import multer, { diskStorage } from "multer";

const UPLOADS_PATH = `${ process.cwd() }/uploads`;
//console.log(process.cwd())


const storage = diskStorage({
    destination( req: Request, file: Express.Multer.File, cb: any ) {
        cb( null, UPLOADS_PATH );
    },
    filename( req: Request, file: Express.Multer.File, cb: any ) {
        const extentionFile = file.originalname.split( '.' ).pop(); // image.jpg => take extention jpg
        const randomFileName = `image-${ Date.now() }.${ extentionFile }`;
        cb( null, randomFileName );
    }
});

const multerMiddlewate = multer({ storage: storage });

export {
    multerMiddlewate,
}