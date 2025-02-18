import { toast } from "@/hooks/use-toast";

export const copyClipboard = (value: string) => {
  navigator.clipboard.writeText(value);
  toast({
    title: "Copied to clipboard",
    duration: 1000,
  })
};