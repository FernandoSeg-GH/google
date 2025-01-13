"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSearch } from "@/context";
import { getFakeData, SearchResponse } from "@/actions/data";
import Fallback from "../fallback";
import Result from "./result/result";
import { Loaders } from "@/components/ui/skeleton";

const SearchResults: React.FC = () => {
    const { state, dispatch } = useSearch();
    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";

    const [results, setResults] = useState<SearchResponse[] | null>(null);

    useEffect(() => {
        if (!query) {
            dispatch({ type: "SET_QUERY", payload: "" });
            dispatch({ type: "SET_LOADING", payload: false });
            dispatch({ type: "CLEAR_SELECTED" });
            setResults(null);
            return;
        }

        const fetchResults = async () => {
            dispatch({ type: "SET_LOADING", payload: true });
            const data = await getFakeData(query);
            setResults(data);
            dispatch({ type: "SET_LOADING", payload: false });
        };

        fetchResults();

        return () => {
            setResults(null);
            dispatch({ type: "CLEAR_SELECTED" });
        };
    }, [query, dispatch]);

    if (!query) {
        return <Fallback />;
    }
    if (state.loading) {
        return <Loaders />;
    }

    return (
        <div className="flex flex-col w-full">
            {results && results.length > 0 ? (
                results.map((result) => <Result key={result.id} result={result} />)
            ) : (
                <Fallback searchTerm={query} />
            )}
        </div>
    );
};

export default SearchResults;
