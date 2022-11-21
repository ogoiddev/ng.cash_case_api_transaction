import axios from "axios"
import { LOGIN_VALIDATE_URL } from "./endpoints"


export interface IUserLogDTO {
  userName: string,
  password: string,
}


export const loginValidate = async (token: string) => {
  console.log(token);
  
  try {
    const { data } = await axios.get((LOGIN_VALIDATE_URL), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
    
  } catch (AxiosError) {
    return AxiosError
  }

}