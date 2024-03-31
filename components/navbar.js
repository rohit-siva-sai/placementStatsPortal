import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 z-50 shadow bg-white shadow-blue-300 ">
    <header className="text-gray-700  z-50 body-font">
      <div className="container mx-auto flex flex-wrap p-2 px-6 flex-col md:flex-row items-center">
        <div className="flex flex-row items-center ">
          <div>
            <picture>
              <img src="https://th.bing.com/th/id/OIG1.CPFhh3OU9YYT8zRA04QT?pid=ImgGn" alt="" className="w-12 rounded-full" />
            </picture>
          </div>
          <Link href={"/"}><div className="flex title-font font-medium items-center text-gray-700 mb-4 md:mb-0">
            <span className="ml-3 font-bold text-2xl ">Placement Stats</span>
          </div></Link>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <div className="mr-8 hover:text-blue-500  font-semibold">Home</div>
          </Link>
          <Link href="/companies">
            <div className="mr-8 hover:text-blue-500  font-semibold">Companies</div>
          </Link>
          <Link href="/placementDesk">
            <div className="mr-8 hover:text-blue-500  font-semibold">Placement cell</div>
          </Link>
          <Link href="/alumniProfiles">
            <div className="mr-8 hover:text-blue-500  font-semibold">Alumni Profile</div>
          </Link>
          <Link href="/newsandEvents">
            <div className="mr-8 hover:text-blue-500  font-semibold">News and Events</div>
          </Link>
        </nav>
        {/* <Link href={"/model"} ><div className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 text-white rounded text-base mt-4 mr-2 md:mt-0">
          profile 
        </div></Link> */}
      </div>
    </header>
  </div>
  )
}

export default Navbar
