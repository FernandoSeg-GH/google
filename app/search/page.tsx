import { JSX, Suspense } from "react";
import Navbar from "@/components/ui/navbar";
import { Loaders } from "@/components/ui/skeleton";
import Footer from "@/components/ui/footer";
import SearchResults from "@/components/search/results";

export default async function SearchPage(): Promise<JSX.Element> {
    return (
        <div
            className="flex flex-col items-center justify-start w-screen min-h-screen bg-white"
            role="main"
            aria-label="Search page"
        >
            <Navbar searchPage />
            <main
                className={`p-4 md:pt-6 lg:pt-8 w-full h-full flex-grow`}
                aria-labelledby="search-main-title"
            >
                <h1 id="search-main-title" className="sr-only">
                    Search Page
                </h1>
                <section
                    className="w-full"
                    aria-label="Search results section"
                >
                    <Suspense fallback={<Loaders />}>
                        <SearchResults />
                    </Suspense>
                </section>
            </main>
            <Footer />
        </div>
    );
}
