import { Request, Response } from "express";
import { createPlaylistInUser, getOnePlaylistOfUser, getUserPlaylists, getUsers, createSongPlaylistInUser } from "../services/user.service";
import { handleHttp } from "../middlewares/error.handle";

const getAll = async ( req: Request, res: Response ) => {
    try {
        const usersResponse = await getUsers();
        if ( !usersResponse ) {
            return res.status( 200 ).json({ status: 200, data: 'Users not found' });
        } else {
            return res.status( 200 ).json({ status: 200, data: usersResponse }) ;
        }
    } catch ( ex ) {
        handleHttp( res, 'ERROR_GETTING_USERS', ex );
    }
}

const getAllPlaylists = async ( req: Request, res: Response ) => {
    try {
        const playlistsResponse = await getUserPlaylists( req.params.userId );
        if ( !playlistsResponse ) {
            return res.status( 200 ).json({ status: 200, data: 'Playlist not found' });
        } else {
            return res.status( 200 ).json({ status: 200, data: playlistsResponse[0] }) ;
        }
    } catch ( ex ) {
        handleHttp( res, 'ERROR_GETTING_PLAYLIST_OF_USER', ex );
    }
}

const getOnePlaylist = async ( req: Request, res: Response ) => {
    try {
        const { userId, playlistId } = req.params;
        const playlistResponse = await getOnePlaylistOfUser( userId, playlistId );
        return res.status( 200 ).json({ status: 200, data: playlistResponse[0] }) ;
    } catch ( ex ) {
        handleHttp( res, 'ERROR_GETTING_PLAYLIST_OF_USER', ex );
    }
}

const createSongInPlaylist = async ( req: Request, res: Response ) => { 
    try {
        const { userId, playlistId } = req.params;
        const { nombreCancion, artista, album } = req.body;
        const playlistResponse = await createSongPlaylistInUser( userId, playlistId, nombreCancion, artista, album );
        return res.status( 201 ).json({ status: 201, data: playlistResponse }) ;
    } catch ( ex ) {
        handleHttp( res, 'ERROR_GETTING_PLAYLIST_OF_USER', ex );
    }
}

const createPlaylist = async ( req: Request, res: Response ) => {
    try {
        const { userId } = req.params;
        const { tituloPlaylist } = req.body;
        const playlistResponse = await createPlaylistInUser( userId, tituloPlaylist );
        return res.status( 201 ).json({ status: 201, data: playlistResponse }) ;
    } catch ( ex ) {
        handleHttp( res, 'ERROR_GETTING_PLAYLIST_OF_USER', ex );
    }
}


export {
    getAll,
    getAllPlaylists,
    getOnePlaylist,
    createSongInPlaylist,
    createPlaylist,
}