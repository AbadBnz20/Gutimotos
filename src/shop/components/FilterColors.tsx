import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "react-router";
import { useColor } from "../hooks/useColor";

export const FilterColors = () => {
  const { data } = useColor();
  const [searchParams, setSearchParams] = useSearchParams();

  const colors = searchParams.get("color") || "any";
  const handleColorChange = (color: string) => {
  
    searchParams.set("color", color);
    setSearchParams(searchParams);
  };
  return (
    <div className="space-y-4">
      <h4 className="font-medium">Colores</h4>
      <RadioGroup defaultValue="" className="space-y-3">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="any"
            id="priceAny"
            checked={colors === "any"}
            onClick={() => handleColorChange("")}
          />
          <Label htmlFor="priceAny" className="text-sm cursor-pointer">
            Cualquier precio
          </Label>
        </div>
        {data &&
          data.map((color) => (
            <div key={color.id} className="flex items-center space-x-2">
              <RadioGroupItem
                value={color.id.toString()}
                id={color.id.toString()}
                checked={colors === color.id.toString()}
                onClick={() => handleColorChange(color.id.toString())}
               
              />
              <Label htmlFor={color.id.toString()} className="text-sm cursor-pointer">
                {color.name}
              </Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
};
