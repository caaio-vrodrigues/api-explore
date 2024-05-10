'use client';

//components
import { Menu } from "@/components/menu/Menu";
import { Main } from "@/components/main/Main";

export default function Home() {
  return (
    <>
      <Menu/>
      <div className={`wrapMainFooter flex flex-col`}>
        <Main/>
        <footer className={`mt-auto`}><h1>Footer here!</h1></footer>
      </div>
    </>
  );
};
