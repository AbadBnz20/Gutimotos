import { CustomLogo } from "@/auth/components/CustomLogo";
import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { useAuthStore } from "@/auth/store/auth.store";
import { AvatarUser } from "./AvatarUser";

export const CustomHeader = () => {
  const { authStatus } = useAuthStore();
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <CustomLogo />

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                path === "" && "underline underline-offset-4"
              } `}
            >
              Motos
            </Link>
            <Link
              to="/spareparts"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                path === "spareparts" && "underline underline-offset-4"
              }`}
            >
              Repuesto
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            {/* <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <IoIosSearch className="absolute top-1/2 left-3 -translate-y-1/2" />
                <Input
                  placeholder="Buscar productos..."
                  className="pl-9 w-64 h-9 bg-white"
                />
              </div>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden">
              <IoIosSearch />
            </Button> */}

            {authStatus === "authenticated" ? (
              <AvatarUser />
            ) : (
              <Link to="/auth/login">
                <Button variant="default" size="sm" className="ml-2 cursor-pointer">
                  Iniciar session
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
