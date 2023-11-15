"use client"
import { useState } from "react";
import Image from "next/image";
import { BsCart3, BsFilter, BsSearch } from "react-icons/bs";

import HomeNav      from "@/components/HomeNav";
import SideScroll   from "@/components/SideScroll";
import { Input }    from "@/components/ui/input";
import { ComboBox } from "@/components/ComboBox";

import Categories from "./components/Categories";
import SidePanel  from "./components/SidePanel";
import { OutlineBtn } from "@/components/Button";

export default function Products() {

    const [ sideMenu, setSideMenu ] = useState<boolean>(false);

    return (
        <section>

            <HomeNav />

            <div className="border-b"></div>

            <Categories />

            <div className="flex min-h-screen px-12 max-[800px]:px-0 relative">

                <SidePanel active={sideMenu} setActive={setSideMenu} />

                <div className="w-full px-6">
                    <div className="flex gap-3 w-full">
                        <div className="search-box flex flex-grow items-center gap-1.5 w-full">
                            <div onClick={() => setSideMenu(!sideMenu)} className="hidden max-[1000px]:flex items-center justify-center text-xl border rounded h-[40px] w-[40px]">
                                <BsFilter />
                            </div>
                            <Input placeholder="Type your search here..." className="focus-visible:ring-purple-600 w-full text-lg h-[40px]"/>
                            <div className="search bg-purple-600 hover:bg-purple-700 active:bg-black h-[40px] w-[40px] flex items-center justify-center font-bold text-white rounded-md">
                                <BsSearch />
                            </div>
                        </div>
                    </div>

                    <div className=" grid-box-fill double flex-wrap gap-3 py-6">
                        {Array.from({length: 10}, (item, index) => 
                            <div key={index} className="border rounded overflow-hidden hover:scale-100 scale-95 group">
                                <div className="h-[250px] max-[500px]:h-[170px] w-full rounded overflow-hidden relative">
                                    <Image
                                        src="/images/bottle.webp"
                                        className="object-contain"
                                        alt="nootropics"
                                        fill
                                    />
                                </div>
                                <div className="p-3">
                                    <div className="title text-sm font-semibold">This is the product name</div>
                                    <div className="">
                                        <span>$</span>
                                        <span>500</span>
                                    </div>
                                </div>
                                <button className="flex items-center justify-center group-hover:text-white group-hover:bg-purple-700 group-active:bg-black w-full h-[40px] gap-3 border-t text-xs font-semibold ">
                                    <div className="icon text-xl">
                                        <BsCart3 />
                                    </div>
                                    <div className="">Add To Cart</div>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

            </div>

        </section>
    );
}