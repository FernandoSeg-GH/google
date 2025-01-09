import React from 'react'
import { Menu } from './menu'
import User from './user'


const Navbar = () => {
      return (
            <nav className='w-full flex items-center justify-between p-4 shadow text-black'>
                  <div className='flex items-center gap-2'>
                        <h1 className='font-bold'>Agile Content</h1>
                        <h2>Frontend test</h2>
                  </div>
                  <div className='flex items-center gap-4'>
                        <Menu />
                        <User />
                  </div>
            </nav>
      )
}

export default Navbar

