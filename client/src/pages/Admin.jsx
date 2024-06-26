import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import background from "../assets/img/azimut1.jpg";

const Admin = () => {
    const [message, setMessage] = useState([])
    axios.defaults.withCredentials = true
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3001/auth').then((res => {
            if (res.data.Role) {
                console.log(res.data.role)
            } else {
                navigate('/')
            }
        }))
        axios.get('http://localhost:3001/messages/get').then((res) => {
            setMessage(res.data.Messages)
            console.log(res.data.Messages)
        })
    }, [navigate]);
    const handleLogout = async (e) => {
        e.preventDefault()
        const response = await axios.get('http://localhost:3001/auth/logout')
        if (response.status == 200) {
            navigate('/')
        } else {
            console.log('Some troubles')
        }
    }
    const handleDelete = async (index, ) => {
        console.log(index)
        const response = await axios.delete(`http://localhost:3001/messages/delete/${index}`, {id:index})
        console.log(response)
    }
    return (
        <div className="container-login100" style={{backgroundImage: "url(" + background + ")"}}>
            <div className="wrapper">

                <table className="table_price">
                    <caption>Список вопросов</caption>
                    <tbody>
                    <tr>
                        <th>Комната</th>
                        <th>Тип</th>
                        <th>Описание</th>
                        <th>Время</th>
                        <th>Действие</th>
                    </tr>
                    </tbody>
                    {message.map((item, index) => (
                        <tbody key={index}>
                        <tr key={index}>
                            <th>{item.room}</th>
                            <th>{item.type}</th>
                            <th>{item.question}</th>
                            <th>{item.time}</th>
                            <th>
                                <ul>
                                    <li><a className="delete_item" href="" onClick={() => {
                                        handleDelete(item.id)
                                    }
                                    }>Удалить</a></li>
                                    <li><a className="open_item" href="">Подробнее </a></li>
                                    <li><a className="archive_item" href="">В архив</a></li>
                                </ul>
                            </th>

                        </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>

    )
}

export default Admin;