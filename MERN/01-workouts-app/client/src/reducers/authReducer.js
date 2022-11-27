
export const authReducer = ( state, action ) => {

    switch ( action.type ) {
        case 'SIGN_IN':
            return { user: action.payload }; // SOLO SI ES LOGIN Y ES EXITOSO GUARDAR EN ESTADO
        case 'SIGN_UP':
            return { user: null } // SI ES REGISTRO NO PONER USUARIO
        case 'LOG_OUT':
            return { user: null };
        default: 
            return state;
    };
     
};