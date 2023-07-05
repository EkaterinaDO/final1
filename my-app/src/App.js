import React from 'react';
import { HomePage } from './components/homePage/HomePage';
import '@fontsource/ubuntu';
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout';
import { NotFound } from './components/NotFound';
import { FormSignIn } from './components/forms/FormSignIn';
import { AuthPage } from './components/auth/AuthPage';
import './App.css';
import YouAreWelcom from './components/auth/YouAreWelcom';
import Cases from './components/cases/Cases';
import { useSelector } from 'react-redux';
import CreateCase from './components/cases/CreateCase';
import { CreateCasePublic } from './components/cases/CreateCasePublic';


export function App(props) {

  const isAuthorization = useSelector(state => {
    const { isAuthorization } = state.authReducer;
    return isAuthorization;
  });


  return (
    <div className='wrapper-content'>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='/auth/sign_in' element={<FormSignIn />} />
          <Route path='/auth/sign_up' element={<AuthPage />} />
          <Route path='/cases' element={<Cases />} />
          <Route path='/cases/create_case' element={<CreateCase />} />
          <Route path='*' element={<NotFound />} />


          {isAuthorization ?
            <Route path='/cases' element={<Cases />} />
            : <Route path='/cases/create_case/public' element={<CreateCasePublic />} />}

          {isAuthorization && <Route path='/auth/my_account' element={<YouAreWelcom />} />}

        </Route>
      </Routes>
    </div>
  );
}