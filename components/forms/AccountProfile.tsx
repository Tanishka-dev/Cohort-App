"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { UserVaildations } from "@/lib/validations/user";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { ChangeEvent } from "react";
import { Textarea } from "../ui/textarea";

interface Props {
  user: {
    id: string | undefined;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnType: string;
}

const AccountProfile = ({ user, btnType }: Props) => {
  const form = useForm({
    resolver: zodResolver(UserVaildations),
    defaultValues: {
      profile_photo: "",
      name: "",
      username: "",
      bio: "",
    },
  });

  function onSubmit(values: z.infer<typeof UserVaildations>) {
    console.log(values);
  }
  const handleChange = (
    e: ChangeEvent,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10 "
      >
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="account-form_image-label">
                {field.value ? (
                  <Image
                    alt="profile photo"
                    src={field.value}
                    width={80}
                    height={80}
                    priority
                    className="rounded-full object-contain"
                  />
                ) : (
                  <Image
                    alt="profile photo"
                    src="/assets/profile.svg"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                )}
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-gray-200">
                <Input
                  placeholder="Upload Profile Photo"
                  accept="image/*"
                  type="file"
                  className="account-form_image-input"
                  onChange={(e) => handleChange(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3 w-full">
              <FormLabel className="text-base-semibod text-light-2">
                Name
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-gray-200">
                <Input
                  placeholder="Your name"
                  type="text"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3 w-full">
              <FormLabel className="text-base-semibod text-light-2">
                UserName
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-gray-200">
                <Input
                  placeholder="Your username"
                  type="text"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3 w-full">
              <FormLabel className="text-base-semibod text-light-2">
                Bio
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-gray-200">
                <Textarea
                  placeholder="Your bio"
                  rows={10}
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AccountProfile;
