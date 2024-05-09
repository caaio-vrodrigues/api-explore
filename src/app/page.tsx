'use client';
import { APICompTest } from "@/components/api-comp-test/APICompTest";

export default function Home() {
  return (
    <main>
      <div className={`flex flex-col justify-center items-center mt-10 bg-green-900`}>
        <h1>Hello World!</h1>

        <h1>APIExplore</h1>

        <APICompTest/>
      </div>
    </main>
  );
};
