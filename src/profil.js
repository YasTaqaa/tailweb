/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Profile = () => {
  return (
    
    <div className="bg-cover bg-center bg-image-url-1">
      <div className="w-2/3 mx-auto p-40">
        <div className="bg-gradient-to-r from-purple-300 to-blue-200 rounded-lg shadow-md p-9">
          <div className="text-center">
            <img
              src="https://cdn.discordapp.com/attachments/935856252494417982/1171668886949736518/output-onlinegiftools.gif?ex=655d84af&is=654b0faf&hm=44c5a090f94a9fef7b4789b1a929a6feb2d6b7ea96024845621ee118c7eedaf5&"
              alt="Profil Saya"
              className="w-25 h-24 mx-auto rounded-full"
            />
            <h1 className="text-2xl font-bold mt-8">Ilyas A'thaa Wat Taqaa</h1>
            <p className="text-gray-500 mt-2">NIM: 2203040112</p>
            <p className="text-gray-500 mt-2">UNIVERSITAS MUHAMMADIYAH PURWOKERTO</p>
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-lg font-semibold">Informasi Kontak: </h2>
            <ul className="mt-2">
              <li className="text-center text-gray-600 mb-2">
                Alamat: Bumiharjo Rt 02 Rw 05, Kec. Klirong, Kab. Kebumen
              </li>
              <li className="text-center text-gray-600 mb-2">
                Email: ilyasawt@gmail.com
              </li>
              <li className="text-center text-gray-600">
                Telepon: 088215604585
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Profile;
