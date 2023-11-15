
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { SetStateAction, Dispatch, ReactNode } from "react";

interface AlertType {
    load: boolean, 
    setLoad:   (load: boolean) => any,
    callback?: (confirm: boolean) => any,
    title?: string | ReactNode,
    content: string | ReactNode,
}
  
export default function Alert({ load, setLoad, callback, title="Are you absolutely sure?", content }: AlertType ) {

    const handleCallback = (confirm=false) => {

        setLoad(false);

        if(callback)
        callback(confirm);

    }

    return (
        <div className="font-size">
            <AlertDialog open={load}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle className="font-size">{title}</AlertDialogTitle>
                    <AlertDialogDescription className="font-size">
                        {content}
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => handleCallback()}>Cancel</AlertDialogCancel>
                    { callback && 
                        <AlertDialogAction onClick={() => handleCallback(true)}>Continue</AlertDialogAction>
                    }
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
  