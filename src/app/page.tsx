'use client';

//components
import { Menu } from "@/components/menu/Menu";
import { Main } from "@/components/main/Main";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Menu/>
      <div className={`wrapMainFooter flex flex-col`}>
        <Main/>
        <Footer/>
      </div>
    </>
  );
};
