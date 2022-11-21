import axios from "axios"
import { GET_USER_BY_ID_URL } from "./endpoints"

export const getUserByIdApi = async (userId: string) => {
  try {
    const { data } = await axios.get(`${GET_USER_BY_ID_URL}/${userId}`)
    return data
    
  } catch (AxiosError) {
    return AxiosError
  }

}