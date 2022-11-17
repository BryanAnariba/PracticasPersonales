import { createContext, useReducer, useContext } from 'react';
import { studentReducer } from './reducer';

export const StudentContext = createContext();

const initalState = {
    students: [
        { id: 1, studentName: 'Bryan Ariel Sanchez Anariba', studentAge: 25 },
        { id: 2, studentName: 'Maria Fernanda Sanchez Anariba', studentAge: 23 },
        { id: 3, studentName: 'Erick David Sanchez Anariba', studentAge: 15 },
    ]
};

export const StudentProvider = ({ children }) => {
    //  OJO LO IMPORTANTE DE ESTE CONTEXT ES LO QUE VENGA EN VALUES
    const [ state, dispatch ] = useReducer( studentReducer, initalState );

    const saveStudent = () => dispatch({ 
        type: '@create',
        payload: "Creating Student From Context..."
    });

    const updateStudent = () => dispatch({
        type: '@update',
        payload: 'Updating Student From Context...'
    });

    const deleteStudent = () => dispatch({
        type: '@deleting',
        payload: 'Deleting Student From Context...'
    });
    
    return (
        <StudentContext.Provider value={{ 
            students: state.students, 
            saveStudent: saveStudent, 
            updateStudent: updateStudent, 
            deleteStudent: deleteStudent,
            dispatch,
        }}>
            { children }
        </StudentContext.Provider>
    );
}

// AL USARLO EN LOS DEMAS COMPONENTES LO USAREMOS ASI COM USESTUDENTCONTEXT
export const useStudent = () => {
    return useContext( StudentContext );
}