"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearch } from "@/context";

type SearchBarProps = {
    initialQuery: string;
    onQueryChange: (newQuery: string) => void;
    onSearch: (newQuery: string) => void;
};

const SearchBar = ({ initialQuery, onQueryChange, onSearch }: SearchBarProps) => {
    const [localQuery, setLocalQuery] = useState(initialQuery);
    const router = useRouter();

    const { dispatch } = useSearch();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const query = searchParams.get("query");
        if (query) {
            setLocalQuery(query);
            onQueryChange(query);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setLocalQuery(initialQuery);
    }, [initialQuery]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedQuery = e.target.value;
        setLocalQuery(updatedQuery);
        onQueryChange(updatedQuery);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (localQuery.trim() === "") {
                console.log("Empty query, displaying fallback");
                return;
            }
            onSearch(localQuery.trim());
            router.push(`/search?query=${encodeURIComponent(localQuery.trim())}`);
        }
    };

    const clearInput = () => {
        setLocalQuery("");
        onQueryChange("");

        dispatch({ type: "SET_QUERY", payload: "" });
    };

    return (
        <div
            className="border rounded-full w-full max-w-[90%] md:max-w-md flex items-center pl-3 focus-within:ring-2 focus-within:ring-blue-500"
            role="search"
            aria-label="Search bar"
        >
            <Image
                src="/icons/search.svg"
                alt="Search icon"
                width={25}
                height={25}
                priority
            />
            <input
                className="rounded-full py-2 pr-4 pl-2 text-black outline-none flex-1"
                placeholder="Search..."
                value={localQuery}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                aria-label="Search input"
                role="textbox"
            />
            {localQuery && (
                <button
                    onClick={clearInput}
                    className="px-2 py-1 text-gray-500 hover:text-black"
                    aria-label="Clear search input"
                >
                    <span aria-hidden="true">✕</span>
                </button>
            )}
        </div>
    );
};

export default SearchBar;
