import { Router } from 'express';
import { getAll, getAllPlaylists, getOnePlaylist, createSongInPlaylist, createPlaylist } from '../controllers/user.controller';

const router: Router = Router();

/*
    Usuarios
    1 - Listado de usuarios
    2 - Obtener las playlist de un usuario seleccionado
    3 - Obtener las canciones de un playlist seleccionado
    4 - Guardar Cancion en playlist
    5 - Crear un nuevo playlist
*/

router.get( '', getAll );
router.get( '/:userId/playlists', getAllPlaylists );
router.get( '/:userId/playlists/:playlistId', getOnePlaylist );
router.put( '/:userId/playlists', createPlaylist );
router.put( '/:userId/playlists/:playlistId/songs', createSongInPlaylist );

export {
    router
}