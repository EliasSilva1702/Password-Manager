"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormProfileProps } from "./FormProfile.types";
import { formSchema } from "./FormProfile.form";
import Image from "next/image";
import { useState } from "react";
import { UploadButton } from "@/lib/uploadthing";
import { Upload } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export function FormProfile(props: FormProfileProps) {
  const router = useRouter();
  const { user } = props;
  const [showUploadPhoto, setShowUploadPhoto] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name || "",
      email: user.email || "",
      profileImage: user.profileImage || "",
      username: user.username || "",
      id: user.id,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch("/api/profile", values);
      toast({
        title: "Profile updated",
      });
      router.refresh();
      setShowUploadPhoto(false);
      setPhotoUploaded(false);
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="max-w-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="my-4">Profile Image</FormLabel>
                <FormControl>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={field.value || "/images/DefaultImageProfile.webp"}
                      alt="Image profile"
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                    <div className="flex flex-col items-center">
                    <div className="w-full">
                      {showUploadPhoto ? (
                        <UploadButton
                          className="rounded-md text-white bg-slate-800"
                          {...field}
                          endpoint="profileImage"
                          onClientUploadComplete={(res) => {
                            form.setValue("profileImage", res?.[0].url);
                            form.trigger("profileImage"); // ✅ Forzar actualización
                            setPhotoUploaded(true);
                          }}
                          onUploadError={(error: Error) => {
                            console.log(error);
                          }}
                        />
                      ) : (
                        <Button
                          type="button"
                          onClick={() => setShowUploadPhoto((prev) => !prev)}
                        >
                          <Upload className="mr-2 w-4 h-4" />
                          Change photo
                        </Button>
                      )}
                    </div>
                    {photoUploaded && (
                      <p className="text-sm text-center mt-2 text-slate-900 bg-green-600 px-2 py-1 rounded-md">Image Uploaded!</p>
                    )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input disabled {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="@yourusername" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
}
