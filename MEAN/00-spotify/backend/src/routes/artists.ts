import { Router } from 'express';
import { getAlbumsFromArtist, getArtists } from '../controllers/artist.controller';

const router: Router = Router();

/*
    Artistas
    1 - Listado de artista
    2 - Obtener albumes con canciones al seleccionar un artista
*/

router.get( '', getArtists  );
router.get( '/:artistId/albumes', getAlbumsFromArtist  );

export {
    router
}