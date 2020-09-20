import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../components/navbar'
import img from '../assets/Subtract.png'
import photo from '../assets/photo.png'
import Hamburguer from '../assets/hero_hamburger.png'
import { ArrowForward } from '@material-ui/icons';
import MapContainer from '../components/map'
import axios from 'axios'
import Input from '../components/input'
import TextArea from '../components/textArea'
import appstore from '../assets/appstore.png'
import playstore from '../assets/playstore.png'


const Landing = () => {
      
    const [locations, setLocations] = useState([])
    const [isLoading, SetLoading] = useState(true) 

    const fetchLocations = async() => {
        const result = await axios.get('https://api.elaniin.dev/api/locations?type=takeaway') 
        
        setLocations(result.data.data)
        SetLoading(false)
    }

    useEffect(()=> {
        fetchLocations()
    }, [])

    

    return <>
        <div className="h-full w-full">
            <Navbar/>
            <div className="flex">
                <div className="mt-32 flex flex-wrap md:mt-24 w-full">
                    <div className="w-full order-last md:order-first px-4 md:w-1/2 md:py-16 md:px-24">
                        <ul class="list-disc list-inside text-4xl">
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
            <div className="w-full flex flex-wrap">
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
                <div className="w-full md:w-1/2">
                    <figure className="relative">
                        <svg viewBox="0 0 830 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.624512 217.704C112.447 209.842 178.953 117.622 276.688 76.0659C361.139 40.1576 428.335 67.254 429.675 161.049C430.48 217.444 413.658 268.76 373.283 309.813C254.83 430.258 192.331 252.3 299.737 179.875C369.258 132.997 461.374 192.146 531.813 204.332C644.917 223.9 767.344 216.36 786.586 78.0014C794.494 21.1398 725.228 -9.9287 680.313 26.7124C580.132 108.44 598.746 279.748 745.766 244.009C857.412 216.868 931.94 102.993 1013.56 29.1757C1022.39 21.1931 1039.13 0.76001 1052.09 0.76001" stroke="#FFD600" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div>
                            <div className="absolute top-0 left-0 p-2 md:pt-20 md:pl-10">
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
            <div className="flex flex-wrap w-full">
                <div className="w-full md:w-1/2">
                    <h1 className="font-title flex justify-center text-4xl">Estamos para ti</h1>
                    <div className="w-full flex">
                        <div className="w-1/2 bg-black flex justify-center py-5 items-center font-title">
                            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.4196 5.99095H17.9292L18.5707 1.90466L20.7937 2.33491C21.111 2.39366 21.4146 2.19366 21.4766 1.88416C21.5384 1.57416 21.3336 1.2729 21.0183 1.21215L18.2013 0.666647C18.0458 0.636396 17.8852 0.670647 17.7552 0.760147C17.6256 0.849398 17.5387 0.9869 17.5143 1.14115L16.7531 5.99095H10.5938C10.2724 5.99095 10.0124 6.2467 10.0124 6.5632V8.90222C10.0124 9.21848 10.2724 9.47448 10.5938 9.47448H11.0928L11.2472 10.9807C10.466 10.8545 9.57466 10.7825 8.5548 10.7825C0.463739 10.7825 0.370748 15.3175 0.370748 15.5105C0.370748 15.9633 0.539962 16.3825 0.825544 16.7345C-0.103867 18.2186 -0.261902 19.4916 0.41953 20.2643C0.635749 20.5096 0.923618 20.6738 1.25925 20.7738C1.20132 21.1988 1.19523 21.6973 1.30194 22.2269C0.928191 22.4806 0.681229 22.9124 0.681229 23.4016V24.2436C0.681229 25.0224 1.30524 25.6559 2.07179 25.6559H15.0358C15.7449 25.6559 16.325 25.1134 16.4103 24.4174H21.8593C22.158 24.4174 22.4078 24.1949 22.4378 23.9026L23.9196 9.47398H24.4193C24.7407 9.47398 25.0009 9.21823 25.0009 8.90172V6.5627C25.0012 6.2467 24.741 5.99095 24.4196 5.99095ZM11.1751 7.13521H23.8383V8.33022H23.3941H11.6187H11.1753V7.13521H11.1751ZM8.5548 11.9265C15.4225 11.9265 15.5724 15.3698 15.5752 15.5103C15.5752 16.1013 14.8467 16.6008 13.9842 16.6008H3.12443C2.26184 16.6008 1.5334 16.1013 1.5334 15.5158C1.53645 15.3695 1.68635 11.9265 8.5548 11.9265ZM1.74708 17.4338C2.1536 17.6266 2.62034 17.7451 3.12443 17.7451H13.9844C14.4913 17.7451 14.9603 17.6253 15.3686 17.4311C16.0391 18.5533 16.0381 19.2488 15.8011 19.5148C15.4929 19.8601 14.5208 19.8838 13.0385 19.1546C11.7872 18.5396 10.8412 19.0296 10.0803 19.4246C9.58457 19.6818 9.11631 19.9251 8.5548 19.9251C7.99329 19.9251 7.52478 19.6818 7.02856 19.4246C6.26786 19.0301 5.32295 18.5401 4.07035 19.1546C2.59061 19.8831 1.5954 19.8523 1.29787 19.5143C1.04532 19.2278 1.10757 18.4893 1.74708 17.4338ZM2.43867 21.9888C2.35762 21.5766 2.36957 21.1843 2.42064 20.8548C3.06574 20.7871 3.79798 20.5683 4.5907 20.1783C5.27366 19.8413 5.71143 20.0346 6.48662 20.4368C7.05829 20.7336 7.70568 21.0691 8.55505 21.0691C9.40443 21.0691 10.0518 20.7333 10.6235 20.4368C11.3979 20.0358 11.8347 19.8406 12.5186 20.1783C13.3195 20.5721 14.0497 20.7933 14.6897 20.8613C14.74 21.1921 14.7515 21.5803 14.6709 21.9888H2.43867ZM15.036 24.5119H2.07179C1.94627 24.5119 1.84414 24.3919 1.84414 24.2439V23.4019C1.84414 23.2539 1.94627 23.1334 2.07179 23.1334H15.0358C15.1623 23.1334 15.265 23.2539 15.265 23.4019V23.8429C15.265 23.8439 15.2644 23.8446 15.2644 23.8456C15.2644 23.8469 15.265 23.8474 15.265 23.8486V24.2441C15.2652 24.3916 15.1626 24.5119 15.036 24.5119ZM21.3338 23.2734H16.4149C16.3758 22.8381 16.1474 22.4576 15.8066 22.2269C15.9134 21.7001 15.9078 21.2043 15.8503 20.7776C16.1776 20.6766 16.4591 20.5121 16.6761 20.2686C17.3601 19.4988 17.2091 18.2211 16.2884 16.727C16.5704 16.3763 16.7381 15.9595 16.7381 15.5103C16.7381 15.355 16.6741 12.393 12.4432 11.2387L12.262 9.47448H22.7511L21.3338 23.2734Z" fill="white"/>
                            </svg>
                            <span className="text-white ml-4">Para llevar</span>
                        </div>
                        <div className="w-1/2">
                            <div className="flex justify-center py-5 items-center font-title">
                                <svg width="42" height="26" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.43478 0.655901C4.93451 0.655901 4.52898 1.05565 4.52898 1.54876C4.52898 2.04187 4.93451 2.44161 5.43478 2.44161H28.0373L32.7502 9.62629C32.8578 9.78656 33.0194 9.91094 33.2031 9.97509L39.8551 12.4304V21.1916H37.1094C36.8864 19.1867 35.1522 17.6202 33.0616 17.6202C30.971 17.6202 29.2368 19.1867 29.0138 21.1916H17.1818C16.9588 19.1867 15.2247 17.6202 13.1341 17.6202C11.0434 17.6202 9.30928 19.1867 9.08628 21.1916H6.34058V15.8345C6.34058 15.3413 5.93505 14.9416 5.43478 14.9416C4.93451 14.9416 4.52898 15.3413 4.52898 15.8345V22.0845C4.52903 22.552 4.96051 22.9773 5.43478 22.9773H9.29859C9.86241 24.5328 11.3706 25.6559 13.1341 25.6559C14.8975 25.6559 16.4057 24.5328 16.9696 22.9773H29.2261C29.7899 24.5328 31.2981 25.6559 33.0616 25.6559C34.825 25.6559 36.3332 24.5328 36.8971 22.9773H40.7609C41.2351 22.9773 41.6666 22.552 41.6667 22.0845V11.8166C41.6667 11.454 41.4177 11.1042 41.0722 10.9796L34.1231 8.41259L29.2969 1.06048C29.132 0.811633 28.8341 0.653977 28.5326 0.655901H5.43478ZM0.905797 4.22733C0.405525 4.22733 0 4.62707 0 5.12018C0 5.6133 0.405525 6.01304 0.905797 6.01304H13.5676C14.0679 6.01304 14.4734 5.6133 14.4734 5.12018C14.4734 4.62707 14.0679 4.22733 13.5676 4.22733H0.905797ZM1.81159 7.79875C1.31132 7.79875 0.905797 8.19848 0.905797 8.69161C0.905797 9.18473 1.31132 9.58447 1.81159 9.58447H13.5676C14.0679 9.58447 14.4734 9.18473 14.4734 8.69161C14.4734 8.19848 14.0679 7.79875 13.5676 7.79875H1.81159ZM3.62319 11.3702C3.12292 11.3702 2.71739 11.7699 2.71739 12.263C2.71739 12.7562 3.12292 13.1559 3.62319 13.1559H13.5676C14.0679 13.1559 14.4734 12.7562 14.4734 12.263C14.4734 11.7699 14.0679 11.3702 13.5676 11.3702H3.62319ZM13.1341 19.4059C14.3954 19.4059 15.3985 20.3947 15.3985 21.638C15.3985 22.8814 14.3954 23.8702 13.1341 23.8702C11.8727 23.8702 10.8696 22.8814 10.8696 21.638C10.8696 20.3947 11.8727 19.4059 13.1341 19.4059ZM33.0616 19.4059C34.323 19.4059 35.3261 20.3947 35.3261 21.638C35.3261 22.8814 34.323 23.8702 33.0616 23.8702C31.8002 23.8702 30.7971 22.8814 30.7971 21.638C30.7971 20.3947 31.8002 19.4059 33.0616 19.4059Z" fill="black"/>
                                </svg>
                                <span className="ml-4 font-title">Domicilio</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded py-1 px-16 flex">
                        <span className="w-auto flex justify-end items-center text-black p-2">
                            <i className="material-icons text-3xl">search</i>
                        </span>
                        <input className="w-full rounded focus:outline-none p-2" type="text" placeholder="Buscar nombre y dirección"/>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full pl-20 pr-4">
                            {
                                isLoading ? 
                                    <h1>Loading locations...</h1>
                                :
                                    locations.map((location)=> {
                                        return <div className="border px-2 rounded-md py-4 mb-2 w-full border-gray-500">
                                            <span className="font-title">{location.name}</span>
                                            <p >
                                            {`Abierto de ${location.opening_time} a ${location.closing_time}`}
                                            </p>
                                            <p >
                                            {`${location.address}`}
                                            </p>
                                        </div>
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <svg className="" width="187" height="547" viewBox="0 0 187 547" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.02922 538.88C60.2572 505.082 145.064 433.701 58.4307 377.55C-35.7296 316.52 39.9095 239.455 90.5744 217.566C142.325 195.208 171.842 170.331 179.766 149.608C203.522 83.1232 167.969 -57.4236 -9.00003 26.3207L-9.00005 227.057L-9.00011 262.763L-9.00013 317.295L-9.00012 396.614L-9.00014 546.853L4.02922 538.88Z" fill="#FF2C2C"/>
                </svg>

                <div className="flex items-center md:mx-56 space-y-6">
                <ul className="list-disc list-inside">
                    <p className="font-title text-sm md:text-2xl text-center">“El mejor lugar para degustar en familia y amigos!”</p>
                    <p className="text-center text-sm md:m-5 text-gray-500 md:pr-20 md:pl-20">
                    Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera. 
                    </p>
                </ul>
                </div>  

                <svg width="214" height="547" viewBox="0 0 214 547" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M180.734 8.41235C124.506 42.2103 39.6989 113.591 126.332 169.742C220.493 230.772 144.853 307.837 94.1885 329.726C42.4383 352.084 12.9208 376.961 4.99732 397.684C-18.3685 463.075 38.3835 600.109 213.763 524.926V320H223.763V284.529L223.763 229.997L223.763 150.678V0.438904L180.734 8.41235Z" fill="#FF2C2C"/>
                </svg>
            </div>
            <div className="bg-black p-5 md:p-32">
                <h1 className="font-title text-white text-3xl text-center">Cuentanos tu experiencia</h1>
                <p className="text-white text-center">Don't miss out on our great offers & Receive deals from all our
                top restaurants via e-mail.</p>
                <div className="flex flex-wrap -mx-3 mb-6 py-5">
                    <div className="w-full md:w-1/2">
                        <Input
                            label="Nombre y apellido"
                            placeholder="John doe"
                            active={true}
                        />
                        <Input
                            label="Correo electronico"
                            placeholder="johndoe@gmail.com"
                            active={true}
                        />
                    </div>
                    <TextArea
                        label="Mensaje"
                        placeholder="El día de ahora mi experiencia fue..."
                    />
                </div>
                <div className="flex justify-end">
                <button className="bg-yellow-foodie text-black px-4 rounded-md font-bold py-3">Enviar comentarios</button>
                </div>
            </div>
            <div className="w-full p-10">
                    <div className='flex justify-center'>
                        <ul class="list-disc list-inside text-4xl">
                            <p className="font-title">Obten más beneficios</p>
                            <div className="font-title absolute h-8 bg-yellow-foodie ">
                                <p className="-mt-4">Descarga nuestra app</p>
                            </div>
                        </ul>
                    </div>
                    <div className="p-18 w-full mt-20 md:mt-10">
                        <div className="flex justify-around flex-wrap">
                            <div className="p-5">
                                <div className="flex items-center flex-col">
                                    <div className="rounded-full bg-yellow-foodie h-12 w-12 flex items-center justify-center">01</div>
                                    <p className="font-bold mt-3">Solicita rápido</p>
                                    <p className="w-48 mt-4 text-center">Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies</p>
                                </div>
                            </div>
                            <div className="p-5">
                                <div class="flex items-center flex-col">
                                    <div class="rounded-full bg-yellow-foodie h-12 w-12 flex items-center justify-center">02</div>
                                    <p className="font-bold mt-3">Facil de usar</p>
                                    <p className="w-48 mt-4 text-center">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="p-5">
                                <div class="flex items-center flex-col">
                                    <div class="rounded-full bg-yellow-foodie h-12 w-12 flex items-center justify-center">02</div>
                                    <p className="font-bold mt-3">Facil de usar</p>
                                    <p className="w-48 mt-4 text-center">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                                </div>
                            </div>
                        </div>  
                    </div>
            </div>
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
                    <div class="inline-block text-gray-700 text-center px-4 py-2 m-2">Conoce nuestras sucursales</div>
                    <div class="inline-block text-gray-700 text-center px-4 py-2 m-2">Acerca de</div>
                    <div class="inline-block text-gray-700 text-center px-4 py-2 m-2">Conoce nuestras sucursales</div>
                    <div class="inline-block text-gray-700 text-center px-4 py-2 m-2">¿Que hablan de nosotros?</div>
                    <div class="inline-block text-gray-700 text-center px-4 py-2 m-2">Contáctanos</div>
                </div>
            </div>
        </div>
       
    </>
}

export default Landing