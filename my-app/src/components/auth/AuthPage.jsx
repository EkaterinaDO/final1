import './AuthPage.css';
import { useState } from 'react';
import { ButtonHome } from '../ButtonBack';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest, signUpSuccess, signInFailed } from '../../redux/store/authReducer';
import { useNavigate } from 'react-router-dom';

export const AuthPage = () => {

    const message = useSelector(state => state.authReducer.message);

    const dispatch = useDispatch();

    const navigate = useNavigate; 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [id, setId] = useState('');

    const signUp = () => {
        dispatch(signUpRequest())
        axios.post('https://sf-final-project-be.herokuapp.com/api/auth/sign_up', {
            'email': email,
            'password': password,
            'clientId': id
        })
            .then(response => {
                console.log(response.status);
                dispatch(signUpSuccess())
                console.log(localStorage.getItem('token'))
                return (
                    localStorage.getItem('token') ? navigate('/auth/my_account') : null
                )

            })
            .catch(response => {
                console.log('Ошибка: ', response);
                dispatch(signInFailed(response));
            })
    }


    return (
        <>
            <ButtonHome />
            <form className='form-auth' onSubmit={e => e.preventDefault()}>
                <label className='label-text'>
                    Email
                    <input type='email' value={email} onChange={event => setEmail(event.target.value)} required />
                </label>
                <label className='label-text'>
                    Пароль
                    <input type='password' value={password} onChange={event => setPassword(event.target.value)} required />
                </label>
                <label className='label-text'>
                    Имя
                    <input type='text' />
                </label>
                <label className='label-text'>
                    Фамилия
                    <input type='text' />
                </label>
                <label className='label-text'>
                    ID
                    <input type='text' value={id} onChange={event => setId(event.target.value)} required />
                </label>
                <label className='label-text'>Одобрен
                    <select required>
                        <option>Не одобрен</option>
                        <option>Одобрен</option>
                    </select>
                </label>
                <label className='label-checkbox'>Согласиться с условиями и правилами
                    <input className='checkbox' type='checkbox' required />
                </label>
                <button className='btn-main' type='submit' onClick={signUp} >Зарегистрироваться</button>

                {message &&
                        <div className='wrapper-error-rext'>
                            <p className='error-text'>{message}</p>
                        </div>
                    }
            </form>
        </>
    )
}