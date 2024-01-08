
import Navbar from './Navbar';

const products = [
    {
      id: 1,
      name: 'Miss Pink Elf',
      href: 'https://honkaiimpact3.hoyoverse.com/global/en-us/valkyries/106480/106448',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1171407232143990844/239464191_967121987184211_4418895927230597863_n.jpg?ex=655c90ff&is=654a1bff&hm=8a64cd122dd4be1fcf0283aef8b581eaf1447395ee19a97c32ea713ccffd5288&',
    },

    {
      id: 1,
      name: 'Lunar Vow: Crimson Love',
      href: 'https://honkaiimpact3.hoyoverse.com/global/en-us/valkyries/106473/113368',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1171403405416210553/398985952_778275644311362_4422734695275754137_n.jpg?ex=655c8d6f&is=654a186f&hm=340e50c35263193c184ce74af8b201f431c369f9b49e5ad5e244fa87053ba9c0&',
    },

    {
      id: 1,
      name: 'Griseo Cosmic Expression',
      href: 'https://honkaiimpact3.hoyoverse.com/global/en-us/valkyries/106487/113790',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193854969896509521/eb3194a573e5937d84f274c038ae2469_8133214878473301520.png?ex=65ae3b15&is=659bc615&hm=0aefd884e77293104493c874be3490e8c1843e8cc95ca0675bbec2a9e1367aed&',
    },

    {
      id: 1,
      name: 'Raiden Mei Herrscher of Origin',
      href: 'https://honkaiimpact3.hoyoverse.com/global/en-us/valkyries/106476/106464',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1171409907354976326/Fm_VZgeaAAIYB3R.jpg?ex=655c937d&is=654a1e7d&hm=e2cddbb97a6a82a6ee1f08a8c81fc0d67cb5462eb788d59c7d4c85edc81519f0&',
    },

    {
      id: 1,
      name: 'Kiana Herrscher of Finality',
      href: 'https://honkaiimpact3.hoyoverse.com/global/en-us/valkyries/106478/106465',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1171410322721095690/0e766e5098b10610d85c12041b9d59fd_8787942535884375101.webp?ex=655c93e0&is=654a1ee0&hm=908d011983e662be92fe1f130b491dc72eb04804a637811edeb0091fbe82d7ff&',
    },

    {
      id: 1,
      name: 'Bronya Herrscher of Truth',
      href: 'https://honkaiimpact3.hoyoverse.com/global/en-us/valkyries/106477/106463',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1171411087397232670/Herrscher.of.Truth.full.3856237.jpg?ex=655c9497&is=654a1f97&hm=4851f19cb2f52ff3773cb43e21bfaa56ba13f59b6354dcc5f02ccdde5168ca46&', 
    },

    {
      id: 1,
      name: 'Seele Herrscher of Rebirth',
      href: 'https://honkaiimpact3.hoyoverse.com/global/en-us/valkyries/106469/112468',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1171412764313534464/fab5089c2701d12008e27c13d86c8e5f_8074877247238527391.webp?ex=655c9626&is=654a2126&hm=ffc8da8b7c73e29809a227f14141422ed1159a82c47c8c030b8e53a602a0c74d&',
    },

    {
      id: 1,
      name: 'Bronya Silver Wing',
      href: 'https://honkaiimpact3.hoyoverse.com/global/en-us/valkyries/106477/106452',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1171411606727557161/a0258248276c75097eb0127a75e9669b.jpeg?ex=655c9512&is=654a2012&hm=18bbd222a0cc4539b02e2be53efda809ec4dde73022e7357d3aa3c33c8963350&',
    },
    
  ]
  
  export default function Example() {
    return (
      
      <div className="bg-cover bg-center bg-image-url-chara" style={{backgroundAttachment:'fixed', backgroundSize:'cover'}}>
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-blue-300">Character :</h2>
        <div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10 ">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="product-container rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <div className="w-full h-full relative">
                    <a href={product.href}>
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="product-image"
                      />
                      <div className="product-info absolute inset-0 flex flex-col items-center opacity-0 group-hover:opacity-100 transition duration-300">
                        
                        <h3 className="text-white bg-black bg-opacity-70 p-2">                     
                          {product.name}
                        </h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    )
  }
  