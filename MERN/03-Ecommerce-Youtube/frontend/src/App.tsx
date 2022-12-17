import { Header } from './components/header/Header';
import { MainProduct } from './components/product/MainProduct';

{/* Barra de navegacion: REVISAR EL vite.config.ts para rutas @ */}
export const App = () => {
    return (
        <>
            <Header />
            <MainProduct />
        </>
    )
}
