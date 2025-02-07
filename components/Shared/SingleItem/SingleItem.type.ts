import { LucideIcon } from "lucide-react"

export type SingleItemProps = {
    lable: string,
    icon: LucideIcon,
    href: string,
    onClick?: () => void
}