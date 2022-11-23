import React from 'react';

export const WorkoutDetails = ({ workOut }) => {
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
        </div>
    );
}
