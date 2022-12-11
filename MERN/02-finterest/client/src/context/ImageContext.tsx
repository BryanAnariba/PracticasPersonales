import { createContext, useReducer } from 'react';
import { IImage, IImageState } from '../interfaces/IImage';
import { imageReducer } from '../reducer/imageReducer';
import { ImageActions } from '../types/ImageActions';

interface IProps {
    children: JSX.Element | JSX.Element[]
}

const initialState: IImageState = {
    images: []
};

export type ImageContextProps = {
    state: IImageState,
    dispatch: React.Dispatch<ImageActions>
}

export const ImageContext = createContext( {} as ImageContextProps );

export const ImageContextProvider = ( { children }: IProps ) => {
    const [ state, dispatch ] = useReducer( imageReducer, initialState );
    return (
        <ImageContext.Provider value={{ state, dispatch }}>
            {
                children
            }
        </ImageContext.Provider>
    );
}