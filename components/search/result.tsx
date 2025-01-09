import React from 'react';

type Props = {
    title: string;
    url: string;
    description: string;
};

const Result = ({ title, url, description }: Props) => {
    return (
        <div className="mb-4">
            <span className="block text-gray-500 text-sm">{url}</span>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
            >
                <h3 className="text-lg font-medium">{title}</h3>
            </a>
            <p className="mt-2 text-gray-700">{description}</p>
        </div>
    );
};

export default Result;
