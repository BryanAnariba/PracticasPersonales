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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/register' element={ <Register /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
