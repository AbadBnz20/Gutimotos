import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CustomLogo } from "../components/CustomLogo";
import { FaTiktok, FaInstagram, FaFacebookF, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/auth.store";

export const LoginPages = () => {
  const [isposting, setIsposting] = useState(false);
  const { login } = useAuthStore();
  const handlelogin = async () => {
    setIsposting(true);

    const resp = await login();
    if (!resp) {
      setIsposting(false);
      return toast.error("error al iniciar session", {
        position: "top-right",
      });
    }

    setIsposting(false);
  };

  return (
    <div className={"flex flex-col gap-6"}>
      <Card className="overflow-hidden p-0  ">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6 min-h-[400px]  justify-between">
              <div className="flex flex-col items-center text-center">
                <CustomLogo />

                <p className="text-sm text-muted-foreground">
                  Ingrese a nuestra web y podras ver nuestros catalogos
                </p>
              </div>

              <Button
                onClick={handlelogin}
                className="w-full cursor-pointer"
                disabled={isposting}
              >
                <FaGoogle />
                Ingresar con google
              </Button>
              <div>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-background px-2 text-muted-foreground">
                    nuestras redes
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-5">
                  <Button variant="outline" className="w-full">
                    <FaFacebookF color="#bf2829" />
                    <span className="sr-only">Login with Apple</span>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FaInstagram color="#bf2829" />
                    <span className="sr-only">Login with Google</span>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FaTiktok color="#bf2829" />
                    <span className="sr-only">Login with Meta</span>
                  </Button>
                </div>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="https://i0.wp.com/haojuemotos.pe/wp-content/uploads/2021/12/consejos-para-viaje-en-moto-Haojue-Motos-Peru.jpg?w=1140&ssl=1"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        Bienvenido a nuestra plataforma
      </div>
    </div>
  );
};
