import axios from "axios"
import { LOGIN_URL } from "./endpoints"


export interface IUserLogDTO {
  userName: string,
  password: string,
}


export const loginToToken = async (userLogDTO: IUserLogDTO) => {
  try {
    const { data } = await axios.post((LOGIN_URL), userLogDTO)
    return data
    
  } catch (AxiosError) {
    return AxiosError
  }

}