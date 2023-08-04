import TripData from "./TripData";
import "./TripStyles.css";
import Img1 from "../assets/5.jpg";
import Img2 from "../assets/8.jpg";
import Img3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Img1}
          heading="Trip in Indonesia"
          text="Indonesia is a country in Southeast, 
                officially the Republic of Indonesia, 
                Asia and Oceania between the Indian and 
                Pacific oceans. It consists of over 17,000 
                islands, including Sumatra, Java, Sulawesi, 
                and parts of Borneo and New Guinea."
        />
        <TripData
          image={Img2}
          heading="Trip in Malaysia"
          text="Malaysia is a country in Southeast Asia,
                located partly on a peninsula of the Asian 
                mainland and partly on the northern third of 
                the island of Borneo. West (peninsular) Malaysia
                 shares a land border with Thailand, and 
                 there are two bridges that connect Malaysia 
                 to the island of Singapore, and has coastline
                 s on the South China Sea and the Straits of 
                 Malacca."
        />
        <TripData
          image={Img3}
          heading="Trip in France"
          text="France, officially French Republic,is a 
          country of northwestern Europe. Historically and 
          culturally among the most important nations in the 
          Western world. Bounded by the Atlantic Ocean and the Mediterranean
           Sea, the Alps and the Pyrenees, France has 
           long provided a geographic, economic, and 
           linguistic bridge joining northern and southern 
           Europe. "
        />
      </div>
    </div>
  );
}

export default Trip;
