import { useAuthStore } from "@/auth/store/auth.store";
import { UserContent } from "@/components/AvatarUser";
import { Separator } from "@/components/ui/separator";
import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router";

export const ContentSidebarMovil = () => {
  const path = location.pathname.split("/")[1];
  const { logout } = useAuthStore();
  return (
    <div className="flex flex-col h-[85vh] justify-between">
      <div className="flex flex-col space-y-5">
        <Link
          to="/"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            path === "" && "underline underline-offset-4"
          } `}
        >
          Motos
        </Link>
        <Separator />
        <Link
          to="/spareparts"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            path === "spareparts" && "underline underline-offset-4"
          }`}
        >
          Repuesto
        </Link>
        <Separator />
      </div>
      <div onClick={logout} className="flex items-center justify-between space-x-2 mt-6 cursor-pointer">
        <h4 className="text-sm font-medium transition-colors"> Cerrar Session</h4> <IoExitOutline />
      </div>
    </div>
  );
};




export const ContentSidebarMovilUser = () => {
  const { user } = useAuthStore();

  return (
    <div className="flex gap-3">
         <UserContent/>
         <div>
            <p className="text-[10px] font-semibold">{user?.fullName}</p>
            <p className="text-[9px]">{user?.email}</p>
          </div>
    </div>
  )
}
