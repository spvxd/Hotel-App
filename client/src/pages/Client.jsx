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
    return (
        <>
            <h1>
                Страница клиента
            </h1>
        </>
    )
}

export default Client;