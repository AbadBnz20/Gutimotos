import { gutiMotors } from "@/api/GutiMotosAPI";
import type { DetailProductResponse } from "../interfaces/DetailProduct.response";

export const getDetailProduct = async (
  id: string
): Promise<DetailProductResponse> => {
  try {
    const { data } = await gutiMotors.get<DetailProductResponse>(
    `/motorcycles/api/motorcycle-photo/${id}`
  );
  return data;
  } catch (error) {
    console.log(error)
    throw error;
  }
};
