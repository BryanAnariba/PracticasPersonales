import { Router } from "express";
import { readdirSync } from 'fs';

let router: Router = Router();
const PATH_ROUTER = `${ __dirname }`;

const cleanName = ( fileName: string ): string => {
    return fileName.split( '.' )[0];
}

readdirSync( PATH_ROUTER ).filter(( fileName ) => {
    let nameWithOutExtention: string = cleanName( fileName );
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
