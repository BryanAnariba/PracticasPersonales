import mongoose from "mongoose";
import { UserModel } from "../models/user.model."

const getUsers = async () => {
    return await UserModel.find({}, { playlists: false });
}

const getUserPlaylists = async ( userId: string ) => {
    return await UserModel.find(
        { _id: userId },    
        { nombreUsuario: true, playlists: true }
    );
}

const getOnePlaylistOfUser = async ( userId: string, playlistId: string ) => {
    return await UserModel.find(
        { 
            _id: userId,
            "playlists._id": new mongoose.Types.ObjectId(playlistId)
        }, 
        { "playlists.$": true }
    );
}

const createPlaylistInUser = async ( userId: string, tituloPlaylist: string )  => {
    return await UserModel.findByIdAndUpdate( { _id: userId } , {
        $push: {
            playlists: {
                _id: new mongoose.Types.ObjectId(),
                tituloPlaylist: tituloPlaylist,
                canciones: []
            }
        }
    }, { new: true });
}

const createSongPlaylistInUser = async ( userId: string, playlistId: string, nombreCancion: string, artista: string, album: string )  => {
    return await UserModel.updateOne( 
        { 
            _id: new mongoose.Types.ObjectId( userId ), 
            "playlists._id": new mongoose.Types.ObjectId( playlistId )
        }, 
        {
            $push: {
                "playlists.$.canciones": {
                    nombreCancion: nombreCancion,
                    artista: artista,
                    album: album
                }
            }
    }, { new: true });
}

export {
    getUsers,
    getUserPlaylists,
    getOnePlaylistOfUser,
    createPlaylistInUser,
    createSongPlaylistInUser
}