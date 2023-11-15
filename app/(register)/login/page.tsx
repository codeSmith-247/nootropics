"use client"
import React, { useState, ReactNode, useEffect } from 'react'

import Image from "next/image";
import Link  from "next/link";

import { useRouter, useSearchParams } from "next/navigation";
import { signIn }               from 'next-auth/react';

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
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm }     from "react-hook-form"
import * as z          from "zod"

 
const formSchema = z.object({

  username: z.string().min(3, {
    message: "Username must be at least 3 characters."
  }),

  password: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  
})

export default function SignUp () {
    const route = useRouter().push;

    const [ password, setPassword ] = useState<boolean>(false)

    const [ load, setLoad ] = useState<boolean>(false);

    const [ alert, setAlert ] = useState<{
        title: string | ReactNode,
        content: string | ReactNode,
        load: boolean,
        callback?: (confirmed: boolean) => any
    }>({
        title: "",
        content: "",
        load: false,
    });


    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {},
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

    const params = useSearchParams();
    const error = params.get("error");

    useEffect( () => {

        console.log(error, "params");
    
        if(error) {
            
            if(["OAuthCreateAccount", "EmailCreateAccount"].indexOf(error) > -1) {

                setAlert({
                    title: "Account Does Not Exists",
                    content: "Please click \"Continue\" to create and account now",
                    load: true,
                    callback (confirmed: boolean) {
                        if(confirmed)
                        route("/signup");
                    }
                });
                
            }

            else if(["OAuthAccountNotLinked"].indexOf(error) > -1) {

                setAlert({
                    title: "Use The Same Method",
                    content: "Please use a different method or provide your credentials to log in",
                    load: true,
                });
                
            }

            else /*(["OAuthSignin", "OAuthCallback", "Callback", "Default"].indexOf(error) > -1)*/ {

                setAlert({
                    title: "Network Error",
                    content: "Please try again later",
                    load: true
                });

            }
        }

    }, [error])
    




    return (
        <section className="flex h-screen">

            <Loading load={load}/>

            <Alert setLoad={(load) => setAlert({...alert, load})}  {...alert}/>

            <div className="max-w-[500px] max-[600px]:max-w-[600px] w-full p-12 max-[400px]:p-6 overflow-y-scroll">
                <h1 className="font-bold text-4xl text-center mb-6">Welcome Back</h1>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3  my-3">
                        

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
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">Password</FormLabel>
                                <FormControl>
                                    <>
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
                                    <Link href="/signup" className="text-purple-600 mt-3 text-xs font-semibold underline">Forgot Password</Link>
                                    </>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            
                        />

                        <div className="mb-6"></div>
                        <Btn type="submit" extra={"w-full mt-6"}>Submit</Btn>

                        <div className="font-semibold text-center mx-auto ">Dont have an account <Link href="/signup" className="text-purple-600 underline">Sign Up</Link></div>

                        <div className="mb-6"></div>
                        <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center border mx-auto">
                            or
                        </div>
                        <div className="mb-6"></div>
                        <div className="">
                            <div onClick={() => signIn("google", { callbackUrl: "/products"})} className="flex items-center bg-[#DB4437] hover:bg-red-600 active:bg-red-700 p-0.5 rounded mb-3">
                                <div className="icon relative h-[40px] w-[40px] bg-white p-1.5 overflow-hidden rounded">
                                    <Image
                                        src={"/images/google.png"}
                                        className="object-cover"
                                        alt="nootropics"
                                        height={'30'}
                                        width={'30'}
                                    />
                                </div>
                                <div className="text whitespace-nowrap px-3 text-center flex-grow text-white font-semibold"> Continue with Google</div>
                            </div>

                            <div onClick={() => signIn("facebook", { callbackUrl: "/products"})}  className="flex items-center bg-[#1877F2] hover:bg-blue-600 active:bg-blue-700 p-0.5 rounded">
                                <div className="icon relative h-[40px] w-[40px] bg-white overflow-hidden rounded">
                                    <Image
                                        src={"/images/facebook.webp"}
                                        className="object-cover"
                                        alt="nootropics"
                                        height={'40'}
                                        width={'40'}
                                    />
                                </div>
                                <div className="text whitespace-nowrap px-3 text-center flex-grow text-white font-semibold"> Continue with Facebook</div>
                            </div>
                        </div>

                    </form>
                </Form>
            </div>

            <div className="flex-grow  relative max-[600px]:hidden">
                <div className="relative z-10 p-12 max-[920px]:p-6">
                    <div onClick={() => route("/")} className="h-[40px] w-[40px] rounded bg-white hover:bg-purple-600 hover:text-white text-2xl flex items-center justify-center">
                        <BsHouse />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 z-10 p-12 max-[920px]:p-6 backdrop-blur max-[820px]:h-full max-[820px]:bottom-0 max-[820px]:text-transparent  text-white">
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