import Image from "next/image";

const About = () => {
    return (
      <div id="aboutContainer" className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-16 pt-0">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="mb-6">
            Soaring gracefully along Havana's pristine coastline, Hotel 405 Havana offers 
            guests a uniquely coastal escape. Just steps away from the sandy beaches, the 
            hotel's expansive grounds provide a tranquil oasis. Surrounded by the azure waters 
            of the Caribbean Sea, the nearby historic sites of Old Havana, the vibrant local culture, 
            and the picturesque Malecón are just a taste of the enchanting experiences awaiting guests.
          </p>
          <ul className="list-disc pl-4 mb-8">
            <li>150 rooms and suites</li>
            <li>Forbes Travel Guide rated it five stars.</li>
            <li>Convenient to Havana's top attractions.</li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center pr-24">
            <div className="relative">
                <Image
                    src="/about1.jpg"
                    alt="Image 1"
                    className="object-cover drop-shadow-xl rounded-2xl"
                    width={384} 
                    height={512}
                />
                <Image
                    src="/about2.jpg"
                    alt="Image 2"
                    className="absolute top-72 right-36 object-cover drop-shadow-xl rounded-2xl"
                    width={384} 
                    height={512}
                />
                <Image
                    src="/about3.jpg"
                    alt="Image 3"
                    className="absolute top-60 left-48 object-cover drop-shadow-xl rounded-2xl"
                    width={384} 
                    height={512}
                />
            </div>
        </div>
      </div>
    );
  };
  
  export default About;
  