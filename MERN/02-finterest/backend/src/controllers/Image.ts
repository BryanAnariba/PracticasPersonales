import { Response } from "express";
import { IUpload } from "../interfaces/IUpload";
import { handleHttp } from '../utils/error.handle';
import { IRequestExtend } from '../interfaces/IRequestExtend';
import { getAllImagesFromUser, saveImage, deleteImageFromUser } from "../services/image.service";
import pathR from 'path';
import { unlink } from 'fs-extra';
export const upload = async ( req: IRequestExtend, res: Response ): Promise<Response> => {
    try {
        const { body, file, user } = req;
        const uploadData: IUpload = {
            userId: user?.uid,
            title: body.title,
            imageDescription: body.imageDescription,
            fileName: `${ file?.filename }`,
            path: `uploads/${ file?.filename }`,
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
    try {
        const uid = req.user?.uid;
        const jsonResponse = await getAllImagesFromUser( uid );
        return res.status( 200 ).json({ status: 200, data: jsonResponse });
    } catch ( error ) {
        return handleHttp( 500, res, 'HTTP_GET_IMAGES_FROM_USER_ERROR', error );
    }
}

export const deleteFile = async ( req: IRequestExtend, res: Response ): Promise<Response> => {
    try {
        const uid = req.user?.uid;
        const { imageId } = req.params;
        const { path } = req.body;
        //console.log(path);
        //console.log(pathR.resolve( './' + path ));
        
        unlink( pathR.resolve( './' + path ) );        
        const jsonResponse = await deleteImageFromUser( uid, Number(imageId) );
        return res.status( 200 ).json({ status: 200, data: jsonResponse });
    } catch ( error ) {
        return handleHttp( 500, res, 'HTTP_GET_IMAGES_FROM_USER_ERROR', error );
    }
}