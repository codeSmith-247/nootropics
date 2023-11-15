"use client"
import React, { useState, ReactNode } from 'react'

import { useRouter } from "next/navigation";

import Image from "next/image";
import Link  from "next/link";

import { BsHouse, BsEye, BsEyeSlash } from 'react-icons/bs';

import { Btn } from "@/components/Button";
import Loading from "@/components/Loading";
import Alert   from "@/components/Alert";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
}                   from "@/components/ui/form";
import { Input }    from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm }     from "react-hook-form"
import * as z          from "zod"

 
const formSchema = z.object({
  firstName: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),

  lastName: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),

  username: z.string().min(3, {
    message: "Username must be at least 3 characters."
  }),

  email: z.string().email(),

  password: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),

  terms: z.boolean({
    required_error: "This field is required"
  }),
  
})

export default function SignUp () {
    const route = useRouter().push;

    const [ password, setPassword ] = useState<boolean>(false)

    const [ load, setLoad ] = useState<boolean>(false);

    const [ alert, setAlert ] = useState<{
        title: string | ReactNode,
        content: string | ReactNode,
        load: boolean
    }>({
        title: "",
        content: "",
        load: false
    });


    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstName: "",
          lastName: "",
        },
    })
     
    // 2. Define a submit handler.
    async function onSubmit (values: z.infer<typeof formSchema>)  {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // console.log(values)

        setLoad(true);

        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(values)
        });

        if(response.ok) {
            const json = await response.json();
            console.log(json, load);
        }

        else {
            const error = await response.text();

            setAlert({
                title: "Sign Up Error",
                content: error,
                load: true,
            });

        }


        setLoad(false);

    }

    return (
        <section className="flex h-screen">

            <Loading load={load}/>

            <Alert setLoad={(load) => setAlert({...alert, load})}  {...alert}/>

            <div className="max-w-[500px] max-[600px]:max-w-[600px] w-full p-12 overflow-y-scroll">
                <h1 className="font-bold text-5xl">Sign Up</h1>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3  my-3">
                        <div className="grid grid-cols-2 gap-3 max-[450px]:grid-cols-1">

                            <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">First Name</FormLabel>
                                <FormControl>
                                    <Input className=" focus-visible:ring-purple-600" placeholder="James" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />

                            <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">Last Name</FormLabel>
                                <FormControl>
                                    <Input className=" focus-visible:ring-purple-600" placeholder="Bond" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />

                        </div>

                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">Username</FormLabel>
                                <FormControl>
                                    <Input className=" focus-visible:ring-purple-600" placeholder="" {...field} />
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
                                <FormLabel className="">Email</FormLabel>
                                <FormControl>
                                    <Input className=" focus-visible:ring-purple-600" placeholder="" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input className=" focus-visible:ring-purple-600" type={ password ? "password" : "text"} placeholder="" {...field} />
                                        <div className="btn absolute border top-0 right-0 h-full w-[50px] rounded-md scale-90 flex items-center justify-center" onClick={() => setPassword(!password)}>
                                            {password && 
                                                <BsEye />
                                            }

                                            {!password && 
                                                <BsEyeSlash />
                                            }
                                        </div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            
                        />

                        <FormField
                            
                            control={form.control}
                            name="terms"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox  
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            id="terms"
                                            // required
                                        />
                                        <label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Accept terms and conditions
                                        </label>
                                    </div>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="mb-6"></div>
                        <Btn type="submit" extra={"w-full mt-6"}>Submit</Btn>

                        <div className="font-semibold text-center mx-auto ">Already have an account <Link href="/login" className="text-purple-600 underline">Log In</Link></div>

                    </form>
                </Form>
            </div>

            <div className="flex-grow max-[600px]:hidden relative">
                <div className="relative z-10 p-12 max-[920px]:p-6">
                    <div onClick={() => route("/")} className="h-[40px] w-[40px] rounded bg-white hover:bg-purple-600 hover:text-white text-2xl flex items-center justify-center">
                        <BsHouse />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 z-10 p-12 max-[920px]:p-6 backdrop-blur max-[820px]:h-full max-[820px]:bottom-0 max-[820px]:text-transparent text-white">
                    <div className="font-bold text-3xl capitalize mb-6 max-w-[380px]">Something Really cool about Nootropics</div>
                    <p className="">some cool description of the title above Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione voluptatibus at voluptatem dolor temporibus. Dolorem itaque ut beatae quam voluptatibus.</p>
                </div>
                <div className="absolute top-0 left-0 h-full w-full z-0">
                    <Image
                        src={"/images/brain.jpg"}
                        className="object-cover"
                        alt="nootropics"
                        fill
                    />
                </div>
            </div>
        </section>
    );
}