import { IImage } from '../interfaces/IImage'
import { deleteFile } from '../services/image.service'
import { useAuthContext } from '../hooks/auth/useAuthContext';

import Swal from 'sweetalert2'
import { useImageContext } from '../hooks/images/useImageContext';

///http://localhost:3500/uploads/image-1670718904304.jpg
export const ImageDetail = ({ imageData }: any | IImage) => {
    const { user } = useAuthContext();
    const { dispatch } = useImageContext();
    //const navigate = useNavigate();
    const handleDelete = async ( imageId: number, path: string ) => {
        //console.log({imageId, path});
        const response = await deleteFile( user.token, imageId, path );
        const jsonResponse = await response.json();
        if ( response.ok ) {
            dispatch( { type: '@delete', payload: imageId } );
            //navigate('/images');
            Swal.fire(
                'Ok',
                'Deleted Successfully',
                'success'
            )
        }
    }
    return (    
        <div className="animate__animated card animate__fadeInDown">
            <img src={ `http://localhost:3500/uploads/${ imageData.fileName }` } className="card-img-top" alt={ imageData.fileName } />
            <div className="card-body">
                <h5 className="card-title">
                    { 
                        imageData.title 
                    }
                </h5>
                <p className="card-text">
                    {
                        imageData.imageDescription
                    }
                </p>
                <p>
                    {
                        imageData.createdAt
                    }
                </p>
                <button className="btn btn-danger btn-block" onClick={ () => handleDelete( imageData.imageId, imageData.path ) }>
                    Delete Image
                </button>    
            </div>
        </div>
    )
}
