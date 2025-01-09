import SearchResults from '@/components/search'
import Card from '@/components/search/card'
import Navbar from '@/components/ui/navbar'
import React from 'react'

const SearchPage = () => {
    return (
        <div className="flex flex-col items-center justify-start w-screen min-h-screen bg-white">
            <Navbar searchable />
            <main className="px-4 py-4 sm:px-8 md:px-10 md:pt-6 lg:px-20 lg:pt-8 xl:px-40 grid grid-cols-[2fr_1fr] w-full h-full ">
                <SearchResults />
                <Card
                    imageUrl="/icons/user.png"
                    linkUrl="https://google.com"
                    title="Bonga shad"
                    description="Dolores soluta ea voluptates occaecati labore molestias tempore perferendis voluptas. Voluptas quam sunt explicabo debitis perferendis consequatur asperiores sit."
                />
            </main>
        </div>
    )
}

export default SearchPage
