import Image from 'next/image'
import React from 'react'

const User = () => {
      return (
            <Image
                  src="/icons/user.png"
                  alt="Google"
                  className='rounded-full cursor-pointer'
                  width={25}
                  height={25}
                  priority
            />
      )
}

export default User