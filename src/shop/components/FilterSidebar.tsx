import { Separator } from "@/components/ui/separator";
import { FilterBrands } from "./FilterBrands";
import { FilterColors } from "./FilterColors";
import { FilterCurrencies } from "./FilterCurrencies";
import { FilterTypePrice } from "./FilterTypePrice";
import { IoIosSearch } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "react-router";
import type React from "react";

interface Props {
  replacement?: boolean;
}
export const FilterSidebar = ({ replacement }: Props) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
  searchParams.set("search", e.target.value);
  setSearchParams(searchParams);
};

  return (
    <div className="h-screen w-full  md:w-64 space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-4 hidden lg:block">Filtros</h3>
      </div>

      {replacement && (
        <>
          <div className="flex items-center space-x-2">
            <div className="relative w-full">
              <IoIosSearch className="absolute top-1/2 left-3 -translate-y-1/2" />
              <Input
                placeholder="Buscar repuestos..."
                className="pl-9 h-9 bg-white"
                onChange={handleSearchChanged}
              />
            </div>
          </div>
        </>
      )}
      {/* Sizes */}
      <FilterBrands />

      <Separator />

      {replacement && (
        <>
          <FilterCurrencies />

          <Separator />

          <FilterTypePrice />

          <Separator />
        </>
      )}

      {!replacement && (
        <FilterColors />
      )}
      
    </div>
  );
};
