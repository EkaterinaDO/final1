import { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { ButtonBack } from '../ButtonBack';
import { $api } from '../../axios/axios-request';
import { signInRequest, signInFailed, signInSuccess } from '../../redux/store/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const FormSignIn = () => {

    const navigate = useNavigate();

    const message = useSelector(state => state.authReducer.message);


    const dispatch = useDispatch()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        dispatch(signInRequest())
        $api.post('/auth/sign_in', {
            'email': email,
            'password': password
        })
            .then((response) => {
                const token = response.data.data.token;
                if (token) {
                    localStorage.setItem("token", response.data.data.token);
                }
                dispatch(signInSuccess(response.data.data.user));
                console.log(localStorage.getItem('token'))
                return (
                    localStorage.getItem('token') && navigate('/')
                )
            })
            .catch(response => {
                console.log('request in failed: ', response);
                dispatch(signInFailed(response));
            })
    }






    return (
        <>
            <ButtonBack />
            <div className='wrapper-form-signIn'>
                <form className='form-signIn' onSubmit={e => e.preventDefault()}>
                    <label className='label-text'> Введите email:
                        <input type='email' placeholder='name@gmail.com' value={email} onChange={event => setEmail(event.target.value)} required />
                    </label>
                    <label className='label-text'> Введите пароль:
                        <input type='password' placeholder='....' value={password} onChange={event => setPassword(event.target.value)} required />
                    </label>

                    <button className='submit' type='submit' onClick={() => signIn()}>Войти</button>

                    {message &&
                        <div className='wrapper-error-rext'>
                            <p className='error-text'>{message}</p>
                        </div>
                    }
                </form>
                <Link to='/auth/sign_up'>Хотите зарегистрироваться впервые?</Link>
            </div>
        </>
    )
}


