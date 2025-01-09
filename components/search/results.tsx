import React from 'react';
import Result from './result';
import Fallback from './fallback';

const SearchResults = () => {
    const results = [
        {
            title: 'Bonga shad',
            url: 'https://allene.org',
            description: 'Example description...Example description...Example description...Example description...Example description...',
        },
        {
            title: 'Another result',
            url: 'https://example.com',
            description: 'Example description...',
        },
    ];

    return (
        <div>
            {results.length === 0 ? (
                <Fallback
                    searchTerm="xxx"
                />
            ) : (
                results.map((result, index) => (
                    <Result
                        key={index}
                        title={result.title}
                        url={result.url}
                        description={result.description}
                    />
                ))
            )}
        </div>
    );
};

export default SearchResults;
