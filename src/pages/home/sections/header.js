import React from 'react'
import Hamburguer from '../../../assets/hero_hamburger.png'
import { ArrowForward } from '@material-ui/icons';
import mustard from '../../../assets/Subtract.png'
import Navbar from '../../../components/navbar'
const Header = () => {
    return <>
        <div className="w-full h-80 md:h-auto">
            <div className="flex relative justify-end">
                <img src={mustard}/>
                <div className="absolute">
                    <Navbar
                    textcolor="text-black"
                    />
                    <div className="flex flex-wrap md:mt-24 w-full">
                        <div className="w-full order-last md:order-first px-4 md:w-1/2 md:py-16 md:px-24">
                            <ul className="list-disc list-inside text-4xl">
                                <p className="font-title">Un nuevo</p>
                                <p className="font-title">sabor esta en</p>
                                <div className="font-title absolute h-8 bg-yellow-foodie w-64 -mx-4 pl-4">
                                    <p className="-mt-4">la ciudad</p>
                                </div>
                                <div className="mt-10 text-gray-500 text-2xl font-thin"> 
                                <p>
                                    Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.
                                </p>
                                </div>
                            </ul>
                            <button className="mt-20 font-title flex items-center">
                                Encuentranos 
                                <div className="ml-5">
                                <ArrowForward/>
                                </div>
                            </button>
                        </div>
                        <div className="w-full order-first md:order-last md:w-1/2 flex justify-center">
                            <img src={Hamburguer} className="h-48 md:h-76"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}
export default Header 