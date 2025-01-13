import React, { JSX, Suspense } from "react";
import Navbar from "@/components/ui/navbar";
import SearchResultsWrapper from "@/components/search";
import SelectedCardWrapper from "@/components/search/card";
import { Loaders } from "@/components/ui/skeleton";

export default async function SearchPage(): Promise<JSX.Element> {
    return (
        <div className="flex flex-col items-center justify-start w-screen min-h-screen bg-white">
            <Navbar searchable />
            <main className="px-4 py-4 md:pt-6 lg:pt-8 w-full h-full flex gap-16 flex-row items-start justify-start 2xl:max-w-[90%]">
                <div className="w-full">
                    <Suspense fallback={<Loaders />}>
                        <SearchResultsWrapper />
                    </Suspense>
                </div>
                <div className="">
                    <SelectedCardWrapper />
                </div>
            </main>
        </div>
    );
}
