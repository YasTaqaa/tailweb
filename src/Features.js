
import Navbar from './Navbar';



export default function Example() {
    return (
     
      <div className='overflow hidden' class='bg-gradient-to-r from-pink-300 to-white'>
        <Navbar />
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:px-8 font-serif">Trailer Battlesuit Honkai Impact :</h2>
        <div className="mt-2 grid grid-cols-3 gap-x-6 gap-y-10 lg:px-8">
        <div class='video-container'>
            <div class='video'>
                 <iframe width="325" height="225" src="https://www.youtube.com/embed/MtwcF68spyU?si=D0AgYcn-4UQkRrRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
            <div class='video mt-2'>
                 <iframe width="325" height="225" src="https://www.youtube.com/embed/V_2OES-CNb0?si=T-CSsW5Fd6Tdngxa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
        </div>
        <div class='video-container'>
            <div class='video'>
                <iframe width="325" height="225" src="https://www.youtube.com/embed/F5U4E-1Jn5Y?si=9tugn98qZD4yc17l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
            <div class='video mt-2'>
                <iframe width="325" height="225" src="https://www.youtube.com/embed/msQY8x5q174?si=bqr72Nnyu7Eca_fV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
        </div>
        <div class='video-container'>
            <div class='video'>
                <iframe width="325" height="225" src="https://www.youtube.com/embed/oQBq4PFMx0A?si=q29my0KtaFSkf_Eu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
            <div class='video mt-2'>
                <iframe width="325" height="225" src="https://www.youtube.com/embed/E606Ez4X5_g?si=KAfIWwyJVCNG5Wxl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
  