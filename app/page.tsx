import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Home from "@/components/ui/home";
import { Loaders } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-start w-screen h-screen bg-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full h-full grow gap-6">
        <Suspense fallback={<Loaders />}>
          <Home />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
