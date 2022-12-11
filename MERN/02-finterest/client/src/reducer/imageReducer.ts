import { IImage, IImageState } from "../interfaces/IImage";
import { ImageActions } from "../types/ImageActions";

export const imageReducer = ( state: IImageState, action: ImageActions ): IImageState => {
    switch ( action.type ) {
        case '@get':
            return {
                images: action.payload
            }
        case '@add':
            return {
                images: [ action.payload, ...state.images ]
            }
        case '@delete':
            return {
                images: state.images.filter(( image: IImage ) => image.imageId !== action.payload )
            }
        default:
            return state;
    }
}