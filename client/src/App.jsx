import React, {Fragment, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './components/main';
import { Nav } from './components/nav';
import { Form } from './components/form';
import { Login } from './components/login';
import { Signin } from './components/signin';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState('');
  
  return (
    <Fragment>
      <Router>
        <Nav isLogged={isLogged} setIsLogged={setIsLogged} userName={userName} />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/add' element={<Form />} />
          <Route path='/edit/:id' element={<Form />} />
          <Route path='/login' element={<Login setIsLogged={setIsLogged} setUserName={setUserName} />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/search/:name' element={<Main/>} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
