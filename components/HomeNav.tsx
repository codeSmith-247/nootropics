"use client"
import { useState } from "react";

import { useRouter, usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { Btn, OutlineBtn } from "@/components/Button";
import { BsList, BsXLg } from "react-icons/bs";

import { signOut, useSession } from "next-auth/react";


export default function HomeNav() {
  const [ toggle, setToggle ] = useState<boolean>(false);

  const route = useRouter();

  const pathname = usePathname();

  const { status } = useSession();

  const links = [

    {
      name: "Home",
      link: "/",
      active: pathname == "/"
    },
  
    {
      name: "Products",
      link: "/products",
      active: pathname == "/products"
    },
  
    {
      name: "Community Stacks",
      link: "#",
      active: pathname == "/stacks"

    },
  
    {
      name: "Guide",
      link: "#",
      active: pathname == "/guide"

    },
  
  ];

  return (
    
      <div className="nav flex items-center justify-between borderb px-12 py-6 max-[800px]:px-6 max-[800px]:py-3">
        <div className="logo font-black text-2xl">
          <span className="text-purple-700">Noo</span>
          <span className="text-purple-700">tro</span>
          <span className="text-purple-700">pics</span>
        </div>

        <div className={`max-[1000px]:fixed max-[1000px]:h-screen max-[1000px]:w-screen top-0 backdrop-blur max-[1000px]:bg-black max-[1000px]:bg-opacity-50 z-40 ${toggle ? 'left-0' : '-left-[500vw]'}`}>
          <div className="flex items-center gap-6 max-[1000px]:bg-white max-[1000px]:max-w-[320px] max-[1000px]:flex-col h-full relative">
        
            <div className="links max-[1000px]:flex max-[1000px]:flex-col text-sm max-[1000px]:text-2xl gap-3 max-[1000px]:px-6 max-[1000px]:py-12 ">
              {links.map( (item, index) => 
                <Link key={index} href={item.link} className={` px-6 font-semibold hover:text-purple-700  ${ item.active ? "text-black" : "text-gray-600" } `}>{item.name}</Link> 
              )}
            </div>

            <div className="btns flex gap-3 max-[1000px]:flex-col max-[1000px]:w-full px-6">
                {status === "authenticated" ?
                  <>
                    <OutlineBtn extra="max-[1000px]:w-full" onClick={() => signOut()}>Log Out</OutlineBtn>
                    <Btn extra="max-[1000px]:w-full" onClick={() => route.push("/signup")}>Builder</Btn>
                  </> 
                  :
                  <>
                    <OutlineBtn extra="max-[1000px]:w-full" onClick={() => route.push("/login")}>Log In</OutlineBtn>
                    <Btn extra="max-[1000px]:w-full" onClick={() => route.push("/signup")}>Sign Up</Btn>
                  </>
                }
            </div>

            <div onClick={() => setToggle(!toggle)} className="hidden max-[1000px]:flex absolute top-2 right-2 scale-90 h-[30px] w-[30px] rounded border-2 items-center justify-center text-xl border-purple-700 text-purple-700 hover:text-red-400 hover:border-red-400">
              <BsXLg />
            </div>
          </div>

        </div>

        <div onClick={() => setToggle(!toggle)} className="hidden max-[1000px]:flex h-[40px] w-[40px] rounded shadow border-2 items-center justify-center text-2xl border-[#444] hover:border-purple-700 hover:text-purple-700 ">
            <BsList />
        </div>
      </div>
    
  )
}