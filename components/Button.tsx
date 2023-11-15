
import { ReactNode } from "react";
import { Button, ButtonProps } from "@/components/ui/button";


export const Btn = ({ children, extra="", ...props }: { children: string | ReactNode, extra?: string } & ButtonProps ) => {
    return (
        <Button className={`rounded bg-purple-700 text-white border-2 border-purple-700 hover:bg-purple-800 hover:text-white active:bg-[#111] active:border-[#111] font-bold ${extra}`} {...props}> { children } </Button>
    );
}

export const OutlineBtn = ({ children, extra="", ...props }: { children: string | ReactNode, extra?: string } & ButtonProps ) => {
    return (
        <Btn variant={"outline"} className={`rounded hover:bg-purple-700 hover:text-white border-2 border-purple-700 text-purple-800 font-bold active:bg-[#111] active:border-[#111] ${extra}`} {...props}> { children } </Btn>
    );
}