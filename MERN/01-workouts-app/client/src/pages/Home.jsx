import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { WorkoutForm } from '../components/WorkoutForm';
import { WorkoutDetails } from '../components/WorkoutDetails';
import { getWorkOuts } from '../services/workouts.service';

export const Home = () => {
    const [ workOuts, setWorkOuts ] = useState([]);
    useEffect(() => {
        getWorkOuts()
        .then( jsonResponse => {
            const { status, data } = jsonResponse;
            //console.log( { status, data } );
            if ( jsonResponse.ok ) {
                setWorkOuts( data );
                console.log( 'workOuts: ', data );
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
                    workOuts && workOuts.map(( workOut ) => (
                        <WorkoutDetails key={ workOut._id } workOut={ workOut } />
                    ))
                }
            </div>
            <WorkoutForm />
        </div>
    )
};
