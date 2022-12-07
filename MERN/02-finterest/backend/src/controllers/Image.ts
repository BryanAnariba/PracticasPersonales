import { Response } from "express";
import { IUpload } from "../interfaces/IUpload";
import { handleHttp } from '../utils/error.handle';
import { IRequestExtend } from '../interfaces/IRequestExtend';
import { saveImage } from "../services/image.service";

export const upload = async ( req: IRequestExtend, res: Response ): Promise<Response> => {
    try {
        const { body, file, user } = req;
        const uploadData: IUpload = {
            userId: user?.uid,
            title: body.title,
            imageDescription: body.imageDescription,
            fileName: `${ file?.filename }`,
            path: `${ file?.path }`,
            originalName: `${ file?.originalname }`,
            mimeType: `${ file?.mimetype }`,
            size: ( file?.size ) ? file?.size : 0
        };
        const jsonResponse = await saveImage( uploadData ) ;
        return res.status( 200 ).json({ status: 201, data: jsonResponse });
    } catch ( error ) {
        return handleHttp( 500, res, 'ERROR_UPLOAD_IMAGE', error );
    }
}

export const getFiles = async ( req: IRequestExtend, res: Response ): Promise<Response> => {
    return res.status( 200 ).json({ status: 200, data: 'GET FILES WORKING' });
}