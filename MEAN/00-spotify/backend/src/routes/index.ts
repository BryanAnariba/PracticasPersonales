import { Router } from 'express';
import { readdirSync } from 'fs';

const router: Router = Router();
const PATH_ROUTES = `${ __dirname }`;

const cleanFileName = ( fileName: string ): string => {
    return fileName.split( '.' )[0];
}

readdirSync( PATH_ROUTES ).filter(( fileName ) => {
    const nameWithOutExt = cleanFileName( fileName );
    if ( nameWithOutExt !== 'index' ) {
        console.log( `Route: ${ nameWithOutExt }` );
        import( `./${ nameWithOutExt }` )
        .then(( module ) => {
            router.use( `/api/${ nameWithOutExt }`, module.router );
        });
    }
});

export {
    router
}