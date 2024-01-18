/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */

import { useState, useEffect} from "react";
import "./index.css";
import homeimage from "./homeimage.json";

  
  const Imagehome = () => {
    const [index, setIndex] = useState(0);
    const { images } = homeimage;

    useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000); // Change image every 10 seconds 
  
      return () => clearInterval(intervalId);
    }, [images.length]);
    
  
    function handleClickNext() {
      if (index < images.length - 1) {
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
        setIndex(images.length - 1);
      }
    }
  
    
    return (
      <>
      <div>
        <button onClick={handleClickNext} className="tombol-button tombol-next">
          <img src="https://cdn.discordapp.com/attachments/935856252494417982/1193835776425869384/2fe3f2e09245434ab75ea2b978b67f56_957504802289757169.png?ex=65ae2935&is=659bb435&hm=31dc4b26e8deb960d2ff55d5181dda2715c8f3077f5dd91a14b2a657982eec55&" width={70}/>
        </button>
      
          <img 
            style={{ height: "410px" , border: "6px solid #add8e6"}}
            src={images[index]} alt={`Image ${index}`}
          />

        <button onClick={handleClickBack} className="tombol-button tombol-back">
          <img src="https://cdn.discordapp.com/attachments/935856252494417982/1193835595185786930/d06256eb241aa60c9ba5f010295f1d38_7234354619395957732.png?ex=65ae290a&is=659bb40a&hm=104ce33bdd12c77e8f416819a83d6177566ac9cda5425a0103662dbb83e66aa4&" width={70}/>
        </button>
      </div>
      </>
    );
  }
  
  export default Imagehome;