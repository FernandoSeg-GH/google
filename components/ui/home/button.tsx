"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useSearch } from "@/context";

type Props = {
    disabled?: boolean;
};

const SearchButton = ({ disabled }: Props) => {
    const { state } = useSearch();
    const router = useRouter();

    const handleSearch = () => {
        if (state.query) {
            router.push(`/search?query=${encodeURIComponent(state.query)}`);
        }
    };

    return (
        <button
            disabled={disabled || !state.query}
            className={`px-4 py-3 rounded-md ${disabled ? "bg-[#f8f9fa] text-[#e3e5e9]" : "bg-[#f2f2f2] text-black font-medium"
                }`}
            onClick={handleSearch}
        >
            Buscar
        </button>
    );
};

export default SearchButton;
