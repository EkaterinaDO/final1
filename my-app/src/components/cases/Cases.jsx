import './Cases.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { $api } from "../../axios/axios-request";
import { user_cases } from "../../redux/store/userCasesReducer";
import { cases_change } from "../../redux/store/userCasesReducer";
// import { delete_case } from '../../redux/store/casesReducer';

export default function Cases() {

    const dispatch = useDispatch();
    const arr = useSelector(state => state.userCasesReducer);
    console.log(arr)

    useEffect(() => {
        $api
            .get('/cases/')
            .then(response => {
                const arrayResponse = response.data.data;
                console.log(arrayResponse)
                dispatch(user_cases(arrayResponse));
            })
    }, [])

    const deleteCase = (id) => {
        $api
            .delete(`/cases/${id}`)
            .then(response => {
                console.log(response)
                $api
                .get('/cases/')
                .then(response => {
                    console.log(response)
                    dispatch(cases_change(response.data.data))
                })
            })
            .catch(error => {
                console.log('ошибка удаления кражи :', error)
            })
    }



    return (
        <div className='wrapper-cases'>
            <table className='table'>
                <tbody>
                    <tr className='row-title'>
                        <th>#</th><th>Лицензионный
                            номер</th><th>Тип</th><th>Цвет</th><th>Описание</th>
                    </tr>
                    {arr.map((item, index) => (
                        <tr className='row'>
                            <td>{index}</td><td>{item.licenseNumber}</td><td>{item.type}</td><td>{item.color}</td><td>{item.description}</td>
                            {arr && <button className='btn-main__delete' onClick={() => deleteCase(item._id)}>Удалить</button>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}