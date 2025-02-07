"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Element } from "@prisma/client";
import { toast } from "@/hooks/use-toast";
import { Copy, MoreHorizontal, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export type ColumProps = Element;

export const columns: ColumnDef<ColumProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "typeElement",
    header: "Type Element",
  },
  {
    accessorKey: "urlWebsite",
    header: "Url Website",
  },
  {
    accessorKey: "directory",
    header: "Directory",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const password = row.original.password;
      const username = row.original.username;

      const onEditElement = () => {
        window.location.href = `/element/${row.original.id}`;
      };
      const copyItemClipboard = (item: string, name: string) => {
        navigator.clipboard.writeText(item);
        toast({
          title: `${name} copied to clipboard`,
        });
      };

      return (
        <div className="flex items-center justify-center gap-2">
          {password && (
            <Copy
              className="w-4 h-4 cursor-pointer"
              onClick={() => copyItemClipboard(password, "Password")}
            />
          )}
          {username && (
            <User
              className="w-4 h-4 cursor-pointer"
              onClick={() => copyItemClipboard(username, "Username")}
            />
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open Menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={onEditElement}
                className="cursor-pointer"
              >
                Edit
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
