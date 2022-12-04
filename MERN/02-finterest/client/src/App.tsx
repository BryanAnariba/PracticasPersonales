import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// COMPONENTS
import { Navbar } from './components/Navbar';

// PAGES
import { Home } from './pages/Home';
import { Register } from './pages/auth/Register';
import { Login } from './pages/auth/Login';
import { NotFound } from './pages/auth/NotFound';

// CONTEXT
import { useAuthContext } from './hooks/auth/useAuthContext';

// STYLES
import 'react-toastify/dist/ReactToastify.css';
import { Images } from './pages/images/Images';

function App() {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route 
            path='/register' 
            element={ ( user.token === '' && user.userEmail === '' ) ? <Register /> : <Images /> } // SI NO HAY USUARIO PARA REGISTRO, PERO SI CREASTE LA CUENTA EXITOSAMENTE PARA GALERIA DE IMAGENES
          />
          <Route 
            path='/login' 
            element={ ( user.token === '' && user.userEmail === '' ) ? <Login /> : <Images /> } // SI NO HAY USUARIO LOGUEADO Y ESTAS EN LOGIN VAS PARA PAGINA PRINCIPAL
          />
          <Route 
            path='/images' 
            element={ ( user.token === '' && user.userEmail === '' ) ? <Login /> : <Images /> } // SI NO HAY USUARIO LOGUEADO PARA EL LOGIN PUES
          />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
