import { ISong } from "./ISong";

export interface IPlaylist {
    _id?: string;
    tituloPlaylist: string;
    canciones: ISong[];
}