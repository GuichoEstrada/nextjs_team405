import VideoHeader from "@/components/VideoHeader";
import About from "@/components/About";
import Suites from "@/components/Suites";

export default function Home() {
  const videoUrl = '/header.mp4';
  const hotelName = 'Hotel 405 Havana';
  const hotelDescription = 'A stylish destination nestled along the picturesque coastline of Havana.';
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <VideoHeader videoUrl={videoUrl} hotelName={hotelName} hotelDescription={hotelDescription}/>
      <hr></hr>
      <About />
      <hr></hr>
      <Suites />
    </main>
  );
}
