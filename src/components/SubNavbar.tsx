"use client";
import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from "next-auth/react";

const SubNavbar = () => {
    const {data: session}: any = useSession();
    return (
    <div className='bg-orange-500'>
        <ul className='p-3 items-center shadow-md text-white'>
            {!session ? (
                <>
                    <div className='flex justify-around'>
                        <Link href="#aboutContainer">
                            <li>About</li>
                        </Link>
                        <Link href="#suitesContainer">
                            <li>Room Suites</li>
                        </Link>
                        <Link href="/dining">
                            <li>Dining</li>
                        </Link>
                        <Link href="/gallery">
                            <li>Gallery</li>
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    {session.user?.email}
                    <li>
                        <button onClick={() => {
                            signOut();
                        }}
                        className='p-2 px-5 mt-1, bg-blue-800 rounded-full'
                        >
                            Logout
                        </button>
                    </li>
                </>
            )}
        </ul>
    </div>
  )
}

export default SubNavbar