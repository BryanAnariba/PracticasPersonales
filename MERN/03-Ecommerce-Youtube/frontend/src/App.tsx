import React from 'react';
import logoSneakers from '@/assets/images/logo.svg';


// 48
export const App = () => {
    return (
        <>
            {/* Barra de navegacion: REVISAR EL vite.config.ts para rutas @ */}
            <header>
                <img src={ logoSneakers } alt="Logo Pagina" />
                <nav>
                    <a href="#">Collections</a>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
            </header>
        </>
    )
}
