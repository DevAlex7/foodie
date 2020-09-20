import React, { useState } from 'react'

const Searchbar = ({textcolor, handleSearch, categories, selectCategory}) => {
	
	const [isOpen, changeState] = useState(false)
    return <>
      <div className={`sm:flex w-full justify-between sm:justify-between sm:items-center py-5 md:py-10 md:justify-start px-0 sm:px-2 sm:py-2 ${textcolor}`}>
			<div className="flex md:w-1/3 items-center px-2 justify-between py-2 sm:p-0">
			<div className="w-full border border-gray-300 rounded-md flex mx-2">
				<span className="flex items-center text-black p-1">
					<i className="material-icons text-3xl">search</i>
				</span>
				<input onChange={(event) => handleSearch(event.target.value)} className="w-full rounded focus:outline-none" type="text" placeholder="Busca tu platillo favorito..."/>
			</div>
			<div className="sm:hidden">
				<button onClick={()=>changeState(!isOpen)}>
					{
						isOpen ? 
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/></svg>
						: 
						<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M4 11C4.55228 11 5 11.4477 5 12V19C5 19.5523 4.55228 20 4 20C3.44772 20 3 19.5523 3 19V12C3 11.4477 3.44772 11 4 11Z" fill="black"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M4 0C4.55228 0 5 0.447715 5 1V8C5 8.55228 4.55228 9 4 9C3.44772 9 3 8.55228 3 8V1C3 0.447715 3.44772 0 4 0Z" fill="black"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M12 9C12.5523 9 13 9.44771 13 10V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V10C11 9.44771 11.4477 9 12 9Z" fill="black"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M12 0C12.5523 0 13 0.447715 13 1V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V1C11 0.447715 11.4477 0 12 0Z" fill="black"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M20 13C20.5523 13 21 13.4477 21 14V19C21 19.5523 20.5523 20 20 20C19.4477 20 19 19.5523 19 19V14C19 13.4477 19.4477 13 20 13Z" fill="black"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M20 0C20.5523 0 21 0.447715 21 1V10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10V1C19 0.447715 19.4477 0 20 0Z" fill="black"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 11.4477 0.447715 11 1 11H7C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13H1C0.447715 13 0 12.5523 0 12Z" fill="black"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M8 6C8 5.44772 8.44771 5 9 5H15C15.5523 5 16 5.44772 16 6C16 6.55228 15.5523 7 15 7H9C8.44771 7 8 6.55228 8 6Z" fill="black"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M16 14C16 13.4477 16.4477 13 17 13H23C23.5523 13 24 13.4477 24 14C24 14.5523 23.5523 15 23 15H17C16.4477 15 16 14.5523 16 14Z" fill="black"/>
						</svg>
					}
				</button>
			</div>
			</div>
			<div className={`px-2 pt-2 pb-4 ${isOpen ? 'block' : 'hidden'} md:ml-24 rounded-b-lg bg-white md:bg-transparent font-title sm:flex sm:p-0`}>
				{
					categories.map((category, index) => {
						return <a key={index} onClick={()=> selectCategory(category.id)} className="mt-1 block sm:inline-block px-2 py-1  hover:underline rounded sm:mt-0 sm:ml-2"> {category.name} </a>
					})
				}
			</div>
      </div>
    </>
}

export default Searchbar