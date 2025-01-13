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
        <article
            role="article"
            aria-label={`${result.title} - ${result.description}`}
            tabIndex={0}
            id={`result-${result.id}`}
            className="mb-4 cursor-pointer w-full"
            onClick={handleClick}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleClick();
            }}
        >
            <a
                id={`result-url-${result.id}`}
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-500 text-sm hover:underline"
            >
                {result.url}
            </a>
            <h3
                id={`result-title-${result.id}`}
                className="text-lg font-medium text-blue-600 hover:underline"
            >
                {result.title}
            </h3>
            <p id={`result-description-${result.id}`} className="mt-2 text-gray-700">
                {result.description}
            </p>
        </article>
    );
};

export default Result;
