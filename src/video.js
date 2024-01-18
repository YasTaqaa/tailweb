/* eslint-disable jsx-a11y/alt-text */

import Navbar from './Navbar';



export default function Example() {
    return (
     
      <div className='overflow hidden' class="bg-cover bg-center bg-image-url-chara" style={{backgroundAttachment:'fixed', backgroundSize:'cover'}}>
        <Navbar />
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className='flex items-center justify-center'>
          <p>
            <img src = "https://cdn.discordapp.com/attachments/935856252494417982/1197467905567240222/GeneratedImage_3.png?ex=65bb5fe4&is=65a8eae4&hm=b193c9f8546a3579e1f52ee936fb7de61eeaca1d8522c0d4260d9eff04a3154d&" height={100} width={300}/>
         </p>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-x-12 gap-y-10 lg:px-8">
        <div class='video-container'>
            <div class='video'>
                 <iframe width="100%" height="315" src="https://www.youtube.com/embed/wKVJi-FLvak?si=q43QuO0DR4OcIjeh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
            <div class='video mt-2'>
                 <iframe width="100%" height="315" src="https://www.youtube.com/embed/xREK6gZxYLQ?si=6jq26_ORsJ0NmYZH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
        </div>
        <div class='video-container'>
            <div class='video'>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/9iFDPYubUbE?si=oGdQMICYzql5rwn6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
            <div class='video mt-2'>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/RvdK-6n7O0Y?si=ozMd6XnzBxnzu1L6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
  