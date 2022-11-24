import { useReducer } from 'react';
import { createContext } from 'react';
import { workoutReducer } from '../reducers/workoutReducer';

// 1 Creamos el context, debe tener el mismo nombre del archivo
export const WorkoutContext = createContext();

// 2 De aqui se sustraera la informacion de workouts, es como en el supermercado el departamento de carnes por ejemplo
export const WorkoutContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer( workoutReducer, { workouts: [] });
    return (
        <WorkoutContext.Provider value={{ 
            ...state, 
            dispatch: dispatch 
        }}>
            {
                children
            }
        </WorkoutContext.Provider>
    );
}
