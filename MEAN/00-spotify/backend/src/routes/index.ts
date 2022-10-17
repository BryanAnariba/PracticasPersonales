import { Router } from 'express';
import { readdirSync } from 'fs';

const router: Router = Router();
const PATH_ROUTES = `${ __dirname }`;

const cleanFileName = ( fileName: string ) => {
    return fileName.split( '.' )[0];
}

readdirSync( PATH_ROUTES ).filter(( fileName ) => {
    const fileNameWithOutExt = cleanFileName( fileName );
    if ( fileNameWithOutExt !== 'index' ) {
        console.log({ fileNameWithOutExt });
        import( `./${ fileNameWithOutExt }`)
        .then(( module ) => {
            router.use( `/api/${ fileNameWithOutExt }`, module.router );
        });
    }
});

export {
    router
}