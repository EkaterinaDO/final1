import axios from "axios";


const token = localStorage.getItem('token');

export const $api = axios.create({
    baseURL: 'https://sf-final-project-be.herokuapp.com/api',
    headers: {
        'Authorization': `Bearer ${token}`,
    }
});