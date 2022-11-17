import React, { useState } from 'react';
import { StudentContext, useStudent } from '../context/StudentContext';

import { EditModal } from './EditModal';

export const Show = () => {
    
    const [ rowStudentData, setRowStudentData ] = useState({});
    const { students } = useStudent( StudentContext ); 
    console.log(students);
    
    const onDelete = ( id ) => {
        console.log( 'Deleting....', { id } )
    }
        
    const [show, setShow] = useState(false);
    // ESTA FUNCION SE ENVIA AL COMPONENTE JUNTO CON EL VALOR DE SHOW EL OBJETIVO ES MANDAR ESTA FUNCION PARA QUE SE CIERRE EL MODAL DESDE EL COMPONENTE
    const handleClose = () => setShow(false); 
    
    // ESTO VA EN EL BOTON DE EDITAR, POR DEFECTO LO MUESTRA AL DAR CLICK
    const handleShow = ( student ) => {
        setRowStudentData( student );
        setShow(true)
    }; 
    return (
        <>
            <table className="table table-hover table-bordered">
                <thead className='bg-dark text-white'>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(( student ) => (
                            <tr key={ student.id }>
                                <td>{ student.studentName }</td>
                                <td>{ student.studentAge }</td>
                                <td>
                                    <div className="btn-group">
                                        <button className='btn btn-info' onClick={ () => handleShow( student ) }>
                                            <i className="fa-solid fa-pen"></i>
                                        </button>
                                        <button className='btn btn-danger' onClick={ () => onDelete( student.id ) }>
                                            <i className="fa-regular fa-trash-can"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
                <tfoot>

                </tfoot>
            </table>
            
            <EditModal show={ show } handleCloseModal={ handleClose } student={ rowStudentData }/>
        </>
    )
}
