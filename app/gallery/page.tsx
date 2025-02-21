import ImageGallery from "@/components/gallery";
import Header from "@/components/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="container mx-auto pt-[80px]">
        <h1 className="text-3xl font-bold text-center mb-8">Events Gallery</h1>
        <ImageGallery />
      </main>
    </>
  );
}
