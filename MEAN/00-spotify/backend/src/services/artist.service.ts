import { ArtistModel } from "../models/artist.model"

const getArtits = async () => {
    return await ArtistModel.find({}, { albumes: false });
}

const getAlbumesFromArtist = async ( artistId: string ) => {
    return await ArtistModel.findOne({ id: artistId }, { nombreArtista: false });
}

export {
    getArtits,
    getAlbumesFromArtist
}