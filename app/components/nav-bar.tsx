'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const pathname = usePathname();

    return (
        <>
            <nav className="border-b-2 border-black bg-gradient-to-l from-gray-400 to-blue-800 flex p-4">
                <ul className='flex space-x-4'>
                    <li className={pathname === '/' ?
                        'text-white bg-gray-900 px-3 py-2 rounded-md'
                        : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={pathname === '/decks' ?
                        'text-white bg-gray-900 px-3 py-2 rounded-md'
                        : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'}>
                        <Link href="/decks">Decks</Link>
                    </li>
                    <li className={pathname === '/cards' ?
                        'text-white bg-gray-900 px-3 py-2 rounded-md'
                        : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'}>
                        <Link href="/cards">Cards</Link>
                    </li>
                    <li className={pathname === '/settings' ?
                        'text-white bg-gray-900 px-3 py-2 rounded-md'
                        : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'}>
                        <Link href="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
