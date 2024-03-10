import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
            }
            else {
                navigate('/')
            }
        }))
    }, []);
    const handleLogout = async (e) => {
        e.preventDefault()
        const response = await axios.get('http://localhost:3001/auth/logout')
        if (response.status == 200) {
            navigate('/')
        }
        else {
            console.log('Some troubles')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        const messages = data
        const response = await axios.post('http://localhost:3001/messages/send', {messages})
    }
    return (
        <>
            <h1>
                Страница клиента
            </h1>
            <button onClick={handleLogout}>Выйти</button>




            <form onSubmit={handleSubmit}>
                <label>
                    Чем помочь?
                    <select name="question" id="" onChange={e => setData({ ...data, type: e.target.value })}>
                        <option defaultValue='' hidden = {true}>Выберите</option>
                        <option value="Проблема с водой">Проблема с водой</option>
                        <option value="Запах в комнате">Запах в комнате</option>
                        <option value="Проблема с техникой">Проблема с техникой</option>
                        <option value="Другая проблема">Другая проблема</option>
                    </select>
                </label>
                <label>
                    Опишите подробнее вашу проблему
                    <input type="text" name="" id="" style={{ height: "50px" }} onChange={e => setData({ ...data, question: e.target.value })} />
                </label>
                <label>
                    Выберите удобное для вас время
                    <input type="time" name="" id="" onChange={e => setData({ ...data, time: e.target.value })} />
                </label>
                <input type="submit" value="Отправить" />
            </form>




        </>
    )
}

export default Client;