import axios from "axios"
import { NEW_USER_ACCOUNT_URL } from "./endpoints"


export interface IUserLogDTO {
  userName: string,
  password: string,
}


export const loginToToken = async (userLogDTO: IUserLogDTO) => {
  try {
    const { data } = await axios.post((NEW_USER_ACCOUNT_URL), userLogDTO)
    return data
    
  } catch (AxiosError) {
    return AxiosError
  }

}