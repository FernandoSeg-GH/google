"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Skeleton from "../ui/skeleton";
import Result from "./result";
import Fallback from "./fallback";
import { useSearch } from "@/context";
import { getFakeData, SearchResponse } from "@/actions/data";

export const Loaders = () => {
    return <div className="flex flex-col gap-8 items-center justify-start w-full min-h-screen bg-white">
        {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} />
        ))}
    </div>
}

const SearchResults: React.FC = () => {
    const { state, dispatch } = useSearch();
    const { loading } = state;

    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";

    const [results, setResults] = useState<SearchResponse[] | null>(null);

    useEffect(() => {
        if (query.trim() === "") {
            dispatch({ type: "SET_LOADING", payload: false });
            setResults(null);
            dispatch({ type: "CLEAR_SELECTED" });
            return;
        }

        dispatch({ type: "SET_LOADING", payload: true });
        dispatch({ type: "CLEAR_SELECTED" });

        getFakeData(query).then((data) => {
            setResults(data);

            const timer = setTimeout(() => {
                dispatch({ type: "SET_LOADING", payload: false });
            }, 2000);

            return () => clearTimeout(timer);
        });
    }, [query, dispatch]);

    useEffect(() => {
        return () => {
            dispatch({ type: "CLEAR_SELECTED" });
        };
    }, [dispatch]);

    if (query.trim() === "") {
        return (
            <div className="w-full flex items-start gap-16">
                <div className="col-span-3 lg:col-span-2 w-full">
                    <Fallback />
                </div>
            </div>
        );
    }

    if (loading) {
        return <Loaders />
    }

    return (
        <div className="w-full flex items-start gap-16">
            <div className="col-span-3 lg:col-span-2 w-full">
                {results && results.length > 0 ? (
                    results.map((result) => <Result key={result.id} result={result} />)
                ) : (
                    <Fallback searchTerm={query} />
                )}
            </div>
        </div>
    );
};

export default SearchResults;
