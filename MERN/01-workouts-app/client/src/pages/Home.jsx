import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { WorkoutForm } from '../components/WorkoutForm';
import { WorkoutDetails } from '../components/WorkoutDetails';
import { getWorkOuts } from '../services/workouts.service';
import { useWorkoutContext } from '../hooks/useWorkoutContext';

export const Home = () => {
    const { workouts, dispatch } = useWorkoutContext();
    //const [ workOuts, setWorkOuts ] = useState([]);
    useEffect(() => {
        getWorkOuts()
        .then( jsonResponse => {
            const { status, data } = jsonResponse;
            console.log( { status, data } );
            if ( status === 200 ) {
                dispatch({ type: 'SET_WORKOUTS', payload: data });
                //setWorkOuts( data );
                //console.log( 'workOuts: ', data );
            }
        })
        .catch( error => {
            console.error( error );
        })
    }, []);

    return (
        <div className="home">
            <div className="workouts">
                {
                    workouts && workouts.map(( workOut ) => (
                        <WorkoutDetails key={ workOut._id } workOut={ workOut } />
                    ))
                }
            </div>
            <WorkoutForm />
        </div>
    )
};
