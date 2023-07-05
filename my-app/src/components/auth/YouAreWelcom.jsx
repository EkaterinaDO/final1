import React from 'react';
import { logOut } from '../../redux/store/authReducer';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


export default function YouAreWelcom() {


    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logOut());
        localStorage.removeItem("token");
        console.log(localStorage.getItem("token"));
    }


    return (
        <>
        <Link to='/' onClick={handleClick}>Выйти</Link>
        </>
    )
}