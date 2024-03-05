import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Admin = () => {
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
    }, []);
    return (
        <>
            <h1>Страница админа</h1>
        </>
    )
}

export default Admin;