import React from 'react';
import { useState } from 'react';

export const Create = () => {
    const [ studentName, setStudentName ] = useState( '' );
    const [ studentAge, setStudentAge ] = useState( 0 );

    const onSaveStudent = ( e ) => {
        e.preventDefault();
        console.log("Saving......", { studentName: studentName.trim(), studentAge: studentAge });
    }
    return (
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                <div className="card">
                    <div className="card-header text-white text-center bg-primary">
                        Creation Form
                    </div>
                    <div className="card-body">
                        <form onSubmit={ onSaveStudent }>
                            <div className="form-floating mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="studentName" 
                                    placeholder="Nombre Completo" 
                                    value={ studentName }
                                    onChange={ (e) => setStudentName( e.target.value ) }
                                />
                                <label htmlFor="studentName">Nombre Estudiante:</label>
                            </div>
                            <div className="form-floating">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="studentAge" 
                                    placeholder="Edad" 
                                    value={ studentAge }
                                    onChange={ (e) => setStudentAge( e.target.value ) }
                                />
                                <label htmlFor="studentAge">Edad Estudiante</label>
                            </div>
                            <div className="d-grid gap-2 mt-2">
                                <button className="btn btn-primary" type="submit">
                                    <i className="fa-solid fa-circle-plus"></i>    
                                    &nbsp;
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer bg-dark">

                    </div>
                </div>
            </div>
        </div>
    )
}
