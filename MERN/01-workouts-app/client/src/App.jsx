// IMPORTACION DE RUTAS
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//  COMPONENTES
import { Nabvar } from './components/Nabvar';

// RUTAS
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

// ESTILOS
import './index.css';

// CONTEXT
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Nabvar />
      <div className="pages">
        <Routes>
          {/* SI HAY USUARIO LOGUEADO VAS PARA EL HOME, SI NO VAS PARA EL LOGIN */}
          <Route 
            path='/' 
            element={ ( user ) ? <Home /> : <Navigate to='/sign-in'/> } />
          {/* SI NO HAY USUARIO LOGUEADO VAS PARA EL LOGIN, SI NO VAS PARA EL HOME */}
          <Route 
            path='/sign-in' 
            element={ ( !user ) ? <Login /> : <Navigate to='/' /> } />
          {/* SI NO HAY USUARIO LOGUEADO VAS PARA SIGNUP SI CREASTE CUENTA Y AY USUARIO VAS PA LOGUIN */}
          <Route 
            path='/sign-up' 
            element={ ( !user ) ? <Signup/> : <Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;
