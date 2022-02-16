import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './components/main';
import { Nav } from './components/nav';
import { Form } from './components/form';
import { Login } from './components/login';
import { Signin } from './components/signin';

function App() {
  
  return (
    <Fragment>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/add' element={<Form />} />
          <Route path='/edit/:id' element={<Form />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/:name' element={<Main/>} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
