import React from 'react'
import photo from '../../../assets/photo.png'
import { ArrowForward } from '@material-ui/icons';

const KnowStore = () => {
    return <> 
        <div className="w-full flex flex-wrap mt-16 md:mt-0">
            <div className="w-full sm:w-full md:w-1/2">
                <figure className="bg-black relative">
                    <img src={photo} className="opacity-100 bg-cover w-full"/>
                    <div className="absolute bottom-0 right-0 pr-20 pb-10 text-right text-6xl uppercase">
                    <p className="font-title text-3xl text-white">La comida es <br></br>
                        <span className="text-yellow-foodie">Nuestro arte</span>
                    </p>
                    </div>
                </figure>
            </div>
            <div className="w-full md:w-1/2 py-5">
                <figure className="md:relative">
                    <svg className="hidden md:block" viewBox="0 0 830 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.624512 217.704C112.447 209.842 178.953 117.622 276.688 76.0659C361.139 40.1576 428.335 67.254 429.675 161.049C430.48 217.444 413.658 268.76 373.283 309.813C254.83 430.258 192.331 252.3 299.737 179.875C369.258 132.997 461.374 192.146 531.813 204.332C644.917 223.9 767.344 216.36 786.586 78.0014C794.494 21.1398 725.228 -9.9287 680.313 26.7124C580.132 108.44 598.746 279.748 745.766 244.009C857.412 216.868 931.94 102.993 1013.56 29.1757C1022.39 21.1931 1039.13 0.76001 1052.09 0.76001" stroke="#FFD600" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                        <div className="md:absolute top-0 left-0 p-2 md:pt-20 md:pl-10">
                            <p className="font-title">¿Quién es foodies?</p>
                            <p className="mt-3 text-gray-600">Elit irure ad nulla id elit laborum nostrud mollit irure. Velit reprehenderit sunt nulla enim aliquip duis tempor est culpa fugiat consequat culpa consectetur Lorem. Reprehenderit dolore culpa irure eiusmod minim occaecat et id minim ullamco. </p>
                            <button className="mt-20 font-title flex items-center">
                            Contáctanos 
                            <div className="ml-5">
                            <ArrowForward/>
                            </div>
                            </button>
                        </div>
                    </div>
                </figure>
            </div>
        </div>
    </>
}
export default KnowStore