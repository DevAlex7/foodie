import React from 'react'
import appstore from '../assets/appstore.png'
import playstore from '../assets/playstore.png'

const Footer  = () => {
    return <>
        <div className="py-5 divide-y divide-yellow-foodie px-8">
            <div className="flex md:px-16 justify-center md:justify-between flex-wrap">
                <div>
                    <h1 className="text-gray-500 font-title text-3xl">Foodies</h1>
                </div>
                <div>
                    <div className="inline-block m-2">
                        <img src={appstore}/>
                    </div>  
                    <div className="inline-block m-2">
                        <img src={playstore}/>
                    </div>  
                </div>
            </div>
            <div className="flex md:px-12 flex-wrap">
                <div className="inline-block text-gray-700 text-center px-4 py-2 m-2">Conoce nuestras sucursales</div>
                <div className="inline-block text-gray-700 text-center px-4 py-2 m-2">Acerca de</div>
                <div className="inline-block text-gray-700 text-center px-4 py-2 m-2">Conoce nuestras sucursales</div>
                <div className="inline-block text-gray-700 text-center px-4 py-2 m-2">¿Que hablan de nosotros?</div>
                <div className="inline-block text-gray-700 text-center px-4 py-2 m-2">Contáctanos</div>
            </div>
        </div>
    </> 
}

export default Footer