import { Separator } from "@/components/ui/separator";
import { FilterBrands } from "./FilterBrands";
import { FilterColors } from "./FilterColors";
import { FilterCurrencies } from "./FilterCurrencies";
import { FilterTypePrice } from "./FilterTypePrice";

interface Props {
  replacement?: boolean;
}
export const FilterSidebar = ({ replacement }: Props) => {
  return (
    <div className="w-64 h-screen overflow-y-auto space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-4 hidden lg:block">Filtros</h3>
      </div>

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

      <FilterColors />
    </div>
  );
};
