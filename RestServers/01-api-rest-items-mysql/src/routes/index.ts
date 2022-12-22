import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTES: string = `${ __dirname }`;
//console.log( `Dir: ${ PATH_ROUTES }` );

const router: Router = Router();

const cleanName = ( fileName: string ): string => {
    return fileName.split( '.' )[0];
    //return `${ fileName.split( '.' ).shift() }`; 
}

readdirSync( PATH_ROUTES ).filter(( fileName ) => {
    const fileNameWithOutExtention = cleanName( fileName );
    if ( fileNameWithOutExtention !== 'index' ) {
        //console.log( `Route: ${ fileNameWithOutExtention }`.red );
        import( `./${ fileNameWithOutExtention }` )
        .then(( module ) => {
            router.use( `/api/${ fileNameWithOutExtention }`, module.router )
        });
    }
});

export {
    router,
};


