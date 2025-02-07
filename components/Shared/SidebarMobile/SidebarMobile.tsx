import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";
import { Button } from "@/components/ui/button";

export function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-blue-800 text-white" side="left">
        <SheetHeader className="text-left">
          <SheetTitle className="text-white">Elias Password Manager</SheetTitle>
          <SheetDescription className="text-slate-100 py-4">
            Create and manage all of your passwords in one place.
          </SheetDescription>
        </SheetHeader>
        <SidebarRoutes />
      </SheetContent>
    </Sheet>
  );
} 
