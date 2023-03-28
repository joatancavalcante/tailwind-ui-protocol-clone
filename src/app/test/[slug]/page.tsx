'use client';

import { usePathname } from 'next/navigation';

export default function PageTest(){

    const path = usePathname();

    return (
        <main className="ml-14 prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl">
         <h1>Page Test {path}</h1>
        </main>
    )
}