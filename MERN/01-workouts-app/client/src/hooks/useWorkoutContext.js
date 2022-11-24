import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from 'react';

export const useWorkoutContext = () => {
    const context = useContext( WorkoutContext ); // retorna el valor del context creado en este caso el estado y acciones del distpach
    if ( !context ) {
        throw new Error( `Este context debe usarse como provider` );
    }
    return context;
}