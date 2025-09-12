import { gutiMotors } from "@/api/GutiMotosAPI";
import type { PriceResponse } from "../interfaces/Price.response";



export const getPrice = async (id: string,type:string): Promise<PriceResponse> => {
   const { data } = await gutiMotors.get<PriceResponse>(`/motorcycles/api/motorcycle-price/${id}/${type}`);
    return data;
}