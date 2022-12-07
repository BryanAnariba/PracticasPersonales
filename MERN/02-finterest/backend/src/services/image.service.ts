import { connection } from "../database/SqlServerConnection";
import { Int, Numeric, VarChar } from "mssql";
import { IUpload } from "../interfaces/IUpload";

interface IImages {
    userId?: number;
    imageId?: number;
}

export const saveImage = async ( imageData: IUpload ): Promise<IImages> => {
    //console.log(imageData);
    let lastImageId: number = 0;
    const sql = await connection();
    const result = await sql.request()
    .input( 'userId', Int, imageData.userId )
    .input( 'title', VarChar, imageData.title )
    .input( 'imageDescription', VarChar, imageData.imageDescription )
    .input( 'fileName', VarChar, imageData.fileName )
    .input( 'path', VarChar, imageData.path )
    .input( 'originalName', VarChar, imageData.originalName )
    .input( 'mimeType', VarChar, imageData.mimeType )
    .input( 'size', Numeric, imageData.size )
    .output( 'lastId', Int, lastImageId )
    .execute( 'SP_INSERTIMAGE' );
    
    return {
        userId: imageData.userId,
        imageId: result.output.lastId,
    }; // SI ES CERO ES QUE NO SE INSERTO
}