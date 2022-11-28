import { Router } from "express";
import { readdirSync } from 'fs';

const PATH_ROUTES = `${ __dirname }`;
const router = Router();


const cleanFileName = ( fileName: string ): string => {
    return fileName.split( '.' )[0];
}

readdirSync( PATH_ROUTES ).filter(( fileName ) => {
    const fileNameWithOutExt = cleanFileName( fileName );
    if ( fileNameWithOutExt !== 'index' ) {
        console.log(`Route: /api/${ fileNameWithOutExt }`);
        import( `./${ fileNameWithOutExt }` )        
        .then((module) => {
            router.use( `/api/${ fileNameWithOutExt }`, module.router );
        });
    }
});

export {
    router as IndexRoutes
}

