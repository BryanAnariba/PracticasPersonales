// IMPORTACION DE RUTAS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Nabvar } from './components/Nabvar';

import './index.css';

function App() {

  return (
    <BrowserRouter>
      <Nabvar />
      <div className="pages">
        <Routes>
          <Route path='/' element={ <Home /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;
