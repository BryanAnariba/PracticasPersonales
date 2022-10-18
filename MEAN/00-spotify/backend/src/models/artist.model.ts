import { model, Schema } from "mongoose";
import { IArtist } from "../interfaces/IArtist";

const artistSchema = new Schema({
    nombreArtista: {
        type: String,
        required: [ true, 'Nombre Artista is required' ]
    },
    albumes: {
        type: Array
    }
},{
    versionKey: false,
    timestamps: true,
});

const artistModel = model<IArtist>( 'artists', artistSchema );

export {
    artistModel as ArtistModel,
}
