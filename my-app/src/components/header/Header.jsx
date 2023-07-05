import React from 'react';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/store/authReducer';
import Cases from '../cases/Cases';
import CreateCase from '../cases/CreateCase';


export default function Header() {

    const navigate = useNavigate();

    const isAuthorization = useSelector(state => {
        const { isAuthorization } = state.authReducer;
        return isAuthorization;
    })

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logOut());
        localStorage.removeItem("token");
        console.log(localStorage.getItem("token"));
    }

    return (
        <header className='header-wrapper'>
            <h1 className='header-wrapper_title' onClick={() => {
                navigate('/')
            }}>Find bicycle</h1>


            <div className='wrapper-auth-text'>
                {isAuthorization ? <Link className='link-header' to='/cases/create_case' element={<CreateCase/>}>Сообщить о краже</Link> : null}
                {isAuthorization && <Link className='link-header' to='/cases' element={<Cases />}>Кражи</Link>}
                {isAuthorization && <Link className='link-header'>Ответственные сотрудники</Link>}
                {isAuthorization && <Link className='link-header' to='/' onClick={handleClick}>Выйти</Link>}
            </div>
        </header >
    )

} 
