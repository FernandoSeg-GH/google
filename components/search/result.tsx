"use client";
import React from 'react';
import { useSearch } from '@/context';
import type { SearchResponse } from '@/actions/data';

type Props = {
    result: SearchResponse;
};

const Result = ({ result }: Props) => {
    const { dispatch } = useSearch();

    const handleClick = () => {
        dispatch({ type: 'SELECT_RESULT', payload: result });
    };

    return (
        <div className="mb-4 cursor-pointer" onClick={handleClick}>
            <span className="block text-gray-500 text-sm">{result.url}</span>
            <h3 className="text-lg font-medium text-blue-600 hover:underline">{result.title}</h3>
            <p className="mt-2 text-gray-700">{result.description}</p>
        </div>
    );
};

export default Result;
