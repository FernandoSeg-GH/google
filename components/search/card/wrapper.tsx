"use client";

import { useSearch } from "@/context";
import Card from "./card";

export const SelectedCardWrapper = () => {
    const { state } = useSearch();
    const selectedResult = state.selectedResult;

    if (!selectedResult) return null;

    return (
        <Card
            imageUrl={selectedResult.image}
            linkUrl={selectedResult.url}
            title={selectedResult.title}
            description={selectedResult.description}
        />
    );
};

export default SelectedCardWrapper;
