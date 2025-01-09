import Image from 'next/image'
import React from 'react'

type Props = {
    width?: number
}

const Logo = ({ width }: Props) => {
    return (
        <Image
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google"
            width={width ? width : 180}
            height={38}
            priority
        />
    )
}

export default Logo