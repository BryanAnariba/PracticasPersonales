import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTES = `${ __dirname }`;
const router: Router = Router();

const nameWithOutExt = ( fileName: string ): string => {
    return fileName.split( '.' )[0];
}

readdirSync( PATH_ROUTES ).filter(( fileName ) => {
    const cleanName = nameWithOutExt( fileName );
    if ( cleanName !== 'index' ) {
        //console.log( `Route: ${ cleanName }` );
        import( `./${ cleanName }` )
        .then(( module ) => {
            router.use( `/api/${ cleanName }`, module.router );
        });
    }
});

export {
    router as IndexRoutes
};
