"use client";
import React from "react";
import { useSearch } from "@/context";
import { useRouter } from "next/navigation";
import SearchBar from "../search-bar";
import Logo from "../logo";
import SearchButton from "./button";

const Home = () => {
    const { state, dispatch } = useSearch();
    const router = useRouter();

    const handleQueryChange = (newQuery: string) => {
        dispatch({ type: "SET_QUERY", payload: newQuery });
    };

    const handleSearch = (newQuery: string) => {
        dispatch({ type: "SET_LOADING", payload: true });
        dispatch({ type: "SET_QUERY", payload: newQuery });
        router.push(`/search?query=${encodeURIComponent(newQuery)}`);
        dispatch({ type: "SET_LOADING", payload: false });
    };

    return (
        <div className="flex flex-col w-full items-center justify-center gap-6">
            <Logo width={280} />
            <SearchBar
                initialQuery={state.query}
                onQueryChange={handleQueryChange}
                onSearch={handleSearch}
            />
            <SearchButton disabled={!state.query} />
        </div>
    );
};

export default Home;
