import React from 'react';
import './HomePage.css';
import Img from '../../assets/main_img2.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const HomePage = () => {

    const isAuthorization = useSelector(state => {
        const { isAuthorization } = state.authReducer;
        return isAuthorization;
    })

    return (
        <>
            <main className='wrapper-main'>
                <div className='text-content-main'>
                    <h2 className='text-content-main_title'>Украли <br /> велосипед?</h2>
                    <p className='text-p-main'>Мы поможем его найти</p>
                    <div className='buttons-wrapper-main'>
                        {isAuthorization ? <Link to='/cases/create_case' className='btn-main'>Сообщить о краже</Link> : <Link to='/cases/create_case/public' className='btn-main'>
                            Сообщить о краже
                        </Link> }
                        {isAuthorization ? null : <Link to='/auth/sign_in' className='btn-main'>Войти</Link>}
                    </div>
                </div>
                <img className='img-main' src={Img} alt='bicycle' />
            </main >
        </>
    )
}