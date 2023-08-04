import Lake1 from "../assets/1.jpg";
import Lake2 from "../assets/10.jpg";
import Mountain1 from "../assets/9.jpg";
import Mountain2 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see alot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Dal Lake, Srinagar"
        text="Reckoned to be the pride of Kashmir 
            tourism, Dal Lake is the most popular 
            attraction in Srinagar. Enclosed by 
            splendid Pir Panjal mountains and 
            Mughal Gardens, this must-see place 
            is ideal for family vacationers, 
            honeymoon couples, and even for solo 
            travellers seeking peace.The canopied 
            Shikaras sailing on the lake are one 
            of the major attractions of Dal Lake. 
            The houseboats on the lake are also the 
            top attraction as the best accommodation 
            option in Srinagar to the tourists. 
            In addition to this, the floating vegetable and 
            flower market is a major place to see."
        img1={Lake1}
        img2={Lake2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Ladakh, Ladakh"
        text="Arid mountains, dramatically crowned rocky outcrops, picturesque gompas, 
            meditational mani walls and multi hued flags 
            are few of the many sites that exemplify the beauty 
            of Ladakh. The well balanced traditional society of 
            Ladakh has much to offer the West in terms of 
            ecological awareness. Ladakh is a magnificent and an 
            unexplored wonderland of the Himalayas. It is one 
            place that is considered as a heaven by everyone who 
            is on a lookout to satiate their indomitable love for 
            adventure. Also known as the ‘Land of Passes, Ladakh 
            forms an alluring part of the state of Jammu and 
            Kashmir in India. Situated at an elevation of 
            2750 - 7672 meters above sea level, Ladakh is 
            indeed blessed with incredible topography that comprises 
            of hilly terrains, high altitude peaks and the lush green grasslands."
        img1={Mountain1}
        img2={Mountain2}
      />
    </div>
  );
};

export default Destination;
