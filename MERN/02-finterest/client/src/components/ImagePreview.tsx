import React from 'react';
import { useState } from 'react';
import uploadImage from '../assets/upload.png';
import { uploadFile } from '../services/image.service';
import { useAuthContext } from '../hooks/auth/useAuthContext';

export const ImagePreview = () => {
    const { user, dispatch } = useAuthContext();
    const [ file, setFile ] = useState<string>('');
    const [ dimensionWidth, setDimensionWwidth ] = useState<number>(0);
    const [ title, setTitle ] = useState<string>('');
    const [ imageDescription, setImageDescription ]  = useState<string>('');
    const [ fileUpload, setFileUpload ] = useState<any>();

    const handleChangeImage = async (
        e: React.ChangeEvent<HTMLInputElement>
    ): Promise<any> => {

        const imgName = e.target.value.split('\\')[2];
        console.log( 'imgName: ', imgName );
        
        const img = e.target.value;
        console.log( 'img: ', img );
        
        const path = e.target.files![0];
        console.log( 'path: ', path );
        
        const fileLoaded = URL.createObjectURL( e.target.files![0] );

        console.log( 'fileLoaded:', fileLoaded );
        const dimensions = await getImageContent( fileLoaded );
        console.log(dimensions);

        const files = e.target.files![0];
        console.log( 'files: ', files );
        setFileUpload( files );
        setFile( fileLoaded );
    }

    const getImgDimensions = ( dataUrl: string ) => 
        new Promise((resolve) => {
            const imagePrev = new Image();
            imagePrev.onload = () => {
                resolve({
                    height: imagePrev.height,
                    width: imagePrev.width,
                });
            }
            imagePrev.src = dataUrl;
        });
    

    const getImageContent = async ( file: any ) => {
        console.log( 'getImageContent - file: ', file  );
        const dimensions = await getImgDimensions(file);
        return dimensions;
    }

    const handleUpload = async ( e: React.FormEvent ) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append( "file", fileUpload );
        formData.append( "title", title );
        formData.append( "imageDescription", imageDescription );
        const response = await uploadFile( formData, user.token );
        const jsonResponse = await response.json();
        console.log(jsonResponse);
    }
 
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 mx-auto">
                    <div className="card">
                        <div className="card-header bg-dark text-center text-white">
                            <h3>Image Form</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={ handleUpload } encType="multipart/form-data">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Title: </label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="title"
                                        aria-describedby="IMAGETITLE" 
                                        value={ title }
                                        onChange={ ( e ) => setTitle( e.target.value ) }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="imageDescription" 
                                        onChange={ ( e ) => setImageDescription( e.target.value ) }
                                    />
                                </div>
                                <div className="mb-3">
                                    <img
                                        className='img-fluid rounded'
                                        src={
                                            ( !file ) ? uploadImage : `${ file }` 
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">Seleccione Imagen:</label>
                                    <input 
                                        className="form-control" 
                                        type="file" 
                                        id="formFile"
                                        onChange={ handleChangeImage }
                                        accept="image/jpg,.gif,.png,.svg"    
                                    />
                                </div>
                                <div className="mb-3">
                                    <button type='submit' className='btn btn-primary btn-block'>Upload</button>
                                </div>
                            </form>    
                        </div>
                        <div className="card-footer bg-primary">

                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}