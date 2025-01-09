import React from 'react';

export enum SuggestionsEnum {
    INSECT = 'insect',
    FISH = 'fish',
    HORSE = 'horse',
    CROCODILIA = 'crocodilia',
    BEAR = 'bear',
    CETACEAN = 'cetacean',
    COW = 'cow',
    LION = 'lion',
    RABBIT = 'rabbit',
    CAT = 'cat',
    SNAKE = 'snake',
    DOG = 'dog',
    BIRD = 'bird',
}

type Props = {
    searchTerm?: string;
};

const Fallback: React.FC<Props> = ({ searchTerm }) => {

    const suggestions = Object.keys(SuggestionsEnum) as Array<keyof typeof SuggestionsEnum>;

    return (
        <div className="">
            {searchTerm ? (
                <div>
                    <p className="text-gray-700">
                        No results found for <span className="font-semibold">&apos;{searchTerm}&apos;</span>.
                    </p>
                    <p className="mt-2 text-gray-600">
                        Try looking for:{' '}
                        {suggestions.map((suggestion, index) => (
                            <span key={index}>
                                <span className="font-semibold">{SuggestionsEnum[suggestion]}</span>
                                {index < suggestions.length - 1 && ', '}
                            </span>
                        ))}
                    </p>
                </div>
            ) : (
                <div>
                    <p className="text-gray-700">
                        Start your search by exploring the following options:
                    </p>
                    <p className="mt-2 text-gray-600">
                        {suggestions.map((suggestion, index) => (
                            <span key={index}>
                                <span className="font-semibold">{SuggestionsEnum[suggestion]}</span>
                                {index < suggestions.length - 1 && ', '}
                            </span>
                        ))}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Fallback;
