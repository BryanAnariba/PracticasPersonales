import React from 'react';
import { useState } from 'react';
import { useWorkoutContext } from '../hooks/useWorkoutContext';
import { createWotkOut } from '../services/workouts.service';
export const WorkoutForm = () => {
    const { workouts, dispatch } = useWorkoutContext();

    const [ title, setTitle ] = useState( '' );
    const [ load, setLoad ] = useState( 0 );
    const [ reps, setReps ] = useState( 0 );
    const [ errors, setErrors ] = useState( null );

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        const wotkOut = {
            title: title,
            load: load,
            reps: reps,
        };

        try {
            const response = await createWotkOut( wotkOut );
            const jsonResponse = await response.json();
            if ( jsonResponse.status !== 201 ) {
                console.log(jsonResponse.error.message);
                setErrors( jsonResponse.error.message );
            } else {
                setErrors( null );
                //console.log( jsonResponse );
                setTitle( '' );
                setLoad( 0 );
                setReps( 0 );
                dispatch({
                    type: 'CREATE_WORKOUT',
                    payload: jsonResponse.data
                });
            }       
        } catch ( error ) {
            console.error( error );
        }
    }

    return (
        <form className='create' onSubmit={ handleSubmit }>
            <h3>Add new Work Out</h3>
            <label htmlFor="title">Excersice Title: </label>
            <input type="text" onChange={ (e) => setTitle( e.target.value ) } value={ title } />
            <label htmlFor="load">Loads (Kg): </label>
            <input type="number" name="load" id="load" onChange={ (e) => setLoad( e.target.value ) } value={ load } />
            <label htmlFor="reps">Reps: </label>
            <input type="number" name="reps" id="reps" onChange={ (e) => setReps( e.target.value ) } value={ reps } />
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
