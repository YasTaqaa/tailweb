/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect} from "react";


export const sculptureList = [{
    url: 'https://cdn.discordapp.com/attachments/935856252494417982/1193840822471364628/pngwing.com_6.png?ex=65ae2de8&is=659bb8e8&hm=9fee39676c6bc24e9ab4db15feb935024fa1187fd47050c4f4936213a4557475&',  
  }, {
    url: 'https://cdn.discordapp.com/attachments/935856252494417982/1193848758782398495/608289abd299c-removebg-preview.png?ex=65ae354c&is=659bc04c&hm=a91613dc592acc9857e0a8b843c58e3e3c2e96855aea5964e667601ae7ac901f&',
  }, {
    url: 'https://cdn.discordapp.com/attachments/935856252494417982/1171375106799452211/pngwing.com_3.png?ex=65a64714&is=6593d214&hm=66c8e6f0c7ac5c85c337b9b28681419451f62769c4ad8b753045abfdb88ea469&',
  }, {
    url: 'https://cdn.discordapp.com/attachments/935856252494417982/1171668886949736518/output-onlinegiftools.gif?ex=655d84af&is=654b0faf&hm=44c5a090f94a9fef7b4789b1a929a6feb2d6b7ea96024845621ee118c7eedaf5&',
  }];
  
  export default function App() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % sculptureList.length);
      }, 10000); // Change image every 10 seconds 
  
      // Clear the interval when component unmounts or when index changes
      return () => clearInterval(intervalId);
    }, []);
    
  
    function handleClickNext() {
      if (index < sculptureList.length - 1) {
        setIndex(index + 1);
      } else {
        // Reset index to 0 when reaching the end
        setIndex(0);
      }
    }
  
    function handleClickBack() {
      if (index > 0) {
        setIndex(index - 1);
      } else {
        // Loop to the end when reaching the beginning
        setIndex(sculptureList.length - 1);
      }
    }
  
    let sculpture = sculptureList[index];
    return (
      <>
      <div>
        <button onClick={handleClickNext} className="tombol-button tombol-next">
          <img src="https://cdn.discordapp.com/attachments/935856252494417982/1193835776425869384/2fe3f2e09245434ab75ea2b978b67f56_957504802289757169.png?ex=65ae2935&is=659bb435&hm=31dc4b26e8deb960d2ff55d5181dda2715c8f3077f5dd91a14b2a657982eec55&" width={70}/>
        </button>
        <img 
          style={{ height: "410px" }}
          src={sculpture.url}
        />
        <button onClick={handleClickBack} className="tombol-button tombol-back">
          <img src="https://cdn.discordapp.com/attachments/935856252494417982/1193835595185786930/d06256eb241aa60c9ba5f010295f1d38_7234354619395957732.png?ex=65ae290a&is=659bb40a&hm=104ce33bdd12c77e8f416819a83d6177566ac9cda5425a0103662dbb83e66aa4&" width={70}/>
        </button>
      </div>
      </>
    );
  }
  