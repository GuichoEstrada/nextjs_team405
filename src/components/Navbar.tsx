"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const {data: session}: any = useSession();
    return (
    <div>
        <ul className='flex justify-around p-3 items-center shadow-md'>
            <div>
                <Link href="/">
                    <Image className="w-20 h-20" src="/static/logo.png" alt="" width={384} height={512} />
                </Link>
            </div>
            <div className='flex gap-10'>
                <Link href="/dashboard">
                    <li>Dashboard</li>
                </Link>
                <p> | </p>
                {!session ? (
                    <>
                        <Link href="/login">
                            <li>Login</li>
                        </Link>
                        <p> | </p>
                        <Link href="/register">
                            <li>Register</li>
                        </Link>
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
            </div>
        </ul>
    </div>
  )
}

export default Navbar