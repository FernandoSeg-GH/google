"use client";
import React, { createContext, useContext, useReducer } from "react";
import type { SearchResponse } from "@/actions/data";

type Action =
    | { type: "SELECT_RESULT"; payload: SearchResponse }
    | { type: "CLEAR_SELECTED" }
    | { type: "SET_LOADING"; payload: boolean }
    | { type: "SET_QUERY"; payload: string };

interface State {
    selectedResult: SearchResponse | null;
    loading: boolean;
    query: string;
}

export const initialState: State = {
    selectedResult: null,
    loading: true,
    query: "",
};

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "SELECT_RESULT":
            return { ...state, selectedResult: action.payload };
        case "CLEAR_SELECTED":
            return { ...state, selectedResult: null };
        case "SET_LOADING":
            return { ...state, loading: action.payload };
        case "SET_QUERY":
            return { ...state, query: action.payload };
        default:
            return state;
    }
}

interface SearchContextProps {
    state: State;
    dispatch: React.Dispatch<Action>;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <SearchContext.Provider value={{ state, dispatch }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
};
