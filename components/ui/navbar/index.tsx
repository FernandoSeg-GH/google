"use client"
import React from 'react'
import { Menu } from './menu'
import User from './user'
import Logo from '../logo'
import Link from 'next/link'
import SearchBar from '../search/search-bar'

type NavbarProps = {
      searchable?: boolean
}
const Navbar = ({ searchable }: NavbarProps) => {
      return (
            <nav className='w-full flex items-center justify-between p-4 shadow text-black'>
                  {searchable ? (
                        <div className='flex items-center gap-6 w-full'>
                              <Link href="/">
                                    <Logo width={120} />
                              </Link>
                              <SearchBar searchedTerm />
                        </div>
                  ) : (
                        <div className='flex items-center gap-2'>
                              <h1 className='font-bold'>Agile Content</h1>
                              <h2>Frontend test</h2>
                        </div>
                  )}
                  <div className='flex items-center gap-4'>
                        <Menu />
                        <User />
                  </div>
            </nav>
      )
}

export default Navbar

