import { useAuthContext } from "./useAuthContext";

export const useLogOut = () => {
    const { dispatch } = useAuthContext();

    const logOut = () => {
        // QUITAMOS DEL ESTORAGE LOS DATOS DEL USUARIO
        localStorage.removeItem( 'userData' );

        // LIMPIAMOS LOS DATOS DEL CONTEXT
        dispatch({ type: '@logOut', payload: { userEmail: '', token: '' } });
    }

    return {
        logOut,
    }
}