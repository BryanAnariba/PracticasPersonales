import React from 'react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { deleteWorkout } from '../services/workouts.service';

import { useAuthContext } from '../hooks/useAuthContext';
import { useWorkoutContext } from '../hooks/useWorkoutContext';

export const WorkoutDetails = ({ workOut }) => {
    const { dispatch } = useWorkoutContext();
    const { user } = useAuthContext();

    const handleDelete = async ( workOutId ) => {
        console.log('WorkOutId: ', { workOutId });
        if ( !user ) {
            return
        }
        const response = await deleteWorkout( workOutId, user.token );
        const jsonResponse = await response.json();
        if (jsonResponse.status === 200 ) {
            dispatch({
                type: 'DELETE_WORKOUT',
                payload: jsonResponse.data
            });
        }
    }

    return (
        <div className="workout-details">
            <h4>{ workOut.title }</h4>
            <p>
                <strong>
                    Load (kg): 
                </strong>
                {
                    workOut.load
                }
            </p>
            <p>
                <strong>
                    Resp (Quantity): 
                </strong>
                {
                    workOut.reps                
                }
            </p>
            <p>
                {
                    workOut.createdAt
                }
            </p>
            <span>
                <FontAwesomeIcon 
                    onClick={ () => handleDelete( workOut._id ) }
                    icon={ faTrashCan }
                />
            </span>
        </div>
    );
}
