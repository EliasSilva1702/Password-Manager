"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

export function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false); // Estado para el loader

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true); // Mostrar el loader
    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (response?.status === 200) {
      toast({ title: "Successfully logged in" });
      router.push("/");
    } else {
      toast({
        title: "Error logging in",
        variant: "destructive",
      });
      setIsLoading(false); // Ocultar el loader en caso de error
    }
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="ml-4 text-lg font-semibold">Redirecting...</p>
        </div>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`w-full mt-5 space-y-3 text-black ${isLoading ? "opacity-50 pointer-events-none" : ""}`}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="text-start">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="text-start">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Your password" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}
