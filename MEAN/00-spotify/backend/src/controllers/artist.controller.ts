import { Request, Response } from "express";
import { handleHttp } from "../middlewares/error.handle";
import { getAlbumesFromArtist, getArtits } from "../services/artist.service";

const getArtists  = async ( req: Request, res: Response ) => {
    try {
        const artistsResponse = await getArtits();
        return res.status( 200 ).json({ status: 200, data: artistsResponse })
    } catch ( ex ) {
        handleHttp( res, 'ERROR_GET_ARTISTS', ex );
    }
}

const getAlbumsFromArtist  = async ( req: Request, res: Response ) => {
    try {
        const getAlbumesResponse = await getAlbumesFromArtist( req.params.artistId );
        return res.status( 200 )    .json({ status: 200, data: getAlbumesResponse })
    } catch ( ex ) {
        handleHttp( res, 'ERROR_GET_ALBUMES_FROM_ARTIST', ex );
    }
}

export {
    getArtists,
    getAlbumsFromArtist,
}