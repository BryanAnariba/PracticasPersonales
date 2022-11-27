import React from 'react';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useWorkoutContext } from '../hooks/useWorkoutContext';
import { createWotkOut } from '../services/workouts.service';
export const WorkoutForm = () => {
    const { dispatch } = useWorkoutContext();
    const { user } = useAuthContext();

    const [ title, setTitle ] = useState( '' );
    const [ load, setLoad ] = useState( 0 );
    const [ reps, setReps ] = useState( 0 );
    const [ errors, setErrors ] = useState( null );
    const [ emptyFields, setEmptyFields ] = useState( [] );

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        if ( !user ) {
            setErrors( 'Necesitas loguearte loco!!' );
        } else {
            const wotkOut = {
                title: title,
                load: load,
                reps: reps,
            };

            try {
                const response = await createWotkOut( wotkOut, user.token );
                const jsonResponse = await response.json();
                if ( jsonResponse.status !== 201 ) {
                    // estos errores o manejo de errores es para las validaciones que se aplican en el squema de mongoose
                    //console.log(jsonResponse.error.message);
                    //setErrors( jsonResponse.error.message );

                    // estas son las que hicimos a mano
                    console.log(jsonResponse.error);
                    setErrors( jsonResponse.error.error );
                    setEmptyFields( jsonResponse.error.emptyFields );
                } else {
                    setErrors( null );
                    //console.log( jsonResponse );
                    setTitle( '' );
                    setLoad( 0 );
                    setReps( 0 );
                    setEmptyFields( [] );
                    setErrors( null );
                    dispatch({
                        type: 'CREATE_WORKOUT',
                        payload: jsonResponse.data
                    });
                }       
            } catch ( error ) {
                console.error( error );
            }
        }
    }

    return (
        <form className='create' onSubmit={ handleSubmit }>
            <h3>Add new Work Out</h3>
            <label htmlFor="title">Excersice Title: </label>
            <input type="text" className={ emptyFields.includes( 'Title' ) ? 'error' : '' } onChange={ (e) => setTitle( e.target.value ) } value={ title } />
            <label htmlFor="load">Loads (Kg): </label>
            <input type="number" name="load" id="load" className={ emptyFields.includes( 'Loads' ) ? 'error' : '' } onChange={ (e) => setLoad( e.target.value ) } value={ load } />
            <label htmlFor="reps">Reps: </label>
            <input type="number" name="reps" id="reps" className={ emptyFields.includes( 'Reps' ) ? 'error' : ''} onChange={ (e) => setReps( e.target.value ) } value={ reps } />
            <button type="submit">Create WorkOut</button>
            {
                ( errors && 
                    <div className="error">
                        {
                            errors
                        }
                    </div>
                )
            }
        </form>
    );
}
