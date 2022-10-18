import { IPlaylist } from "./IPlaylist";

export interface IUser {
    _id?: string;
    nombreUsuario: string;
    playlist: IPlaylist[]
}