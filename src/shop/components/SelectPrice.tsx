import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTypePrice } from "../hooks/useTypePrice";
interface Props {
  select: string;
  setSelect: (select: string) => void;
}
export const SelectPrice = ({ select, setSelect }: Props) => {
  const { data, isSuccess } = useTypePrice();
  useEffect(() => {
    if (isSuccess && data.length > 0) {
      setSelect('precio-minorista');
    }
  }, [isSuccess, data]);
  return (
    <Select value={select} onValueChange={setSelect}>
      <SelectTrigger className="w-[250px] mt-3">
        <SelectValue placeholder="Seleccione tipo de precio" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Precios</SelectLabel>
          {data &&
            data.map((item) => (
              <SelectItem key={item.slug} value={item.slug}>
                {item.name}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
