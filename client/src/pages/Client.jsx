import {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Client = () => {
    axios.defaults.withCredentials = true
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3001/auth').then((res => {
            if(res.data.Role) {
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
    return (
        <>
            <h1>
                Страница клиента
            </h1>
            <button onClick={handleLogout}>Выйти</button>
        </>
    )
}

export default Client;