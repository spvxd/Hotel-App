import logo from '../assets/img/logo.png'
import background from '../assets/img/azimut1.jpg'
import '../assets/css/main.css'
import '../assets/css/util.css'
import '../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../assets/fonts/iconic/css/material-design-iconic-font.min.css'
import {useState} from "react";

const Login = () => {
    const adminData = {
        username: 'admin',
        password: 'admin'
    }
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        if(userData.username === adminData.username && userData.password === adminData.password) {
            alert('Доступ разрешен')
        }
        else{
            alert('Неверный логин или пароль')
        }
    }
    return (
        <>
            <div className="limiter">
                <div className="container-login100" style={{backgroundImage: "url(" + background + ")"}}>
                    <div className="wrap-login100">
                        <form className="login100-form validate-form" onSubmit={handleSubmit}>
					<span className="login100-form-logo">
                        <img src={logo} alt=""/>
					</span>

                            <span className="login100-form-title p-b-34 p-t-27">
						<strong>Войти / Sign in</strong>
					</span>

                            <div className="wrap-input100 validate-input" data-validate="Enter username">
                                <input className="input100" type="text" name="username" placeholder="Логин / Login"
                                       onChange={e => setUserData({...userData, username: e.target.value})}/>
                                <span className="focus-input100" data-placeholder="&#xf207;"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <input className="input100" type="password" name="pass"
                                       placeholder="Пароль / Password"
                                       onChange={e => setUserData({...userData, password: e.target.value})}/>
                                <span className="focus-input100" data-placeholder="&#xf191;"></span>
                            </div>


                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" type="submit">
                                    Войти
                                </button>
                            </div>

                            <div className="text-center p-t-90">
                                <a className="txt1" href="#">
                                    <b>Данные для авторизации находятся в номере</b>
                                </a>
                                <br/>
                                <a className="txt1" href="#">
                                    <b>Authorization data is in the room</b>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}


export default Login;