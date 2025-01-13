import React from 'react'

export const Loaders = () => {
    return <div className="flex flex-col gap-8 items-center justify-start w-full min-h-screen bg-white">
        {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} />
        ))}
    </div>
}

function Skeleton() {
    return (
        <div className='flex flex-col gap-3 w-full' role="progressbar" >
            <div className='animate-pulse h-4 bg-gray-300 w-1/3' />
            <div className='animate-pulse h-4 bg-gray-300 w-2/4' />
            <div className='animate-pulse h-4 bg-gray-300 w-3/4' />
        </div>
    )
}

export default Skeleton
