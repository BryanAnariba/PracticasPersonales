import React from 'react';
import { useWorkoutContext } from '../hooks/useWorkoutContext';
import { deleteWorkout } from '../services/workouts.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
export const WorkoutDetails = ({ workOut }) => {
    const { dispatch } = useWorkoutContext();

    const handleDelete = async ( workOutId ) => {
        console.log('WorkOutId: ', { workOutId });
        const response = await deleteWorkout( workOutId );
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
