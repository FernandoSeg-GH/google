import Image from 'next/image'

type Props = {
    width?: number
}

const Logo = ({ width }: Props) => {
    return (
        <Image
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google"
            width={width ? width : 180}
            className='w-full max-w-[90%] 2xs:max-w-[200px] xs:max-w-[220px] md:max-w-[300px]'
            height={38}
            priority
        />
    )
}

export default Logo