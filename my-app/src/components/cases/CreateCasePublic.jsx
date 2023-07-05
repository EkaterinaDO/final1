import { ButtonBack } from "../ButtonBack"
import { ButtonHome } from "../ButtonBack"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CreateCasePublic = () => {

    // const navigate = useNavigate();

    // const [licenseNumber, setLicenseNumber] = useState('');
    // const [ownerFullName, setOwnerFullName] = useState('');
    // const [type, setType] = useState('');
    // const [color, setColor] = useState('');
    // const [description, setDescription] = useState('');
    // const [clientId, setClientId] = useState('');

    // const createCasePublicRequest = () => {
    //     axios
    //         .post('https://sf-final-project-be.herokuapp.com/api/public/report', {
    //             'licenseNumber': licenseNumber,
    //             'ownerFullName': ownerFullName,
    //             'type': type,
    //             'color': color,
    //             'clientId': clientId,
    //             'description': description,
    //         })
    //         .then(response => {
    //             console.log(response);
    //             navigate('/cases/public')
    //         })
    // }

    // return (
    //     <>
    //         <ButtonBack />
    //         <div className="wrapper-create-case">
    //             <form className="form-create-case" onSubmit={e => e.preventDefault()}>
    //                 <label className="label-text-create-case">Лицензионный номер
    //                     <input className="input-create-case" value={licenseNumber} onChange={event => setLicenseNumber(event.target.value)} required />
    //                 </label>
    //                 <label className="label-text-create-case">Client Id
    //                     <input className="input-create-case" value={clientId} onChange={event => setClientId(event.target.value)} required />
    //                 </label>

    //                 <label className="label-text-create-case">ФИО владельца
    //                     <input className="input-create-case" defaultValue={ownerFullName} onChange={event => setOwnerFullName(event.target.value)} required />
    //                 </label>
    //                 <label className="label-text-create-case">Тип велосипеда
    //                     <select className="input-create-case" defaultValue={type} onFocus={event => setType(event.target.value)} >
    //                         <option>general</option>
    //                         <option>sport</option>
    //                     </select>
    //                 </label>
    //                 <label className="label-text-create-case">Цвет
    //                     <select className="input-create-case" defaultValue={color} onFocus={event => setColor(event.target.value)}>
    //                         <option>черный</option>
    //                         <option>белый</option>
    //                     </select>
    //                 </label>
    //                 <label className="label-text-create-case">Дата кражи
    //                     <input className="input-create-case" type='date' required />
    //                 </label>
    //                 <label className="label-text-create-case">Сотрудник
    //                     <select className="input-create-case" >
    //                         <option>Одобрен</option>
    //                         <option>Неодобрен</option>
    //                     </select>
    //                 </label>
    //                 <label className="label-text-create-case_textarea">Дополнительная информация
    //                     <textarea className='textarea-create-case' placeholder="Это поможет нам быстрее найти велосипед" value={description} onChange={event => setDescription(event.target.value)} />
    //                 </label>
    //                 <label className="label-text-create-case_checkbox">Согласиться с условиями и правилами
    //                     <input className="input-create-case" type='checkbox' required />
    //                 </label>
    //                 <button className='submit' onClick={() => createCasePublicRequest()} type='submit'>Сообщить о краже</button>
    //             </form>
    //             <ButtonHome />
    //         </div>
    //     </>
    // )
}