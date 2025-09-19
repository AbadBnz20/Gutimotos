import { useAuthStore } from "@/auth/store/auth.store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate, useSearchParams } from "react-router";
import { useProductStore } from "../store/product.store";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  id: number;
  product: string;
  photo: string;
  product_code: string;
  product_description: string;
  calculated_price: number;
  setOpenDialog: (open: boolean) => void;
  setProduct_description: (description: string) => void;
}
export const ReplacementCard = ({
  id,
  photo,
  product_code,
  product_description,
  calculated_price,
  setOpenDialog,
  setProduct_description,
}: Props) => {
  const navigate = useNavigate();
  const { authStatus } = useAuthStore();
  const [searchParams] = useSearchParams();
  const { setProduct, setIdSlug } = useProductStore();
  const viewMode = searchParams.get("viewMode") || "grid";

  const handleOpenDialog = () => {
    if (authStatus === "not-authenticated") {
      return navigate("/auth/login");
    }
    setIdSlug(id.toString());
    setProduct(id.toString());
    setProduct_description(product_description);
    setOpenDialog(true);
  };

  return (
    <Card className="group border-0 shadow-none product-card-hover cursor-pointer h-full">
      <CardContent
        className={`p-0 h-full ${
          viewMode === "list" ? "flex flex-row" : "flex flex-col"
        }`}
      >
        {/* Imagen */}
        <div className="relative aspect-square overflow-hidden bg-muted rounded-lg">
          <LazyLoadImage
            src={photo}
            className={`${
              viewMode === "list" ? "w-50 h-50" : "w-full h-full"
            } object-cover transition-transform duration-300 group-hover:scale-105`}
          />
          <div className="image-overlay" />
        </div>

        {/* Contenido */}
        <div className="flex flex-col justify-between flex-1 pt-6 px-4 pb-4">
          {/* Info */}
          <div className="space-y-1">
            <h3 className="font-medium text-sm tracking-tight line-clamp-2">
              {product_description}
            </h3>
            <p className="text-xs text-muted-foreground uppercase">
              {product_code}
            </p>
            <p className="font-medium">
              <span>$ {calculated_price}</span>
            </p>
          </div>

          {/* Botón siempre abajo */}
          <div className="flex items-center justify-between mt-4">
            <Button
              size="sm"
              variant="outline"
              onClick={handleOpenDialog}
              className="cursor-pointer transition-all duration-300 hover:bg-primary hover:text-primary-foreground border-primary/20 text-xs px-4 py-2 h-8"
            >
              Ver más
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
