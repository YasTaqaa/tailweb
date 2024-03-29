/* eslint-disable jsx-a11y/alt-text */

import Navbar from './Navbar';
import Imagehome from './Imagehome';

export default function Example() {

  return (
    
      <div className="relative isolate px-6 pt-14 lg:px-8" class="bg-cover bg-center bg-image-url" style={{backgroundAttachment:'fixed', backgroundSize:'cover'}}>
      <Navbar />
      <div className="mt-25 absolute top-15 right-0 m-5">
        <a
          href="https://honkaiimpact3.hoyoverse.com/global/en-us/download"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-700"
        >
          Download
        </a>
      </div>
        <div className="mx-auto max-w-2xl py-8 sm:py-18 lg:py-8">         
          <div className="text-center">
            <div className='flex items-center justify-center'>
             <p>
              <img src = "https://media.discordapp.net/attachments/1091296534370471997/1162697005550796891/image0.png?ex=65461b77&is=6533a677&hm=7c8046835d5e242aacd3d5a06b6ea120e93ff260184d6c6b9865430275799fbd&=&width=1073&height=312" height={100} width={300}/>
             </p>
            </div> 
            <p className="mt-5 flex items-center justify-center" >             
              <Imagehome/>
            </p>
          </div>
          <div className='flex items-center justify-center'>
             <p>
              <img src='https://cdn.discordapp.com/attachments/935856252494417982/1171375106799452211/pngwing.com_3.png?ex=65a64714&is=6593d214&hm=66c8e6f0c7ac5c85c337b9b28681419451f62769c4ad8b753045abfdb88ea469&' height={100} width={300}/>
             </p>
          </div>
        </div>
      </div>
   
  )
}
