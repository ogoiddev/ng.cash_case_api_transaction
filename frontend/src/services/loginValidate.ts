import axios, { AxiosError } from "axios"
import { LOGIN_VALIDATE_URL } from "./endpoints"


export interface IUserLogDTO {
  userName: string,
  password: string,
}


export const loginValidate = async (AuthStr: string) => {
  
return axios.get(LOGIN_VALIDATE_URL,
  { headers: { Authorization: AuthStr } })
  .then(response => response.data)
  .catch((AxiosError) => AxiosError)
}