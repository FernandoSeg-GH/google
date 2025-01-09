import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Search from "@/components/ui/search";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-screen h-screen bg-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full h-full grow gap-6">
        <Search />
      </main>
      <Footer />
    </div>
  );
}
