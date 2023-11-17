
import Navbar from './Navbar';



export default function Example() {
    return (
     
      <div className='overflow hidden' class='bg-gradient-to-r from-pink-300 to-white'>
        <Navbar />
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:px-8 font-serif">Music Video :</h2>
        <div className="mt-2 grid grid-cols-2 gap-x-12 gap-y-10 lg:px-8">
        <div class='video-container'>
            <div class='video'>
                 <iframe width="510" height="315" src="https://www.youtube.com/embed/wKVJi-FLvak?si=q43QuO0DR4OcIjeh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
            <div class='video mt-2'>
                 <iframe width="510" height="315" src="https://www.youtube.com/embed/xREK6gZxYLQ?si=6jq26_ORsJ0NmYZH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
        </div>
        <div class='video-container'>
            <div class='video'>
                <iframe width="510" height="315" src="https://www.youtube.com/embed/9iFDPYubUbE?si=oGdQMICYzql5rwn6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
            <div class='video mt-2'>
                <iframe width="510" height="315" src="https://www.youtube.com/embed/RvdK-6n7O0Y?si=ozMd6XnzBxnzu1L6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
  