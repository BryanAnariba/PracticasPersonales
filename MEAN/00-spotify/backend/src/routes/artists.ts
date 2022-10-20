import { Request, Response, Router } from 'express';

const router: Router = Router();

/*
    Artistas
    1 - Listado de artista
    2 - Obtener albumes con canciones al seleccionar un artista
*/

router.get( '', ( req: Request, res: Response ) => {
    res.status( 200 ).json( { status: 200, data: 'artists is working' } );
    
});

export {
    router
}