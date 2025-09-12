import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { DetailContent } from "./DetailContent";
import { useDetail } from "../hooks/useDetail";
import { useAuthStore } from "@/auth/store/auth.store";
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const DialogProduct = ({ open, setOpen }: Props) => {
  const { data } = useDetail();
 const {user}= useAuthStore()
  const handleRedirectTowhatsapp = () => {
    const phoneNumber = "59167398260";
    const message = `
    Soy usuario con el email:${user?.email}.
Quiero una cotización de la motocicleta:
Marca:${data?.data.brand_name}
Tipo:${data?.data.motorcycle_type_name}
Color:${data?.data.color_name}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-h-[90vh] overflow-auto"
          onInteractOutside={(event) => event.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          {data?.data && <DetailContent data={data?.data} />}
          <div className="mt-4 grid grid-cols-1  md:grid-cols-2  gap-2">
            <Button
              className="w-full cursor-pointer"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cerrar
            </Button>
            <Button
              className="w-full cursor-pointer"
              onClick={() => handleRedirectTowhatsapp()}
            >
              Contactar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
