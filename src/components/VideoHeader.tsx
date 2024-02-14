import Image from "next/image";

type VideoHeaderProps = {
    videoUrl: string;
    hotelName: string;
    hotelDescription: string;
  };
  
const VideoHeader: React.FC<VideoHeaderProps> = ({ videoUrl, hotelName, hotelDescription }) => {
return (
    <div className="relative h-screen">
        <video
            autoPlay
            loop
            muted
            className="object-cover w-full h-5/6"
            style={{ zIndex: 100 }}
        >
            <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="backdrop-blur-sm p-10 w-2/4 m-0-auto absolute top-40 left-96 right-0 z-10 flex flex-col items-center justify-center">
            <Image className="w-20 h-20" src="/static/logo.png" alt="" width={384} height={512} />
            <h1 className="text-white text-5xl font-bold p-5">{hotelName}</h1>
            <h2 className="text-white text-2xl italic">{hotelDescription}</h2>
        </div>
    </div>
);
};

export default VideoHeader;
  