import { CustomJumbotron } from "../components/CustomJumbotron";
import { CustomPagination } from "../components/CustomPagination";
import { ProductsContent } from "../components/ProductsContent";
import { useProducts } from "../hooks/useProducts";

export const HomePages = () => {
  const {data}=useProducts()
  return (
    <div>
      <CustomJumbotron
        title="Motos"
        subTitle="Motos de alto rendimiento con diseño vanguardista e ingeniería de precisión. Potencia premium para una experiencia de conducción única."
      />
      <ProductsContent products={data?.data || []} /> 
      <CustomPagination next_cursor={data?.next_cursor} previous_cursor={data?.previous_cursor}/>
    </div>
  );
};
