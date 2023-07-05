import { useState } from "react";
import { $api } from "../../axios/axios-request";
import { useDispatch, useSelector } from "react-redux";
import { cases } from "../../redux/store/casesReducer";
import { useNavigate } from "react-router-dom";


export default function CreateCase() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const id = useSelector(state => state.casesReducer.id);

    const [licenseNumber, setLicenseNumber] = useState('');
    const [ownerFullName, setOwnerFullName] = useState('');
    const [type, setType] = useState('');
    const [color, setColor] = useState('');
    const [description, setDescription] = useState('');

    const createCaseRequest = () => {
        $api.post('/cases/', {
            'ownerFullName': ownerFullName,
            'licenseNumber': licenseNumber,
            'type': type,
            'color': color,
            'description': description,
        })
            .then(response => {
                console.log(response);
                dispatch(cases(response));
                //В мой state.id записал объект  -  649dfe46293a28253b6beaaf 
                return (
                    navigate('/cases')
                )
            })
            .catch(response => {
                console.log('Ошибка запроса создание случая кражи', response);
            })
    }

    return (
        <>
            <div className="wrapper-create-case">
                <form className="form-create-case" onSubmit={e => e.preventDefault()}>
                    <label className="label-text-create-case">Лицензионный номер
                        <input className="input-create-case" value={licenseNumber} onChange={event => setLicenseNumber(event.target.value)} required />
                    </label>

                    <label className="label-text-create-case">ФИО владельца
                        <input className="input-create-case" defaultValue={ownerFullName} onChange={event => setOwnerFullName(event.target.value)} required />
                    </label>
                    <label className="label-text-create-case">Тип велосипеда
                        <select className="input-create-case" defaultValue={type} onFocus={event => setType(event.target.value)} >
                            <option>general</option>
                            <option>sport</option>
                        </select>
                    </label>
                    <label className="label-text-create-case">Цвет
                        <select className="input-create-case" defaultValue={color} onFocus={event => setColor(event.target.value)}>
                            <option>черный</option>
                            <option>белый</option>
                        </select>
                    </label>
                    <label className="label-text-create-case">Дата кражи
                        <input className="input-create-case" type='date' required />
                    </label>
                    <label className="label-text-create-case">Сотрудник
                        <select className="input-create-case" >
                            <option>Одобрен</option>
                            <option>Неодобрен</option>
                        </select>
                    </label>
                    <label className="label-text-create-case_textarea">Дополнительная информация
                        <textarea className='textarea-create-case' placeholder="Это поможет нам быстрее найти велосипед" value={description} onChange={event => setDescription(event.target.value)} />
                    </label>
                    <label className="label-text-create-case_checkbox">Согласиться с условиями и правилами
                        <input className="input-create-case" type='checkbox' required />
                    </label>
                    <button className='submit' onClick={() => createCaseRequest()} type='submit'>Сообщить о краже</button>
                </form>
                
            </div>
        </>

    )
}