import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Characters', href: '/Product' },
    { name: 'Trailer', href: '/Features' },
    { name: 'Music Video', href: '/video' },
    { name: 'Wallpapers', href: '/wallpaper' },
  ]


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(null);


  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50" class="bg-gradient-to-r from-purple-300 to-blue-200">
        <nav className="flex items-center justify-between p-4" aria-label="Global">
          <div className="flex px-9">
            <a href="profil" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://cdn.discordapp.com/attachments/935856252494417982/1171668886949736518/output-onlinegiftools.gif?ex=655d84af&is=654b0faf&hm=44c5a090f94a9fef7b4789b1a929a6feb2d6b7ea96024845621ee118c7eedaf5&"
                alt=""
              />             
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item, index) => (
              <a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 text-gray-900 border-b-2 border-transparent 
                ${index === activeTab ? 'border-b-2 border-blue-500' : ''}
                hover:text-blue-500 hover:border-b-2 hover:border-blue-500 `}
              onClick={() => setActiveTab(index)}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            
          </div>
            <div class="relative flex items-right w-300 h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div class="grid place-items-center h-full w-5 text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>

                    <input
                      class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                      type="text"
                      id="search"
                      placeholder="Search..."
                    />
            </div>
        </nav>
        <div className="container mx-auto">
          {navigation.map((item, index) => (
            <div key={item.name} className={`${index === activeTab ? 'block' : 'hidden'}`}>  
            </div>
          ))}
        </div>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="Features" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://cdn.discordapp.com/attachments/935856252494417982/1171668886949736518/output-onlinegiftools.gif?ex=655d84af&is=654b0faf&hm=44c5a090f94a9fef7b4789b1a929a6feb2d6b7ea96024845621ee118c7eedaf5&"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>


    </div>
  )
}
