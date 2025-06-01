import { $authHost,$host } from "./index";
import {jwtDecode} from 'jwt-decode'

export const registration = async (email,password,firstname,lastname,surname,phonenumber,role) => {
    const {data} = await $host.post('api/user/registration', {email,password,firstname,lastname,surname,phonenumber,role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const login = async (email,password) => {
    try {
    console.log('test')
    const {data}  = await $host.post('api/user/login', {email,password})
    console.log('test1')
    localStorage.setItem('token', data.token)
    console.log('test2')
    return jwtDecode(data.token)
    }
    catch (e) {
        console.error('Login error:', e);
        throw e;
        
    }
    
}
export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}