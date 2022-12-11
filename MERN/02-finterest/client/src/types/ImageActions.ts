import { IImage } from "../interfaces/IImage";

export type ImageActions = 
    | { type: '@add', payload: IImage }
    | { type: '@get', payload: IImage[] }
    | { type: '@delete', payload: number }