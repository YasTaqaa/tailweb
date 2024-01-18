/* eslint-disable jsx-a11y/alt-text */
import Navbar from './Navbar';

export default function Example() {
  return (
    <div className='overflow-hidden bg-cover bg-center bg-image-url-chara' style={{ backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <div className='flex items-center justify-center'>
          <p>
            <img src = "https://cdn.discordapp.com/attachments/935856252494417982/1197468423635075112/GeneratedImage_4.png?ex=65bb6060&is=65a8eb60&hm=6857a61a6ca43687bfc7259aff63edaaae40ed12171bee80a617a21d45e7ffe2&" height={100} width={500}/>
         </p>
     </div>
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-8">
          <div className='video-container'>
            <div className='video'>
              <iframe width="100%" height="225" src="https://www.youtube.com/embed/MtwcF68spyU?si=D0AgYcn-4UQkRrRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className='video mt-2'>
              <iframe width="100%" height="225" src="https://www.youtube.com/embed/V_2OES-CNb0?si=T-CSsW5Fd6Tdngxa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
          <div className='video-container'>
            <div className='video'>
              <iframe width="100%" height="225" src="https://www.youtube.com/embed/F5U4E-1Jn5Y?si=9tugn98qZD4yc17l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className='video mt-2'>
              <iframe width="100%" height="225" src="https://www.youtube.com/embed/msQY8x5q174?si=bqr72Nnyu7Eca_fV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
          <div className='video-container'>
            <div className='video'>
              <iframe width="100%" height="225" src="https://www.youtube.com/embed/oQBq4PFMx0A?si=q29my0KtaFSkf_Eu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className='video mt-2'>
              <iframe width="100%" height="225" src="https://www.youtube.com/embed/E606Ez4X5_g?si=KAfIWwyJVCNG5Wxl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
