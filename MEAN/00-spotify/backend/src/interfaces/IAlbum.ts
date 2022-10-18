import { ISongArtist } from './ISong';

export interface IAlbum {
    _id?: string;
    nombreAlbum: string;
    caratulaAlbum: string;
    canciones: ISongArtist[]
}