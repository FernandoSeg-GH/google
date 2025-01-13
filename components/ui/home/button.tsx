"use client";
import { useRouter } from "next/navigation";
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
            className={`px-4 py-3 rounded-md ${disabled || !state.query
                ? "bg-[#f8f9fa] text-[#e3e5e9] cursor-not-allowed"
                : "bg-[#f2f2f2] text-black font-medium hover:bg-[#e6e6e6]"
                }`}
            onClick={handleSearch}
            aria-disabled={disabled || !state.query}
            aria-label="Search"
        >
            Buscar
        </button>
    );
};

export default SearchButton;
