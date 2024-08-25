"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

function Header() {
    const path=usePathname()
    const router=useRouter();
    const {user}=useUser()
  return (
    <div className='flex items-center justify-between p-4 bg-secondary shadow-sm'>
        <Image src={'/logo.svg'} width={160} height={100} alt='logo' />
        <ul className='flex gap-6'>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path=='/dashboard'&&'text-primary font-bold'}`} onClick={()=>router.push('/dashboard')}>Dashboard</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path=='/dashboard/questions'&&'text-primary font-bold'}`}>Questions</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path=='/dashboard/upgrade'&&'text-primary font-bold'}`}>Upgrade</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path=='/dashboard/how'&&'text-primary font-bold'}`}>How it works?</li>
        </ul>
        {user&&<UserButton/>}
    </div>
  )
}

export default Header