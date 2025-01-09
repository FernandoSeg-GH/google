import Image from 'next/image';
import React from 'react';

interface CardProps {
    imageUrl: string;
    linkUrl: string;
    title: string;
    description: string;
}

const Card = ({ imageUrl, linkUrl, title, description }: CardProps) => {
    return (
        <div className="border rounded-lg overflow-hidden max-w-sm p-4">
            <Image
                src={imageUrl}
                alt={title}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
                priority
            />
            <div className="">
                <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-extralight text-sm hover:underline"
                >
                    {linkUrl}
                </a>
                <h3 className="text-lg font-semibold mt-2 text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm mt-1">{description}</p>
            </div>
        </div>
    );
};

export default Card;
