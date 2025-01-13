export const Loaders = () => {
    return <div className="flex flex-col gap-8 items-center justify-start w-full h-full bg-white">
        {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} />
        ))}
    </div>
}

function Skeleton() {
    return (
        <div className='loader flex flex-col gap-3 w-full' role="progressbar" asia-busy="true">
            <div className='animate-pulse h-4 bg-gray-300 w-1/3' />
            <div className='animate-pulse h-4 bg-gray-300 w-2/4' />
            <div className='animate-pulse h-4 bg-gray-300 w-3/4' />
        </div>
    )
}

export default Skeleton
