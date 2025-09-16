import { CustomPagination } from "../components/CustomPagination";
import { ProductsContent } from "../components/ProductsContent";
import { useProducts } from "../hooks/useProducts";

export const HomePages = () => {
  const { data, isLoading } = useProducts();
  // let seconds = 0;
  // let minutes = 0;

  // const timer = setInterval(() => {
  //   seconds++;

  //   if (seconds === 60) {
  //     minutes++;
  //     seconds = 0;
  //   }

  //   if (minutes > 0) {
  //     console.log(`${minutes}m ${seconds}s`);
  //   } else {
  //     console.log(`${seconds}s`);
  //   }
  // }, 1000);
  return (
    <div>
      {/* <CustomJumbotron
        title="Motos"
        subTitle="Motos de alto rendimiento con diseño vanguardista e ingeniería de precisión. Potencia premium para una experiencia de conducción única."
      /> */}
      <ProductsContent products={data?.data || []} isloading={isLoading} />
      <CustomPagination
        next_cursor={data?.next_cursor}
        previous_cursor={data?.previous_cursor}
      />
    </div>
  );
};
