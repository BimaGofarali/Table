import {LOGIN_BEGIN, LOGOUT} from "./type"

export const Login = (body) => {
const {username, password, imei} = body
return {
type : LOGIN_BEGIN,
username,
password,
imei
}
}


export const logout = () => {
    return {
      type: LOGOUT
    }
  }