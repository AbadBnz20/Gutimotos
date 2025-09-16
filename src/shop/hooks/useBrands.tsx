import { useInfiniteQuery } from "@tanstack/react-query";
import { getBrands } from "../actions/get-brands.action";

export const useBrands = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      initialPageParam: 1,
      queryKey: ["brands"],
      queryFn: ({ pageParam }) => {
        return getBrands(pageParam.toString());
      },
      getNextPageParam: (lastPage) => lastPage.next_page ?? undefined,
      staleTime: 1000 * 60 * 60 * 24,
    });

  return {
    data: data?.pages.flatMap((page) => page.results) ?? [],
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
