import { Router } from "express";
import { readdirSync } from 'fs';

const router: Router = Router();
const PATH_ROUTES = `${ __dirname }`;

const cleanName = ( fileName: string ): string => {
    return fileName.split( '.' )[0];
}

readdirSync( PATH_ROUTES ).filter(( fileName ) => {
    const nameWithOutExtention = cleanName( fileName );
    if ( nameWithOutExtention !== 'index' ) {
        import( `./${ nameWithOutExtention }` )
        .then(( module ) => {
            router.use( `/api/${ nameWithOutExtention }`, module.router );
        });
    }
});


export {
    router
}