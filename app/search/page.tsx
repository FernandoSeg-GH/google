import React from "react";
import Navbar from "@/components/ui/navbar";
import SearchResults from "@/components/search";
import { SelectedCardWrapper } from "@/components/search/card";

export default function SearchPage() {
    return (
        <div className="flex flex-col items-center justify-start w-full min-h-screen bg-white">
            <Navbar searchable />
            <main className="px-4 py-4 sm:px-8 md:px-10 md:pt-6 lg:px-20 lg:pt-8 xl:px-40 w-full h-full">
                <div className="flex gap-16">
                    <div className="w-full">
                        <SearchResults />
                    </div>
                    <div>
                        <SelectedCardWrapper />
                    </div>
                </div>
            </main>
        </div>
    );
}
