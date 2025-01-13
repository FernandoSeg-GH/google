"use client";
import { useSearch } from "@/context";
import Image from "next/image";
import React, { useRef } from "react";

interface CardProps {
    imageUrl: string;
    linkUrl: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({
    imageUrl,
    linkUrl,
    title,
    description,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { dispatch } = useSearch();

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50  lg:relative lg:bg-transparent "
            onClick={() => dispatch({ type: "CLEAR_SELECTED" })}
        >
            <div
                role="dialog"
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                ref={cardRef}
                className="bg-white p-4 rounded-lg min-w-[280px] max-w-sm shadow-md relative"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={imageUrl}
                    alt={title}
                    aria-labelledby="dialog-title"
                    aria-describedby="dialog-description"
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover"
                    priority
                />
                <div>
                    <a
                        href={linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black font-extralight text-sm hover:underline"
                    >
                        {linkUrl}
                    </a>
                    <h3 id="dialog-title" role="heading" className="text-lg font-semibold mt-2 text-gray-800">
                        {title}
                    </h3>
                    <p id="dialog-description" className="text-gray-600 text-sm mt-1">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
