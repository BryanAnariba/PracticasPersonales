import React from 'react';
import { Spinner } from '../../components/Spinner';
import { useImageContext } from '../../hooks/images/useImageContext';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/auth/useAuthContext';
import { getFiles } from '../../services/image.service';
import { ImageDetail } from '../../components/ImageDetail';
export const Images = () => {
  const { state, dispatch } = useImageContext();
  const { images } = state;
  const [ isLoading, setIsLoading ] = useState<boolean>( true );
  const { user } = useAuthContext();
  useEffect(() => {
    setIsLoading( true );
    setTimeout(() => {
      if ( user.userEmail !== '' && user.token !== '' ) {
        getFiles( user.token )
        .then(( jsonResponse ) => {
          //console.log(jsonResponse.data);
          const { status, data } = jsonResponse;
          console.log(status);
          console.log(data);
          dispatch({ type: '@get', payload: data});
          setIsLoading( false )
          //console.log(images);
        })
        .catch( error => {
          console.error( error );
        })
      }
    }, 1200)
  }, []);
  
  return (
    <>
      {
        ( isLoading ) 
        ?
          <Spinner />
        :
          ( images.length === 0 ) 
          ?
            <div className="alert alert-info" role="alert">
              Images Not Found
            </div>
          :
            <div className="container d-flex">
              <div className="row">
                  {
                    images.map((image) => ( 
                      <div className="col-md-4 mb-4" key={ image.imageId }>
                        <ImageDetail key={ image.imageId } imageData={ image }/> 
                      </div>
                    )) 
                  }
              </div>
            </div>
      }
    </>
  )
}
