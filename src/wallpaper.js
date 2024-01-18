/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/alt-text */

import Navbar from './Navbar';
import React, { useState , useEffect } from 'react';

const wallpapersPerPage = 8;

const wallpaper = [
    {
        href: 'https://cdn.discordapp.com/attachments/935856252494417982/1193860503022350396/012a776b77570fb2904c9f59c9429db0_3315739900830006502.png?ex=65ae403c&is=659bcb3c&hm=a6049d2aac48b00f032d7b0a981abcdbe456bb2c28a671aacc83dd4eecc176c8&',
        imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193860503022350396/012a776b77570fb2904c9f59c9429db0_3315739900830006502.png?ex=65ae403c&is=659bcb3c&hm=a6049d2aac48b00f032d7b0a981abcdbe456bb2c28a671aacc83dd4eecc176c8&',
    },

    {
        href: 'https://cdn.discordapp.com/attachments/935856252494417982/1193863864383717416/f47b8254dc7f7dce3c163d39d4a2145d_6767098612142990353.png?ex=65ae435e&is=659bce5e&hm=302fd27c6a0876cbe99a1bce5b7b009ee9c903516386c37bbd5f80392a091e69&',
        imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193863864383717416/f47b8254dc7f7dce3c163d39d4a2145d_6767098612142990353.png?ex=65ae435e&is=659bce5e&hm=302fd27c6a0876cbe99a1bce5b7b009ee9c903516386c37bbd5f80392a091e69&',
    },

    {
        href: 'https://cdn.discordapp.com/attachments/935856252494417982/1193863865285480520/2109ec194786108143f16d5771217fb4_648815587606828611.png?ex=65ae435e&is=659bce5e&hm=124c2e109f2b479bfd7973a6acb6b7ded3cba4cb6ece214c00347dd55b653001&',
        imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193863865285480520/2109ec194786108143f16d5771217fb4_648815587606828611.png?ex=65ae435e&is=659bce5e&hm=124c2e109f2b479bfd7973a6acb6b7ded3cba4cb6ece214c00347dd55b653001&',
    },

    {
        href: 'https://cdn.discordapp.com/attachments/935856252494417982/1193863866417958962/ff7f3affdde125559d45b69e513f5ded_8935891394441827622.png?ex=65ae435e&is=659bce5e&hm=713588633103893d418317bdc2da841bb860c236cb7fdc86a634ac099492e647&',
        imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193863866417958962/ff7f3affdde125559d45b69e513f5ded_8935891394441827622.png?ex=65ae435e&is=659bce5e&hm=713588633103893d418317bdc2da841bb860c236cb7fdc86a634ac099492e647&',
    },

    {
        href: 'https://cdn.discordapp.com/attachments/935856252494417982/1193863867508473906/1f943da145fc2226a29007f5be6ae8f1_4879051840930930087.png?ex=65ae435e&is=659bce5e&hm=ab003759618adfa35bdd69e011970df2fd959e01c28349a245b4e5a21b9f6a68&',
        imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193863867508473906/1f943da145fc2226a29007f5be6ae8f1_4879051840930930087.png?ex=65ae435e&is=659bce5e&hm=ab003759618adfa35bdd69e011970df2fd959e01c28349a245b4e5a21b9f6a68&',
    },

    {
        href: 'https://cdn.discordapp.com/attachments/935856252494417982/1193863868355710976/d54bff396bfe70ae1eb7888e522fc815_3537088967678085173.png?ex=65ae435f&is=659bce5f&hm=f0922fc8f9bd55159f3e31e34ee4dbbaf2539f633e521b5a765853ec8b500c4d&',
        imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193863868355710976/d54bff396bfe70ae1eb7888e522fc815_3537088967678085173.png?ex=65ae435f&is=659bce5f&hm=f0922fc8f9bd55159f3e31e34ee4dbbaf2539f633e521b5a765853ec8b500c4d&', 
    },

    {
        href: 'https://cdn.discordapp.com/attachments/935856252494417982/1193865312781738055/149884f7f3950fe84329e74ab702b01a_3208435768244928658.png?ex=65ae44b7&is=659bcfb7&hm=31845c4163899385a8eed104d155546a646d405aab88ff2049d63514ad1515a3&',
        imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193865312781738055/149884f7f3950fe84329e74ab702b01a_3208435768244928658.png?ex=65ae44b7&is=659bcfb7&hm=31845c4163899385a8eed104d155546a646d405aab88ff2049d63514ad1515a3&',
    },

    {
        href: 'https://cdn.discordapp.com/attachments/935856252494417982/1193865313767407708/2959e20c1916c98051fe93513413e624_8867013479556895876.png?ex=65ae44b7&is=659bcfb7&hm=b53a42ebd1cfe72e5594c3712eac414d98c8a0ed84843f83f261e7087da5232b&',
        imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193865313767407708/2959e20c1916c98051fe93513413e624_8867013479556895876.png?ex=65ae44b7&is=659bcfb7&hm=b53a42ebd1cfe72e5594c3712eac414d98c8a0ed84843f83f261e7087da5232b&',
    },

    
    {
        href: 'https://cdn.discordapp.com/attachments/935856252494417982/1193867358834524220/2022021419010021831.png?ex=65ae469f&is=659bd19f&hm=d0f40c827f6bb082bb7654a44f279c586eb257bcb2d6d9d5f781b06195b31a66&',
        imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193867358834524220/2022021419010021831.png?ex=65ae469f&is=659bd19f&hm=d0f40c827f6bb082bb7654a44f279c586eb257bcb2d6d9d5f781b06195b31a66&',
    },

    {
        href: 'https://cdn.discordapp.com/attachments/935856252494417982/1193867361325944832/76e9df62cfff74cfbe3d18e218d51f9a_8028279334342530841.png?ex=65ae469f&is=659bd19f&hm=20eafef579ef639ce7a98c92e2b661bc372dfb63d1ec431d0bd284fafe0b38f6&',
        imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193867361325944832/76e9df62cfff74cfbe3d18e218d51f9a_8028279334342530841.png?ex=65ae469f&is=659bd19f&hm=20eafef579ef639ce7a98c92e2b661bc372dfb63d1ec431d0bd284fafe0b38f6&',
    },

    {
        href: 'https://cdn.discordapp.com/attachments/935856252494417982/1193867365516054628/86171feb433a1f910189af96b2af8a6f_8400785995087767552.png?ex=65ae46a0&is=659bd1a0&hm=411e208fb5b528d4cf275ad361c5518d2dde89c89a0baf4468101bba92a6ec72&',
        imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193867365516054628/86171feb433a1f910189af96b2af8a6f_8400785995087767552.png?ex=65ae46a0&is=659bd1a0&hm=411e208fb5b528d4cf275ad361c5518d2dde89c89a0baf4468101bba92a6ec72&',
    },

    {
        href: 'https://cdn.discordapp.com/attachments/935856252494417982/1193867359845367900/089313238a8756896640f6d24b31a918_5799350297742190323.png?ex=65ae469f&is=659bd19f&hm=e55d5860c999076ecce70cd3ac70a7c781ac0a221a4ce694b60b77fb4e5a0aa3&',
        imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193867359845367900/089313238a8756896640f6d24b31a918_5799350297742190323.png?ex=65ae469f&is=659bd19f&hm=e55d5860c999076ecce70cd3ac70a7c781ac0a221a4ce694b60b77fb4e5a0aa3&',
    },

    {
        href: 'https://cdn.discordapp.com/attachments/935856252494417982/1193867363683143742/34aca4378546491b395db9b7d391338c_3783427337983297203.png?ex=65ae46a0&is=659bd1a0&hm=8ac45a4845cfb75c6934f6d5f927dbe0d0334b769bd06c0ca509832c5957c184&',
        imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193867363683143742/34aca4378546491b395db9b7d391338c_3783427337983297203.png?ex=65ae46a0&is=659bd1a0&hm=8ac45a4845cfb75c6934f6d5f927dbe0d0334b769bd06c0ca509832c5957c184&',
    },

    {
        href: 'https://cdn.discordapp.com/attachments/935856252494417982/1193867364563943505/b854a007400e9b917129aeca5f778a58_7565668082978617112.png?ex=65ae46a0&is=659bd1a0&hm=d4accf7df2ad1a367472a241f5ba9baca05fa7a9c86a140b5dd5a2b9eb463f21&',
        imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193867364563943505/b854a007400e9b917129aeca5f778a58_7565668082978617112.png?ex=65ae46a0&is=659bd1a0&hm=d4accf7df2ad1a367472a241f5ba9baca05fa7a9c86a140b5dd5a2b9eb463f21&',
    },

    {
        href: 'https://cdn.discordapp.com/attachments/935856252494417982/1193875162437787668/0943a7ed5a7c942cc116dd9e026c1e06_4917921482251911619.png?ex=65ae4de3&is=659bd8e3&hm=e258cd2447003f4643398fe06a794d8f01825b298c77f42902029a38dcb6697e&',
        imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193875162437787668/0943a7ed5a7c942cc116dd9e026c1e06_4917921482251911619.png?ex=65ae4de3&is=659bd8e3&hm=e258cd2447003f4643398fe06a794d8f01825b298c77f42902029a38dcb6697e&',
    },

    {
        href: 'https://cdn.discordapp.com/attachments/935856252494417982/1193875163054362715/d7abb745d15be64e4778c42711ff9572_2684053591477627811.png?ex=65ae4de4&is=659bd8e4&hm=424348702e4b75bd9279313cfee74cdbe8b98a13eec70036a902c656c42309de&',
        imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1193875163054362715/d7abb745d15be64e4778c42711ff9572_2684053591477627811.png?ex=65ae4de4&is=659bd8e4&hm=424348702e4b75bd9279313cfee74cdbe8b98a13eec70036a902c656c42309de&',
    },


    {
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1197512928841191445/1775a68bb6716d390b69294c53cb0e36_3072393081027033047.png?ex=65bb89d2&is=65a914d2&hm=c873a1666eb0886f627f2ca8c32bd6e8e01fb9b5ca28530c57cd12e55c48534e&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1197512928841191445/1775a68bb6716d390b69294c53cb0e36_3072393081027033047.png?ex=65bb89d2&is=65a914d2&hm=c873a1666eb0886f627f2ca8c32bd6e8e01fb9b5ca28530c57cd12e55c48534e&',
    },

    {
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1197512617745457173/4482af26e93ed2f873d66707805cbcb0_7885538803932127252.png?ex=65bb8988&is=65a91488&hm=fbedc2239123c8470fdb8337946a62cfb6a184639728f038600b0f60027d6322&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1197512617745457173/4482af26e93ed2f873d66707805cbcb0_7885538803932127252.png?ex=65bb8988&is=65a91488&hm=fbedc2239123c8470fdb8337946a62cfb6a184639728f038600b0f60027d6322&',
    },

    {
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1197512613739905084/cb67a848774ee8851cd645d61c0d891e_6653511807734260307.png?ex=65bb8987&is=65a91487&hm=7f0f3b71578c6b0fa0067c525b4d588d4431ebc75a798884c6674f88a6c7026c&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1197512613739905084/cb67a848774ee8851cd645d61c0d891e_6653511807734260307.png?ex=65bb8987&is=65a91487&hm=7f0f3b71578c6b0fa0067c525b4d588d4431ebc75a798884c6674f88a6c7026c&',
    },

    {
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1197512615807688804/92a902de5ed03d6b2622b4f7fabd6c69_8999768446186218577.png?ex=65bb8988&is=65a91488&hm=1c053e99153201d1bbdd47dd67d4c3385d429ad31156b44002ccd17b1ef4cfc1&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1197512615807688804/92a902de5ed03d6b2622b4f7fabd6c69_8999768446186218577.png?ex=65bb8988&is=65a91488&hm=1c053e99153201d1bbdd47dd67d4c3385d429ad31156b44002ccd17b1ef4cfc1&',
    },

    {
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1197512927612244078/1856c341f93d26d422344250d86bc275_6238948751524026182.png?ex=65bb89d2&is=65a914d2&hm=1ae622e358b4d47bd695bb6d103997bd538ac7a27c34ce7384e8f3dd696941e3&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1197512927612244078/1856c341f93d26d422344250d86bc275_6238948751524026182.png?ex=65bb89d2&is=65a914d2&hm=1ae622e358b4d47bd695bb6d103997bd538ac7a27c34ce7384e8f3dd696941e3&',
    },

    {
      href: 'https://media.discordapp.net/attachments/935856252494417982/1197512616776585286/109267b71fa8001cd1047706c7d2ab24_8005829176887507312.png?ex=65bb8988&is=65a91488&hm=9b370af6f84de8a474ca5b0d50ea20601d07c1943fc8d219f702046c9546a30a&=&format=webp&quality=lossless&width=1177&height=662',
      imageSrc: 'https://media.discordapp.net/attachments/935856252494417982/1197512616776585286/109267b71fa8001cd1047706c7d2ab24_8005829176887507312.png?ex=65bb8988&is=65a91488&hm=9b370af6f84de8a474ca5b0d50ea20601d07c1943fc8d219f702046c9546a30a&=&format=webp&quality=lossless&width=1177&height=662',
    },

    {
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1197512618844373042/2fef0338477bcd4d7ea76d89fcb1e119_5344082754183604137.png?ex=65bb8989&is=65a91489&hm=a31fc5603d47ef0a9acdbcd9eb0dc59d4aef037ad8eec232dcf83ab18d463ed3&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1197512618844373042/2fef0338477bcd4d7ea76d89fcb1e119_5344082754183604137.png?ex=65bb8989&is=65a91489&hm=a31fc5603d47ef0a9acdbcd9eb0dc59d4aef037ad8eec232dcf83ab18d463ed3&',
    },

    {
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1197512614754930739/8baa6d002b5a160ba384fbbb8cc275c3_4659230081951448603.png?ex=65bb8988&is=65a91488&hm=ba9167fbb6cacac46587d1d35e8f44fb5c86af4ac208e98a7202ddeac29669e1&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1197512614754930739/8baa6d002b5a160ba384fbbb8cc275c3_4659230081951448603.png?ex=65bb8988&is=65a91488&hm=ba9167fbb6cacac46587d1d35e8f44fb5c86af4ac208e98a7202ddeac29669e1&',
    },
  ]
  
  export default function Example() {
    const [currentPage, setCurrentPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);
  
    const startIndex = (currentPage - 1) * wallpapersPerPage;
    const endIndex = startIndex + wallpapersPerPage;
    const visibleWallpapers = wallpaper.slice(startIndex, endIndex);
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
      setHasNextPage(true);
    };

    useEffect(() => {
      // Update hasNextPage based on the current page
      setHasNextPage(endIndex < wallpaper.length);
    }, [currentPage, endIndex]);
  
    return (
      <div className="bg-cover bg-center bg-image-url-chara" style={{ backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <Navbar />
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className='flex items-center justify-center'>
          <p>
            <img src = "https://cdn.discordapp.com/attachments/935856252494417982/1197467494676447252/GeneratedImage_2.png?ex=65bb5f82&is=65a8ea82&hm=8b48ba781b294c675c85251c57dc6e38757c697e252bf7ddcf071c18a37fa45a&" height={100} width={300}/>
         </p>
        </div>
          
  
          <div className="mt-9 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
            {visibleWallpapers.map((wallpaper, index) => (
              <div key={index} className="group relative">
                <div className="product-container rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                    <div className="w-full h-full relative overflow-hidden">
                      <a href={wallpaper.href}>
                        <img
                          src={wallpaper.imageSrc}
                          alt={wallpaper.name}
                          className="product-image object-cover w-full h-full transition duration-300 transform hover:scale-105"
                        />
                      </a>
                    </div>
                  </div>
              </div>
            ))}
          </div>
  
          <div className="mt-7 flex justify-center">
          <button
            onClick={handlePreviousPage}
            className="bg-blue-500 text-white py-2 px-8 rounded-md hover:bg-indigo-500"
          >
            Prev
          </button>
          
            <button
              onClick={handleNextPage}
              className="bg-blue-500 text-white py-2 px-8 rounded-md hover:bg-indigo-500 ${!hasNextPage ? 'opacity-50 cursor-not-allowed' : ''}"
              disabled={!hasNextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }