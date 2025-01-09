"use client";
import Image from "next/image";
import React from "react";

const SearchBar = () => {
    return (
        <div className="border rounded-full w-full max-w-md flex items-center pl-3 focus-within:ring-2 focus-within:ring-blue-500">
            <Image
                src="/icons/search.svg"
                alt="Search"
                width={25}
                height={25}
                priority
            />
            <input
                className="rounded-full py-2 pr-4 pl-2 text-black outline-none flex-1"
                placeholder="Search..."
                onChange={() => { }}
            />
        </div>
    );
};

export default SearchBar;
