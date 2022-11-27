import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
    const { dispatch } = useAuthContext();

    const logOut = () => {
        // REMOVEMOS EL TOKEN DEL LOCALSTORAGE
        localStorage.removeItem( 'user' );

        // DESPACHAMOS LA ACCION DE LOGOUT PARA QUE REMUEVA EL USUARIO DEL ESTADO GLOBAR
        dispatch({ type: 'LOG_OUT' });
    }

    return { logOut };
}