import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Item from './itemNavbar'

const Navbar = ({textcolor}) => {
    const [isOpen, changeState] = useState(false)
    return <>
      <div className={`sm:flex w-full justify-between sm:justify-between sm:items-center md:px-24 py-5 md:py-10 md:justify-start px-0 sm:px-2 sm:py-2 ${textcolor}`}>
			<div className="flex items-center px-4 justify-between py-2 sm:p-0">
			<div>
				<a href="/" className="font-bold text-xl md:text-4xl font-title">Foodies</a>
			</div>
			<div className="sm:hidden">
				<button onClick={()=>changeState(!isOpen)}>
					{
						isOpen ? 
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/></svg>
						: 
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
					}
				</button>
			</div>
			</div>
			<div className={`px-2 pt-2 pb-4 ${isOpen ? 'block' : 'hidden'} md:ml-24 rounded-b-lg bg-white md:bg-transparent font-title sm:flex sm:p-0`}>
				<a className="mt-1 block sm:inline-block px-2 py-1  hover:underline rounded sm:mt-0 sm:ml-2"> Acerca de </a>
				<a className="mt-1 block sm:inline-block px-2 py-1  hover:underline rounded sm:mt-0 sm:ml-2"> Restaurantes </a>
				<Link
				className="mt-1 block sm:inline-block px-2 py-1  hover:underline rounded sm:mt-0 sm:ml-2"
				to='/menu'
				>Menú</Link>
				<a href="/contactus" className="mt-1 block sm:inline-block px-2 py-1  hover:underline rounded sm:mt-0 sm:ml-2"> Contáctanos </a>
			</div>
      </div>
    </>
}

export default Navbar