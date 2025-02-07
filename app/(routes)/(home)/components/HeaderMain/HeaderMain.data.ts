import { Folder, KeyRound } from "lucide-react";
import { DataHeaderMainItemProps } from "./HeaderMain.type";

export const dataHeaderMain: DataHeaderMainItemProps[] = [
    {
        icon: KeyRound,
        text: 'Element',
        typeElement: 'password'
    },
    {
        icon: Folder,
        text: 'Folder',
        typeElement: 'folder'
    }
]