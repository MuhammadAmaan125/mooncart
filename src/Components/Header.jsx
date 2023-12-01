import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

import "./app.css"

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)





  window.scroll(function() {
    if (this.scrollTop() > 40) {
        document.getElementByClassName("navbar").classList.add("nav-sticky");
    } else {
        document.getElementByClassName("navbar").classList.remove("nav-sticky");
    }
});

  return (
    <header className="bg-white navbar nav-sticky sticky-header">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex mr-10">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <svg width="150" height="32" viewBox="0 0 482 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M113.73 37.91V60.25H105.04V18.97H113.73V26.5C114.97 23.97 116.85 21.97 119.35 20.53C121.86 19.08 124.56 18.36 127.46 18.36C133.98 18.36 138.4 21.05 140.73 26.43C144.82 21.05 149.91 18.36 156.01 18.36C160.67 18.36 164.43 19.78 167.3 22.63C170.17 25.48 171.61 29.59 171.61 34.97V60.26H162.92V37.6C162.92 30 159.76 26.19 153.45 26.19C150.5 26.19 147.93 27.13 145.73 29.02C143.53 30.91 142.38 33.66 142.28 37.28V60.25H133.59V37.6C133.59 33.67 132.89 30.79 131.49 28.95C130.09 27.11 127.89 26.2 124.9 26.2C121.9 26.2 119.29 27.2 117.06 29.19C114.84 31.18 113.73 34.08 113.73 37.91Z" fill="#24262B"/>
<path d="M218.24 54.71C214.1 58.82 208.93 60.88 202.72 60.88C196.51 60.88 191.34 58.82 187.2 54.71C183.06 50.6 180.99 45.57 180.99 39.62C180.99 33.67 183.06 28.64 187.2 24.53C191.34 20.42 196.51 18.36 202.72 18.36C208.93 18.36 214.1 20.42 218.24 24.53C222.38 28.64 224.45 33.67 224.45 39.62C224.45 45.57 222.38 50.6 218.24 54.71ZM193.37 49.36C195.83 51.87 198.94 53.12 202.72 53.12C206.5 53.12 209.61 51.87 212.07 49.36C214.53 46.85 215.76 43.61 215.76 39.62C215.76 35.64 214.53 32.39 212.07 29.88C209.61 27.37 206.5 26.12 202.72 26.12C198.94 26.12 195.83 27.37 193.37 29.88C190.91 32.39 189.68 35.63 189.68 39.62C189.69 43.6 190.92 46.85 193.37 49.36Z" fill="#24262B"/>
<path d="M268.82 54.71C264.68 58.82 259.51 60.88 253.3 60.88C247.09 60.88 241.92 58.82 237.78 54.71C233.64 50.6 231.57 45.57 231.57 39.62C231.57 33.67 233.64 28.64 237.78 24.53C241.92 20.42 247.09 18.36 253.3 18.36C259.51 18.36 264.68 20.42 268.82 24.53C272.96 28.64 275.03 33.67 275.03 39.62C275.03 45.57 272.96 50.6 268.82 54.71ZM243.96 49.36C246.42 51.87 249.53 53.12 253.31 53.12C257.09 53.12 260.2 51.87 262.66 49.36C265.12 46.85 266.35 43.61 266.35 39.62C266.35 35.64 265.12 32.39 262.66 29.88C260.2 27.37 257.09 26.12 253.31 26.12C249.53 26.12 246.42 27.37 243.96 29.88C241.5 32.39 240.27 35.63 240.27 39.62C240.27 43.6 241.5 46.85 243.96 49.36Z" fill="#24262B"/>
<path d="M293.57 37.91V60.25H284.88V18.97H293.57V26.5C294.97 23.97 296.89 21.97 299.35 20.53C301.81 19.08 304.46 18.36 307.3 18.36C311.96 18.36 315.72 19.78 318.59 22.63C321.46 25.48 322.9 29.59 322.9 34.97V60.26H314.21V37.6C314.21 30 311.05 26.19 304.74 26.19C301.74 26.19 299.13 27.19 296.9 29.18C294.69 31.18 293.57 34.08 293.57 37.91Z" fill="#24262B"/>
<path d="M353.32 60.88C347.58 60.88 342.64 58.93 338.5 55.02C334.36 51.12 332.29 46.01 332.29 39.7C332.29 33.39 334.45 28.26 338.77 24.3C343.09 20.34 348.35 18.36 354.56 18.36C360.77 18.36 366.02 20.51 370.31 24.8L365.19 31.08C361.62 27.98 358.02 26.42 354.4 26.42C350.78 26.42 347.64 27.62 344.97 30.03C342.31 32.43 340.97 35.54 340.97 39.34C340.97 43.14 342.29 46.36 344.93 49C347.57 51.64 350.81 52.96 354.67 52.96C358.52 52.96 362.16 51.2 365.57 47.68L370.69 53.27C365.68 58.34 359.88 60.88 353.32 60.88Z" fill="#24262B"/>
<path d="M412.82 60.26H404.91V54.75C401.5 58.84 396.92 60.88 391.18 60.88C386.89 60.88 383.33 59.67 380.51 57.23C377.69 54.8 376.28 51.55 376.28 47.49C376.28 43.43 377.78 40.39 380.78 38.37C383.78 36.35 387.84 35.34 392.96 35.34H404.21V33.79C404.21 28.31 401.16 25.57 395.05 25.57C391.22 25.57 387.24 26.97 383.1 29.76L379.22 24.33C384.24 20.35 389.93 18.36 396.29 18.36C401.15 18.36 405.12 19.59 408.2 22.05C411.28 24.51 412.82 28.37 412.82 33.65V60.26ZM404.13 44.89V41.4H394.35C388.09 41.4 384.96 43.37 384.96 47.3C384.96 49.32 385.74 50.86 387.29 51.92C388.84 52.98 391 53.51 393.77 53.51C396.54 53.51 398.95 52.73 401.02 51.18C403.1 49.63 404.13 47.53 404.13 44.89Z" fill="#24262B"/>
<path d="M446.57 27.13C442.28 27.13 439.04 28.53 436.87 31.32C434.7 34.11 433.61 37.86 433.61 42.57V60.26H424.92V18.98H433.61V27.28C435.01 24.69 436.91 22.57 439.31 20.92C441.72 19.27 444.26 18.41 446.95 18.36L447.03 27.13C446.88 27.13 446.73 27.13 446.57 27.13Z" fill="#24262B"/>
<path d="M466.43 25.96V46.91C466.43 48.88 466.95 50.44 467.98 51.6C469.01 52.76 470.46 53.35 472.33 53.35C474.19 53.35 475.98 52.45 477.68 50.63L481.25 56.76C478.2 59.5 474.82 60.87 471.13 60.87C467.43 60.87 464.28 59.59 461.66 57.03C459.05 54.47 457.74 51.02 457.74 46.67V25.95H452.54V18.97H457.74V6.01001H466.43V18.97H477.29V25.95H466.43V25.96Z" fill="#24262B"/>
<path d="M67.74 14.41L66.24 18.18L62.26 19.71L66.24 21.3L67.74 25.25L69.15 21.3L73.28 19.83L69.27 18.36L67.74 14.41Z" fill="#24262B"/>
<path d="M57.88 0.910034L56.74 3.77002L53.71 4.93002L56.74 6.14005L57.88 9.14005L58.95 6.14005L62.08 5.02002L59.04 3.91003L57.88 0.910034Z" fill="#24262B"/>
<path d="M68.92 34.62C54.08 34.62 42.05 22.59 42.05 7.75C42.05 6.17 42.19 4.63 42.45 3.13C34.57 7.36 29.21 15.68 29.21 25.25C29.21 39.11 40.45 50.35 54.31 50.35C65.48 50.35 74.94 43.05 78.2 32.97C75.32 34.04 72.19 34.62 68.92 34.62Z" fill="#24262B"/>
<path d="M39.6599 71.22C42.6865 71.22 45.14 68.7665 45.14 65.74C45.14 62.7135 42.6865 60.26 39.6599 60.26C36.6334 60.26 34.1799 62.7135 34.1799 65.74C34.1799 68.7665 36.6334 71.22 39.6599 71.22Z" fill="#24262B"/>
<path d="M39.86 71.18H32.29C31.97 71.18 31.71 70.92 31.71 70.6C31.71 70.28 31.97 70.02 32.29 70.02H39.86C40.18 70.02 40.44 70.28 40.44 70.6C40.44 70.92 40.18 71.18 39.86 71.18Z" fill="#24262B"/>
<path d="M66.8899 71.22C69.9164 71.22 72.3699 68.7665 72.3699 65.74C72.3699 62.7135 69.9164 60.26 66.8899 60.26C63.8634 60.26 61.4099 62.7135 61.4099 65.74C61.4099 68.7665 63.8634 71.22 66.8899 71.22Z" fill="#24262B"/>
<path d="M67.0799 71.18H59.5099C59.1899 71.18 58.9299 70.92 58.9299 70.6C58.9299 70.28 59.1899 70.02 59.5099 70.02H67.0799C67.3999 70.02 67.6599 70.28 67.6599 70.6C67.6599 70.92 67.3999 71.18 67.0799 71.18Z" fill="#24262B"/>
<path d="M84.4501 23.09C83.5301 23.41 82.9701 24.32 82.9601 25.3C82.9401 41.08 70.1001 53.91 54.3101 53.91C39.7801 53.91 28.6801 44.77 26.0901 30.16L25.8101 28.97L23.9501 18.4C23.3901 15.77 21.0601 13.89 18.3701 13.89H2.18011C1.04011 13.89 0.120117 14.81 0.120117 15.95C0.120117 17.09 1.04011 18.01 2.18011 18.01H15.7701C17.8001 18.01 19.5601 19.43 19.9801 21.41L21.4701 30.21C24.5601 47.37 37.6301 58.52 54.3101 58.52C72.6501 58.52 87.5701 43.6 87.5701 25.26C87.5801 23.71 86.0701 22.52 84.4501 23.09Z" fill="#24262B"/>
</svg>
          </a>
        </div>
       
        <Popover.Group className="hidden lg:flex md:gap-x-12">
          


        <Link to="/">       <a className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900' >  HOME</a>
</Link>


 <Link to="/shop">       <a className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900' >  SHOP</a>
</Link>


          <Link to="/blog">      <a   className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>  BLOG</a>  
</Link>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
         PAGES
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link to="/ContactUs">  <a href="#"   className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'> CONTACT US  </a>   </Link>

        </Popover.Group>
        <div className="flex lg:flex-1 md:justify-end md:gap-5 ">
          <a href="#" className="md:flex hidden text-sm font-semibold leading-6 text-gray-900 ">
            LOGIN / REGISTER 
          </a> 
<div className='hidden md:flex justify-between gap-3 '>
<a  >
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="10.0535" cy="10.55" r="7.49047" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
											<path d="M15.2632 16.1487L18.1999 19.0778" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
										</svg>
									</a>  
                                    <a>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M2.64119 10.4097C1.74702 7.61808 2.79202 4.42724 5.72285 3.48308C7.26452 2.98558 8.96619 3.27891 10.2479 4.24308C11.4604 3.30558 13.2245 2.98891 14.7645 3.48308C17.6954 4.42724 18.747 7.61808 17.8537 10.4097C16.462 14.8347 10.2479 18.2431 10.2479 18.2431C10.2479 18.2431 4.07952 14.8864 2.64119 10.4097Z" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
											<path d="M13.5813 6.32781C14.473 6.61614 15.103 7.41197 15.1788 8.34614" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
										</svg>
                                    </a> 
                                    <a className='flex'>
										<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M1.08374 2.61947C1.08374 2.27429 1.36356 1.99447 1.70874 1.99447H3.29314C3.91727 1.99447 4.4722 2.39163 4.67352 2.98239L5.06379 4.1276H15.4584C17.6446 4.1276 19.4168 5.89981 19.4168 8.08593V11.5379C19.4168 13.7241 17.6446 15.4963 15.4584 15.4963H9.22182C7.30561 15.4963 5.66457 14.1237 5.32583 12.2377L4.00967 4.90953L3.49034 3.3856C3.46158 3.30121 3.3823 3.24447 3.29314 3.24447H1.70874C1.36356 3.24447 1.08374 2.96465 1.08374 2.61947ZM5.36374 5.3776L6.55614 12.0167C6.78791 13.3072 7.91073 14.2463 9.22182 14.2463H15.4584C16.9542 14.2463 18.1668 13.0337 18.1668 11.5379V8.08593C18.1668 6.59016 16.9542 5.3776 15.4584 5.3776H5.36374Z" fill="gray"></path>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M8.16479 17.8278C8.16479 17.1374 8.72444 16.5778 9.4148 16.5778H9.42313C10.1135 16.5778 10.6731 17.1374 10.6731 17.8278C10.6731 18.5182 10.1135 19.0778 9.42313 19.0778H9.4148C8.72444 19.0778 8.16479 18.5182 8.16479 17.8278Z" fill="grat"></path>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8315 17.8278C14.8315 17.1374 15.3912 16.5778 16.0815 16.5778H16.0899C16.7802 16.5778 17.3399 17.1374 17.3399 17.8278C17.3399 18.5182 16.7802 19.0778 16.0899 19.0778H16.0815C15.3912 19.0778 14.8315 18.5182 14.8315 17.8278Z" fill="gray"></path>
										</svg>
										<span class="">5</span>
									</a>
</div>

<div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 bg-black text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        </div>


      
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <svg width="150" height="32" viewBox="0 0 482 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M113.73 37.91V60.25H105.04V18.97H113.73V26.5C114.97 23.97 116.85 21.97 119.35 20.53C121.86 19.08 124.56 18.36 127.46 18.36C133.98 18.36 138.4 21.05 140.73 26.43C144.82 21.05 149.91 18.36 156.01 18.36C160.67 18.36 164.43 19.78 167.3 22.63C170.17 25.48 171.61 29.59 171.61 34.97V60.26H162.92V37.6C162.92 30 159.76 26.19 153.45 26.19C150.5 26.19 147.93 27.13 145.73 29.02C143.53 30.91 142.38 33.66 142.28 37.28V60.25H133.59V37.6C133.59 33.67 132.89 30.79 131.49 28.95C130.09 27.11 127.89 26.2 124.9 26.2C121.9 26.2 119.29 27.2 117.06 29.19C114.84 31.18 113.73 34.08 113.73 37.91Z" fill="#24262B"/>
<path d="M218.24 54.71C214.1 58.82 208.93 60.88 202.72 60.88C196.51 60.88 191.34 58.82 187.2 54.71C183.06 50.6 180.99 45.57 180.99 39.62C180.99 33.67 183.06 28.64 187.2 24.53C191.34 20.42 196.51 18.36 202.72 18.36C208.93 18.36 214.1 20.42 218.24 24.53C222.38 28.64 224.45 33.67 224.45 39.62C224.45 45.57 222.38 50.6 218.24 54.71ZM193.37 49.36C195.83 51.87 198.94 53.12 202.72 53.12C206.5 53.12 209.61 51.87 212.07 49.36C214.53 46.85 215.76 43.61 215.76 39.62C215.76 35.64 214.53 32.39 212.07 29.88C209.61 27.37 206.5 26.12 202.72 26.12C198.94 26.12 195.83 27.37 193.37 29.88C190.91 32.39 189.68 35.63 189.68 39.62C189.69 43.6 190.92 46.85 193.37 49.36Z" fill="#24262B"/>
<path d="M268.82 54.71C264.68 58.82 259.51 60.88 253.3 60.88C247.09 60.88 241.92 58.82 237.78 54.71C233.64 50.6 231.57 45.57 231.57 39.62C231.57 33.67 233.64 28.64 237.78 24.53C241.92 20.42 247.09 18.36 253.3 18.36C259.51 18.36 264.68 20.42 268.82 24.53C272.96 28.64 275.03 33.67 275.03 39.62C275.03 45.57 272.96 50.6 268.82 54.71ZM243.96 49.36C246.42 51.87 249.53 53.12 253.31 53.12C257.09 53.12 260.2 51.87 262.66 49.36C265.12 46.85 266.35 43.61 266.35 39.62C266.35 35.64 265.12 32.39 262.66 29.88C260.2 27.37 257.09 26.12 253.31 26.12C249.53 26.12 246.42 27.37 243.96 29.88C241.5 32.39 240.27 35.63 240.27 39.62C240.27 43.6 241.5 46.85 243.96 49.36Z" fill="#24262B"/>
<path d="M293.57 37.91V60.25H284.88V18.97H293.57V26.5C294.97 23.97 296.89 21.97 299.35 20.53C301.81 19.08 304.46 18.36 307.3 18.36C311.96 18.36 315.72 19.78 318.59 22.63C321.46 25.48 322.9 29.59 322.9 34.97V60.26H314.21V37.6C314.21 30 311.05 26.19 304.74 26.19C301.74 26.19 299.13 27.19 296.9 29.18C294.69 31.18 293.57 34.08 293.57 37.91Z" fill="#24262B"/>
<path d="M353.32 60.88C347.58 60.88 342.64 58.93 338.5 55.02C334.36 51.12 332.29 46.01 332.29 39.7C332.29 33.39 334.45 28.26 338.77 24.3C343.09 20.34 348.35 18.36 354.56 18.36C360.77 18.36 366.02 20.51 370.31 24.8L365.19 31.08C361.62 27.98 358.02 26.42 354.4 26.42C350.78 26.42 347.64 27.62 344.97 30.03C342.31 32.43 340.97 35.54 340.97 39.34C340.97 43.14 342.29 46.36 344.93 49C347.57 51.64 350.81 52.96 354.67 52.96C358.52 52.96 362.16 51.2 365.57 47.68L370.69 53.27C365.68 58.34 359.88 60.88 353.32 60.88Z" fill="#24262B"/>
<path d="M412.82 60.26H404.91V54.75C401.5 58.84 396.92 60.88 391.18 60.88C386.89 60.88 383.33 59.67 380.51 57.23C377.69 54.8 376.28 51.55 376.28 47.49C376.28 43.43 377.78 40.39 380.78 38.37C383.78 36.35 387.84 35.34 392.96 35.34H404.21V33.79C404.21 28.31 401.16 25.57 395.05 25.57C391.22 25.57 387.24 26.97 383.1 29.76L379.22 24.33C384.24 20.35 389.93 18.36 396.29 18.36C401.15 18.36 405.12 19.59 408.2 22.05C411.28 24.51 412.82 28.37 412.82 33.65V60.26ZM404.13 44.89V41.4H394.35C388.09 41.4 384.96 43.37 384.96 47.3C384.96 49.32 385.74 50.86 387.29 51.92C388.84 52.98 391 53.51 393.77 53.51C396.54 53.51 398.95 52.73 401.02 51.18C403.1 49.63 404.13 47.53 404.13 44.89Z" fill="#24262B"/>
<path d="M446.57 27.13C442.28 27.13 439.04 28.53 436.87 31.32C434.7 34.11 433.61 37.86 433.61 42.57V60.26H424.92V18.98H433.61V27.28C435.01 24.69 436.91 22.57 439.31 20.92C441.72 19.27 444.26 18.41 446.95 18.36L447.03 27.13C446.88 27.13 446.73 27.13 446.57 27.13Z" fill="#24262B"/>
<path d="M466.43 25.96V46.91C466.43 48.88 466.95 50.44 467.98 51.6C469.01 52.76 470.46 53.35 472.33 53.35C474.19 53.35 475.98 52.45 477.68 50.63L481.25 56.76C478.2 59.5 474.82 60.87 471.13 60.87C467.43 60.87 464.28 59.59 461.66 57.03C459.05 54.47 457.74 51.02 457.74 46.67V25.95H452.54V18.97H457.74V6.01001H466.43V18.97H477.29V25.95H466.43V25.96Z" fill="#24262B"/>
<path d="M67.74 14.41L66.24 18.18L62.26 19.71L66.24 21.3L67.74 25.25L69.15 21.3L73.28 19.83L69.27 18.36L67.74 14.41Z" fill="#24262B"/>
<path d="M57.88 0.910034L56.74 3.77002L53.71 4.93002L56.74 6.14005L57.88 9.14005L58.95 6.14005L62.08 5.02002L59.04 3.91003L57.88 0.910034Z" fill="#24262B"/>
<path d="M68.92 34.62C54.08 34.62 42.05 22.59 42.05 7.75C42.05 6.17 42.19 4.63 42.45 3.13C34.57 7.36 29.21 15.68 29.21 25.25C29.21 39.11 40.45 50.35 54.31 50.35C65.48 50.35 74.94 43.05 78.2 32.97C75.32 34.04 72.19 34.62 68.92 34.62Z" fill="#24262B"/>
<path d="M39.6599 71.22C42.6865 71.22 45.14 68.7665 45.14 65.74C45.14 62.7135 42.6865 60.26 39.6599 60.26C36.6334 60.26 34.1799 62.7135 34.1799 65.74C34.1799 68.7665 36.6334 71.22 39.6599 71.22Z" fill="#24262B"/>
<path d="M39.86 71.18H32.29C31.97 71.18 31.71 70.92 31.71 70.6C31.71 70.28 31.97 70.02 32.29 70.02H39.86C40.18 70.02 40.44 70.28 40.44 70.6C40.44 70.92 40.18 71.18 39.86 71.18Z" fill="#24262B"/>
<path d="M66.8899 71.22C69.9164 71.22 72.3699 68.7665 72.3699 65.74C72.3699 62.7135 69.9164 60.26 66.8899 60.26C63.8634 60.26 61.4099 62.7135 61.4099 65.74C61.4099 68.7665 63.8634 71.22 66.8899 71.22Z" fill="#24262B"/>
<path d="M67.0799 71.18H59.5099C59.1899 71.18 58.9299 70.92 58.9299 70.6C58.9299 70.28 59.1899 70.02 59.5099 70.02H67.0799C67.3999 70.02 67.6599 70.28 67.6599 70.6C67.6599 70.92 67.3999 71.18 67.0799 71.18Z" fill="#24262B"/>
<path d="M84.4501 23.09C83.5301 23.41 82.9701 24.32 82.9601 25.3C82.9401 41.08 70.1001 53.91 54.3101 53.91C39.7801 53.91 28.6801 44.77 26.0901 30.16L25.8101 28.97L23.9501 18.4C23.3901 15.77 21.0601 13.89 18.3701 13.89H2.18011C1.04011 13.89 0.120117 14.81 0.120117 15.95C0.120117 17.09 1.04011 18.01 2.18011 18.01H15.7701C17.8001 18.01 19.5601 19.43 19.9801 21.41L21.4701 30.21C24.5601 47.37 37.6301 58.52 54.3101 58.52C72.6501 58.52 87.5701 43.6 87.5701 25.26C87.5801 23.71 86.0701 22.52 84.4501 23.09Z" fill="#24262B"/>
</svg>

            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 bg-black text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
             
            <Link to="/">
            <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                HOME
                </a>
            </Link>
               
<Link to="/shop">
<a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  SHOP
                </a>
</Link>

               

<Link to="/blog"> <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                 BLG
                </a></Link>

                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
               PAGES
                </a>

                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
 <Link to="/ContactUs">  <a href="#"   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"> CONTACT US  </a>   </Link>
                </a>

              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}