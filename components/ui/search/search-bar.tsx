"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSearch } from "@/context";

type SearchBarProps = {
    searchedTerm?: boolean;
};

const SearchBar = ({ searchedTerm }: SearchBarProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialQuery = searchParams?.get("query") || "";
    const [query, setQuery] = useState<string>(searchedTerm ? initialQuery : "");
    const { dispatch } = useSearch();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            dispatch({ type: "SET_LOADING", payload: true });
            dispatch({ type: "SET_QUERY", payload: query });
            router.push(`/search?query=${encodeURIComponent(query)}`);
        }
    };

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
                value={query}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default SearchBar;
