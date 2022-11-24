export const workoutReducer = ( state, action ) => {
    switch ( action.type ) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload,
            };
            
        case 'CREATE_WORKOUT':
            return {
                workouts: [ action.payload, ...state.workouts ],
            };
        
        default:
            return state;
    }
}