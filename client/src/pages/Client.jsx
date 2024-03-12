import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import background from "../assets/img/azimut1.jpg";

const Client = () => {
    axios.defaults.withCredentials = true
    const navigate = useNavigate()
    const [data, setData] = useState({
        type: '',
        question: '',
        room: '303',
        time: ''
    })
    useEffect(() => {
        axios.get('http://localhost:3001/auth').then((res => {
            if (res.data.Role) {
                console.log(res.data.role)
            } else {
                navigate('/')
            }
        }))
    }, []);
    const handleLogout = async (e) => {
        e.preventDefault()
        const response = await axios.get('http://localhost:3001/auth/logout')
        if (response.status == 200) {
            navigate('/')
        } else {
            console.log('Some troubles')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        const messages = data
        const response = await axios.post('http://localhost:3001/messages/send', {messages})
        console.log(response.status)
    }
    return (
        <>
            <div className="container-login100" style={{backgroundImage: "url(" + background + ")"}}>
                <div className="container">
                    <h1>Отправить вопрос</h1>
                    <form id="question-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>
                                Чем помочь?
                                <select name="question" id="" onChange={e => setData({...data, type: e.target.value})}>
                                    <option defaultValue='' hidden={true}>Выберите</option>
                                    <option value="Проблема с водой">Проблема с водой</option>
                                    <option value="Запах в комнате">Запах в комнате</option>
                                    <option value="Проблема с техникой">Проблема с техникой</option>
                                    <option value="Другая проблема">Другая проблема</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Опишите подробнее вашу проблему
                                <input className="question" type="text" name="" id="" style={{height: "50px"}}
                                       onChange={e => setData({...data, question: e.target.value})}/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Выберите удобное для вас время
                            </label>
                            <input className="time" type="time" name="" id="" onChange={e => setData({...data, time: e.target.value})}/>
                        </div>
                        <button type="submit" className="send-data">Отправить</button>
                        <br/>
                        <button onClick={handleLogout} className="logout">Выйти</button>
                    </form>
                </div>
            </div>




        </>
    )
}

export default Client;