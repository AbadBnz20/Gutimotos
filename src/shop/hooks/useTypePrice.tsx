import { useQuery } from "@tanstack/react-query";
import { getTypePrice } from "../actions/get-typeprice.action";

export const useTypePrice = () => {
  return useQuery({
    queryKey: ["typeprice"],
    queryFn: () => getTypePrice(),
    retry: 2,
    staleTime: 1000 * 60 * 60 * 24,
  });
};
