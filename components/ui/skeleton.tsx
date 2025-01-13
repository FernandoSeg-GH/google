import React from 'react'

function Skeleton() {
    return (
        <div className='flex flex-col gap-3 w-full'>
            <div className='animate-pulse h-4 bg-gray-300 w-1/3' />
            <div className='animate-pulse h-4 bg-gray-300 w-2/4' />
            <div className='animate-pulse h-4 bg-gray-300 w-3/4' />
        </div>
    )
}

export default Skeleton