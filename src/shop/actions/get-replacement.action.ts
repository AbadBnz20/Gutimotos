import { gutiMotors } from "@/api/GutiMotosAPI";
import type { ReplacementResponse } from "../interfaces/Replacement.response";

export const getReplacement = async (
  cursor: string | null,
  currency_code: string | null,
  type_price_slug: string | null,
  brand: string | null,
  category: string | null
): Promise<ReplacementResponse> => {
  const { data } = await gutiMotors.get<ReplacementResponse>(
    "/products/api/product-photo",
    {
      params: {
        cursor,
        currency_code,
        type_price_slug,
        brand,
        category,
      },
    }
  );
  return data;
};
