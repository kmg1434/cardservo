'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const pathname = usePathname();

    return (
        <div>
            <nav className="bg-gradient-to-b from-yellow-400 to-red-400 flex p-4">
                <ul className='flex space-x-4'>
                    <li className={pathname === '/' ?
                        'text-white bg-gray-900 px-3 py-2 rounded-md'
                        : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={pathname === '/deck' ?
                        'text-white bg-gray-900 px-3 py-2 rounded-md'
                        : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'}>
                        <Link href="/deck">Decks</Link>
                    </li>
                    <li className={pathname === '/card' ?
                        'text-white bg-gray-900 px-3 py-2 rounded-md'
                        : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'}>
                        <Link href="/card">Cards</Link>
                    </li>
                    <li className={pathname === '/settings' ?
                        'text-white bg-gray-900 px-3 py-2 rounded-md'
                        : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'}>
                        <Link href="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
