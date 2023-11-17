
import Navbar from './Navbar';

const products = [
    {
      id: 1,
      name: 'Miss Pink Elf',
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1171407232143990844/239464191_967121987184211_4418895927230597863_n.jpg?ex=655c90ff&is=654a1bff&hm=8a64cd122dd4be1fcf0283aef8b581eaf1447395ee19a97c32ea713ccffd5288&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1171407232143990844/239464191_967121987184211_4418895927230597863_n.jpg?ex=655c90ff&is=654a1bff&hm=8a64cd122dd4be1fcf0283aef8b581eaf1447395ee19a97c32ea713ccffd5288&',
    },

    {
      id: 1,
      name: 'Lunar Vow: Crimson Love',
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1171403405416210553/398985952_778275644311362_4422734695275754137_n.jpg?ex=655c8d6f&is=654a186f&hm=340e50c35263193c184ce74af8b201f431c369f9b49e5ad5e244fa87053ba9c0&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1171403405416210553/398985952_778275644311362_4422734695275754137_n.jpg?ex=655c8d6f&is=654a186f&hm=340e50c35263193c184ce74af8b201f431c369f9b49e5ad5e244fa87053ba9c0&',
    },

    {
      id: 1,
      name: 'Elysia Herrscher of Human Ego',
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1171401279172517942/O1CN01oJItU31fEb9LJ7Da2__3249253975_a7eb411c-f6d9-4f6e-ba0e-701ae2867fe1.webp?ex=655c8b74&is=654a1674&hm=5d237771eaffa0a81dc97a27a13085520676347cedb9f806a929b1e462a86594&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1171401279172517942/O1CN01oJItU31fEb9LJ7Da2__3249253975_a7eb411c-f6d9-4f6e-ba0e-701ae2867fe1.webp?ex=655c8b74&is=654a1674&hm=5d237771eaffa0a81dc97a27a13085520676347cedb9f806a929b1e462a86594&',
    },

    {
      id: 1,
      name: 'Raiden Mei Herrscher of Origin',
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1171409907354976326/Fm_VZgeaAAIYB3R.jpg?ex=655c937d&is=654a1e7d&hm=e2cddbb97a6a82a6ee1f08a8c81fc0d67cb5462eb788d59c7d4c85edc81519f0&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1171409907354976326/Fm_VZgeaAAIYB3R.jpg?ex=655c937d&is=654a1e7d&hm=e2cddbb97a6a82a6ee1f08a8c81fc0d67cb5462eb788d59c7d4c85edc81519f0&',
    },

    {
      id: 1,
      name: 'Kiana Herrscher of Finality',
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1171410322721095690/0e766e5098b10610d85c12041b9d59fd_8787942535884375101.webp?ex=655c93e0&is=654a1ee0&hm=908d011983e662be92fe1f130b491dc72eb04804a637811edeb0091fbe82d7ff&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1171410322721095690/0e766e5098b10610d85c12041b9d59fd_8787942535884375101.webp?ex=655c93e0&is=654a1ee0&hm=908d011983e662be92fe1f130b491dc72eb04804a637811edeb0091fbe82d7ff&',
    },

    {
      id: 1,
      name: 'Bronya Herrscher of Truth',
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1171411087397232670/Herrscher.of.Truth.full.3856237.jpg?ex=655c9497&is=654a1f97&hm=4851f19cb2f52ff3773cb43e21bfaa56ba13f59b6354dcc5f02ccdde5168ca46&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1171411087397232670/Herrscher.of.Truth.full.3856237.jpg?ex=655c9497&is=654a1f97&hm=4851f19cb2f52ff3773cb43e21bfaa56ba13f59b6354dcc5f02ccdde5168ca46&', 
    },

    {
      id: 1,
      name: 'Seele Herrscher of Rebirth',
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1171412764313534464/fab5089c2701d12008e27c13d86c8e5f_8074877247238527391.webp?ex=655c9626&is=654a2126&hm=ffc8da8b7c73e29809a227f14141422ed1159a82c47c8c030b8e53a602a0c74d&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1171412764313534464/fab5089c2701d12008e27c13d86c8e5f_8074877247238527391.webp?ex=655c9626&is=654a2126&hm=ffc8da8b7c73e29809a227f14141422ed1159a82c47c8c030b8e53a602a0c74d&',
    },

    {
      id: 1,
      name: 'Bronya Silver Wing',
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1171411606727557161/a0258248276c75097eb0127a75e9669b.jpeg?ex=655c9512&is=654a2012&hm=18bbd222a0cc4539b02e2be53efda809ec4dde73022e7357d3aa3c33c8963350&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1171411606727557161/a0258248276c75097eb0127a75e9669b.jpeg?ex=655c9512&is=654a2012&hm=18bbd222a0cc4539b02e2be53efda809ec4dde73022e7357d3aa3c33c8963350&',
    },
    
  ]
  
  export default function Example() {
    return (
      <div className="bg-gradient-to-r from-pink-300 to-white">

        <Navbar />
        
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 font-serif">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Character Pictures :</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  