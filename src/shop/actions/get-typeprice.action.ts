import { gutiMotors } from "@/api/GutiMotosAPI";
import type { TypePriceResponse } from "../interfaces/TypePrice.response";

export const getTypePrice = async (): Promise<TypePriceResponse[]> => {
  const { data } = await gutiMotors.get<TypePriceResponse[]>(
    "/core/api/type-price",{
        params:{
        product_type: 'sparepart'
      }
    }
  );
  return data??[];
};
