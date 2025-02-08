"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Ghost, Icon } from "lucide-react";
import { dataHeaderMain } from "./HeaderMain.data";
import { useState } from "react";
import { FormAddElement } from "../FormAddElement/FormAddElement";
import { HeaderMainProps } from "./HeaderMain.type";

export default function HeaderMain(props: HeaderMainProps) {
  const { userId } = props;
  const [typeElement, setTypeElement] = useState<"password" | "folder" | "">();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const closeDialogandDropdown = () => {
    setOpenDialog(false);
    setOpenDropdown(false);
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl md:text-3xl font-semibold">All safes</h1>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
          <DropdownMenuTrigger asChild className="mr-3">
            <Button>
              New <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <DialogTrigger asChild>
                <div className="flex flex-col">
                  {dataHeaderMain.map(({ icon: Icon, typeElement, text }) => (
                    <Button
                      key={typeElement}
                      className="justify-start"
                      variant="ghost"
                      onClick={() => setTypeElement(typeElement)}
                    >
                      <Icon className="w-4 h-4 mr-2" /> {text}
                    </Button>
                  ))}
                </div>
              </DialogTrigger>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent className="sm:max-w-[825px]">
          <DialogHeader>
            <DialogTitle>Create a new element</DialogTitle>
          </DialogHeader>

          {typeElement === "password" && (
            <FormAddElement
              userId={userId}
              closeDialog={closeDialogandDropdown}
            />
          )}
          {typeElement === "folder" && <p>Form Password</p>}
        </DialogContent>
      </Dialog>
    </div>
  );
}
