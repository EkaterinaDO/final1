import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div>
            <p>Такого адреса не существует, вернитесь на стартовую страницу <Link to='/'>Find bicycle</Link></p>
        </div>
    )
}