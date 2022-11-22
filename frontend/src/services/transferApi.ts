import axios, { AxiosError } from "axios";
import { TRANSACTION_URL } from "./endpoints";


export interface ITransferDTO {
  userName: string;
  amount: number;
}

export interface ITransferDTOReturns {
  debited_account_id: string,
  credited_account_id: string,
  value: number,
  id: string,
  created_at: string
}


export const axiosTransfer = async (transferDTO: ITransferDTO, token: string): Promise<ITransferDTOReturns | AxiosError> => {
  return axios.patch(TRANSACTION_URL, transferDTO, { headers: { Authorization: token } })
  .then(response => response.data)
  .catch((AxiosError) => AxiosError)

}