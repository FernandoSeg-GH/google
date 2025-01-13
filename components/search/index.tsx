"use client";

import React, { Suspense } from "react";
import { Loaders } from "@/components/ui/skeleton";
import SearchResults from "./results";

export function SearchResultsWrapper() {
    return (
        <Suspense fallback={<Loaders />}>
            <SearchResults />
        </Suspense>
    );
}

export default SearchResultsWrapper;
