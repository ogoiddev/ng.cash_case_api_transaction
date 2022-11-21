import axios from "axios"
import { LIST_CARS_URL, SAVE_NEW_CAR_URL, SEND_IMG_CAR_URL } from "./endpoints"

export const getListOfCars = async () => {
  try {
    const { data } = await axios.get((LIST_CARS_URL))
    return data
    
  } catch (AxiosError) {
    console.log(AxiosError)
  }

}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYzNjRjYzYyM2VlYzQ0MDYxMGUwNzBjNiIsIm5hbWUiOiJEaW9nbyIsImxhc3ROYW1lIjoiTWFydGluaSBQYW50YWxlYW8iLCJlbWFpbCI6Im9nb2lkbXBAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMDUkd2F1Uk1hWXdhSDAzbTZnblc3NEpLT0FxMzFqN0JjbXBaTXd6S011Qnd4bDV1LjVrblZ0TS4iLCJyb2xlIjoiYWRtaW4iLCJ0aHVtYiI6InN0cmluZyJ9LCJpYXQiOjE2Njc2MDQwNTksImV4cCI6MTY2ODgxMzY1OX0.P1lJh_zMxcFx7Mt34DDddaWoqYStX7P0ZevoJV-2DAs"

export const saveNewCar = async (infoCarDTO: any) => {
  try {
    const { data } = await axios.post((SAVE_NEW_CAR_URL), infoCarDTO,
      {
      headers: {
        Authorization: token,
      },
    })
    return data
    
  } catch (AxiosError) {
    console.log(AxiosError)
  }

}

export const sendImgOfNewCar = async (infoImgDTO: any) => {
  try {    
    const { data } = await axios.post(SEND_IMG_CAR_URL, infoImgDTO,
      {
      headers: {
        Authorization: token
      },
    })
    return data
    
  } catch (AxiosError) {
    console.log(AxiosError)
  }

}