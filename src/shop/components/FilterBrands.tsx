import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router";
import { useBrands } from "../hooks/useBrands";

export const FilterBrands = () => {
  const { data, fetchNextPage,hasNextPage,isFetchingNextPage } = useBrands();

  const [searchParams, setSearchParams] = useSearchParams();
  const currentbrand = searchParams.get("brand") || "";

  const handleBrandChanged = (idbrand: number) => {
    if (idbrand.toString() === currentbrand) {
      searchParams.delete("brand");
      setSearchParams(searchParams);
      return;
    }
    searchParams.set("brand", idbrand.toString());
    setSearchParams(searchParams);
  };

  return (
    <div className="space-y-4">
      <h4 className="font-medium">Marcas</h4>
      <div className="grid grid-cols-3 gap-2">
        {data.map((brand) => (
            <Button
              key={brand.id}
              variant={
                currentbrand === brand.id.toString() ? "default" : "outline"
              }
              size="sm"
              className="h-8  cursor-pointer"
              onClick={() => handleBrandChanged(brand.id)}
            >
              {brand.name}
            </Button>
          ))}
      </div>
      <Button onClick={() => fetchNextPage()}  disabled={isFetchingNextPage || !hasNextPage } className="w-full cursor-pointer" variant="secondary">
        Ver mas
      </Button>
    </div>
  );
};
