import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import React, { ReactNode } from "react";

export default function Layout ({ children }: {children: ReactNode}) {
  return (
    <>
      <Navigation />
      
      {children}

      <Footer />

    </>
  )
}