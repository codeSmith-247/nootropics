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

import { Loader2 } from 'lucide-react';

export default function Loading({ load }: { load: boolean }) {

    const Icons = {
        spinner: Loader2,
    };

    return (
      <AlertDialog open={load}>
        <AlertDialogTrigger asChild>
          <span className="h-0 w-0 opacity-0"></span>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="text-center flex flex-col items-center justify-center gap-6">
                <AlertDialogTitle>Loading...</AlertDialogTitle>
                <Icons.spinner className="animate-spin text-center text-5xl" />
            </div>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    )
}
  