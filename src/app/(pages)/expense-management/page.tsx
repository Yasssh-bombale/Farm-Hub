"use client";

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
import { FaCircleUser } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  laborName: z
    .string({
      required_error: "Labor name is required",
    })
    .min(2)
    .max(50),
  imageUrl: z.string().optional(),
  imageFile: z.instanceof(File).optional(),
  // weight: z
  //   .number({
  //     required_error: "Weight is required",
  //   })
  //   .min(0),
  weight: z
    .string({
      required_error: "Weight is required",
    })
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
      message: "Weight must be a non-negative number",
    })
    .transform((val) => parseFloat(val)), // Transform string to number
});

const Expense = () => {
  const filePickerRef = useRef<HTMLInputElement>(null); // Type the ref
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   username: "",
    // },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="border flex">
      <div className="border rounded-md shadow-md px-5 py-5 max-w-lg w-full">
        {/* form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <div
              onClick={() => filePickerRef.current?.click()}
              className="size-24 bg-green-500 rounded-full self-center flex items-center justify-center cursor-pointer border border-green-500"
            >
              <FaCircleUser className="text-white size-full " />
              {/* <FaUserCircle className=" " /> */}
            </div>
            <FormField
              name="imageFile"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl className="hidden">
                    <Input
                      type="file"
                      accept={".jpg, .jpeg, .png"}
                      ref={filePickerRef}
                      onChange={(event) =>
                        field.onChange(
                          event.target.files ? event.target.files[0] : null
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage className="mt-7" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="laborName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Labor name</FormLabel>
                  <FormControl>
                    <Input placeholder="Add labor name" {...field} />
                  </FormControl>
                  <FormDescription>Enter your labor name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter weight"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Enter your labor name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Add labor
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Expense;
