"use client";
import React from "react";
import SearchBar from "./search-bar";
import Logo from "../logo";
import SearchButton from "./button";

const Search = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center gap-6">
            <Logo width={280} />
            <SearchBar />
            <SearchButton disabled={false} />
        </div>
    );
};

export default Search;
