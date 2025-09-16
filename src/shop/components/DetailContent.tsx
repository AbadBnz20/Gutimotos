import type { DataDetailProduct } from "../interfaces/DetailProduct.response";
import { ContentImages } from "./ContentImages";
import { SelectPrice } from "./SelectPrice";
import { ContentPrice } from "./ContentPrice";
import { EmptyContent } from "./EmptyContent";
import { useState } from "react";
import { usePrice } from "../hooks/usePrice";
import { ContentLoading } from "./ContentLoading";

interface Props {
  data: DataDetailProduct;
}
export const DetailContent = ({ data }: Props) => {
  const [select, setSelect] = useState("");
   const {data: priceData,isLoading}= usePrice(select);
  return (
    <div className="w-full">
      <div className="pb-4  grid justify-between ">
        <div className="space-y-1">
          <h3 className="font-medium text-lg tracking-tight">
            {data.motorcycle_type_name}
          </h3>
          <p className="text-xs text-muted-foreground uppercase">
            {data.brand_name} -
            <span className="font-bold">{data.color_name} </span>
          </p>
        </div>
      </div>
      <ContentImages photo={data.photos} />

      <SelectPrice select={select} setSelect={setSelect} />
      {isLoading ? <ContentLoading small /> :   priceData?.data ? <ContentPrice data={priceData.data} /> : <EmptyContent />}
    </div>
  );
};
