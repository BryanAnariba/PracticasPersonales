// IMPORTACION DE RUTAS
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//  COMPONENTES
import { Nabvar } from './components/Nabvar';

// RUTAS
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';


import './index.css';

function App() {

  return (
    <BrowserRouter>
      <Nabvar />
      <div className="pages">
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/sign-in' element={ <Login /> } />
          <Route path='/sign-up' element={ <Signup/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;
