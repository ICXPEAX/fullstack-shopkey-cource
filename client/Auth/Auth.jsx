import { useContext, useState } from 'react';
import './Auth.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts';
import {observer} from "mobx-react-lite"
import { login, registration } from '../http/userAPI';
import { Context } from '../src/main';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const navigate = useNavigate();
    
    // Общие состояния
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Состояния для регистрации
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [surname, setMiddleName] = useState('');
    const [phonenumber, setPhone] = useState('');
    
    
    const click = async () => {
        try {
            console.log('cheac')
            let data;
            if (isLogin) {
                console.log('cheac12')
                data = await login(email, password);
                console.log('cheac1')
            } else {
                data = await registration(email, password,firstname,lastname,surname,phonenumber);
            }
            console.log(password)
            user.setUser(user)
            console.log('s1')
            user.setIsAuth(true)
            console.log('s1')
            navigate(MAIN_ROUTE);
        } catch (e) {
            alert(e.response?.data?.message || 'Произошла неизвестная ошибка')
        }

    }

    return (
        <form>
            <div className="headerpoFirst">
                {isLogin ? 'Авторизация' : 'Регистрация'}
            </div>
            
            {isLogin ? (
                // Форма входа
                <div>
                    <div className="headerpoSecond1">
                        <p className='textinput'>Email</p>
                    </div>
                    <div className="headerpoSecond">
                        <input 
                            className="datainput" 
                            placeholder='Введите email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            autoComplete="username"
                        />
                    </div>

                    <div className="headerpoSecond1">
                        <p className='textinput'>Password</p>
                    </div>
                    <div className="headerpoSecond">
                        <input 
                            className="datainput" 
                            placeholder='Введите пароль' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            autoComplete="current-password"
                        />
                    </div>
                    
                    <div className="headerpoSecond1">
                        <p className='textinput'>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                        </p>
                        <button type="submit" className='rightb1' onClick={click}></button>
                    </div>
                </div>
            ) : (
                // Форма регистрации
                <div>
                    <div className="headerpoSecond1">
                        <p className='textinput'>Email</p>
                    </div>
                    <div className="headerpoSecond">
                        <input 
                            className="datainput" 
                            placeholder='Введите email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                        />
                    </div>

                    <div className="headerpoSecond1">
                        <p className='textinput'>Password</p>
                    </div>
                    <div className="headerpoSecond">
                        <input 
                            className="datainput" 
                            placeholder='Введите пароль'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
                    </div>

                    <div className="headerpoSecond1">
                        <p className='textinput'>Имя</p>
                    </div>
                    <div className="headerpoSecond">
                        <input 
                            className="datainput" 
                            placeholder='Введите имя'
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="headerpoSecond1">
                        <p className='textinput'>Фамилия</p>
                    </div>
                    <div className="headerpoSecond">
                        <input 
                            className="datainput" 
                            placeholder='Введите фамилию'
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="headerpoSecond1">
                        <p className='textinput'>Отчество</p>
                    </div>
                    <div className="headerpoSecond">
                        <input 
                            className="datainput" 
                            placeholder='Введите отчество'
                            value={surname}
                            onChange={(e) => setMiddleName(e.target.value)}
                        />
                    </div>

                    <div className="headerpoSecond1">
                        <p className='textinput'>Номер телефона</p>
                    </div>
                    <div className="headerpoSecond">
                        <input 
                            className="datainput" 
                            placeholder='Введите номер телефона'
                            value={phonenumber}
                            onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                        />
                    </div>
                    
                    <div className="headerpoSecond1">
                        <p className='textinput'>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                        </p>
                        <button type="submit" className='rightb' onClick={click}>Регистрация</button>
                    </div>
                </div>
            )}
             <div className='headermainclose'></div>
        </form>
       
    );
    
});

export default Auth;