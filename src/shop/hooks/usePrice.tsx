import { useQuery } from "@tanstack/react-query";
import { getPrice } from "../actions/get-price.action";
import { useProductStore } from "../store/product.store";

export const usePrice = (type: string) => {
  const { idslug } = useProductStore();
  return useQuery({
    queryKey: ["price", { type, idslug }],
    queryFn: () => getPrice(idslug, type),
    retry: 2,
    staleTime: 0,
     enabled: !!type ,
  });
};
