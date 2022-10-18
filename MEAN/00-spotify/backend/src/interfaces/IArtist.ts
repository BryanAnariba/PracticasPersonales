import { IAlbum } from "./IAlbum";

export interface IArtist {
    _id?: string;
    nombreArtista: string;
    albumes: IAlbum[]
}