/* eslint-disable jsx-a11y/alt-text */

import Navbar from './Navbar';

export default function Example() {


  return (
    
      <div className="relative isolate px-6 pt-14 lg:px-8" class="bg-cover bg-center bg-image-url" style={{backgroundAttachment:'fixed', backgroundSize:'cover'}}>
      <Navbar />
        
        <div className="mx-auto max-w-2xl py-8 sm:py-18 lg:py-8">         
          <div className="text-center">
            <div className='flex items-center justify-center'>
             <p>
              <img src = "https://media.discordapp.net/attachments/1091296534370471997/1162697005550796891/image0.png?ex=65461b77&is=6533a677&hm=7c8046835d5e242aacd3d5a06b6ea120e93ff260184d6c6b9865430275799fbd&=&width=1073&height=312" height={100} width={300}/>
             </p>
            </div> 
            <p className="mt-6 flex items-center justify-center">             
              <img src="https://cdn.discordapp.com/attachments/935856252494417982/1171375106799452211/pngwing.com_3.png?ex=655c7314&is=6549fe14&hm=5d7d057b6c69f859417c6f63ab2b9284c97c09906c8ba8368a375f22cc637b84&" height={290} width={490}/>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="Product"
                className="mt-15 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
             
            </div>
          </div>
        </div>
      </div>
   
  )
}
