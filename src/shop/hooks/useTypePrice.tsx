import { useQuery } from "@tanstack/react-query";
import { getTypePrice } from "../actions/get-typeprice.action";
import type { TypePriceResponse } from "../interfaces/TypePrice.response";

export const useTypePrice = () => {
  const { data } = useQuery<TypePriceResponse[]>({
    queryKey: ["typeprice"],
    queryFn: () => getTypePrice(),
    retry: 2,
    staleTime: 1000 * 60 * 60 * 24,
  });
  return { data: data ?? [] };
};
