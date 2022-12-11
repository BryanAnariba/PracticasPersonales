import { useContext } from 'react';
import { ImageContext } from '../../context/ImageContext';

export const useImageContext = () => {
    const context = useContext( ImageContext );

    if ( !context ) {
        throw new Error( `Image Context no esta usandose como provedor` );
    }

    return context;
}