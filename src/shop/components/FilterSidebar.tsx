import { Separator } from "@/components/ui/separator";
import { FilterBrands } from "./FilterBrands";
import { FilterColors } from "./FilterColors";

export const FilterSidebar = () => {
  return (
    <div className="w-64 space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-4">Filtros</h3>
      </div>

      {/* Sizes */}
      <FilterBrands />

      <Separator />
      <FilterColors />
    </div>
  );
};
