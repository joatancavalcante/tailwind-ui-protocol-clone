'use client';

import { usePathname } from 'next/navigation';

export default function PageTest(){

    const path = usePathname();

    return (
        <h1>Page Test {path}</h1>
    )
}