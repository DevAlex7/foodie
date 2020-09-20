import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Hamburguer from '../assets/menu-hamburguer.png'
import Searchbar from '../components/searchbar'
import axios from 'axios'

const Menu = () => {
    const [categories, setCategories] = useState([])
    const [menu, setMenu] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        fetchMenu()
        fetchCategories()
        setIsLoading(false)
    },[])

    const fetchMenu = async () => {
        const {data} = await axios.get('https://api.elaniin.dev/api/menu')
        setMenu(data.data)
        
    }

    const selectCategory = async id => {
        console.log(id)
        const {data} = await axios.get('https://api.elaniin.dev/api/menu',{
            params:{
                category : id
            }
        })
        setMenu(data.data)
    }

    const fetchCategories = async() => {
		const {data} = await axios.get('https://api.elaniin.dev/api/categories')
		setCategories(data.data)
	}

    return <>
        <div className="w-full h-full">
            <div className="bg-black">
                <Navbar
                    textcolor="text-white"
                />
                <div className="mt-12 flex flex-wrap">
                    <div className="w-full md:w-1/2 font-title p-5 text-4xl md:px-24 text-white">
                       <div>
                       <p>
                            Cada sabor
                        </p>
                        <p>
                            es una nueva
                        </p>
                        
                        <span className='bg-yellow-foodie text-black'>
                            experiencia
                        </span>
                       </div>
                        
                    </div>
                    <div className="w-full md:w-1/2 md:-mt-16 flex md:justify-center">
                        <img className="md:h-72" src={Hamburguer}/>
                    </div>
                </div>
            </div>
            <div className="w-full px-4">
                <Searchbar
                    categories={categories}
                    selectCategory={selectCategory}
                />
                <div className="flex flex-wrap px-2">
                    {
                        isLoading ? 
                            <h1 className="font-title">Cargando menu</h1>
                        :
                        menu.length ? 
                            menu.map((item, index) => {
                                return (
                                    <div key={index} className="w-full md:w-1/4 p-2">
                                        <div className="bg-white transition duration-500 ease-in-out rounded-lg hover:shadow-2xl px-4">
                                            <img className="w-full rounded-md" src={item.image}/>
                                            <div className="px-2 py-2">
                                                <p className="font-title">{item.name}</p>
                                                <p>{item.description}</p>                                        
                                                <div className="flex justify-between py-4">
                                                    <span className="text-sm">{item.category}</span>
                                                    <span className="bg-yellow-foodie rounded font-title px-3">{item.price}</span>
                                                </div>   
                                            </div>
                                            
                                        </div>   
                                    </div>
                                )
                            })
                        :
                        <h1>No results</h1>
                    }       
                 </div>
            </div>

        </div>
    </>

}
export default Menu