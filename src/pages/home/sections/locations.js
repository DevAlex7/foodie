import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const Locations = () => {

    const [currentSelected, setCurrentSelected] = useState('takeaway')
    const [locations, setLocations] = useState([])
    const [coords, setCoords] = useState({
        lat : 13.710566,
        long : -89.231635
    })
    const [isLoading, SetLoading] = useState(true) 


    useEffect(()=> {
        fetchLocations()
    }, [])


    const fetchLocations = async() => {
        const { data }= await axios.get('https://api.elaniin.dev/api/locations',{
            params : {
                type : 'takeaway'
            }
        })
        
        setLocations(data.data)
        SetLoading(false)
    }

    const searchLocation = async (search) => {
        if(search){

            const { data } = await axios.get('https://api.elaniin.dev/api/locations',{
                params:{
                    type: currentSelected,
                    query:search
                }
            })

            setLocations(data.data)
        }
        else{
            const { data } = await axios.get('https://api.elaniin.dev/api/locations',{
                params:{
                    type: currentSelected,
                }
            })

            setLocations(data.data)
        }
    }

    

    const changeType = async type => {
        setCurrentSelected(type)
        const { data }= await axios.get('https://api.elaniin.dev/api/locations',{
            params : {
                type : type
            }
        })

        setLocations(data.data)
    }

    

    const changeLocation = (lat, long) => {
        
        setCoords({
            lat : parseFloat(lat),
            long : parseFloat(long)
        })

    }

    const displayMarkers = () => {
        return locations.map((store, index) => {
            return <Marker key={index} id={index} position={{
            lat: store.latitude,
            lng: store.longitude
            }}
            onClick={() => console.log("You clicked me!")} />
        })
    }

    return <>
        <div className="flex flex-wrap w-full mt-5" id="locations">
            <div className="w-full md:w-1/2">
                <h1 className="font-title flex justify-center text-4xl">Estamos para ti</h1>
                <div className="w-full flex">
                    <div onClick={()=> changeType('takeaway')} className="w-1/2 text-white bg-black flex justify-center py-5 items-center font-title">
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.4196 5.99095H17.9292L18.5707 1.90466L20.7937 2.33491C21.111 2.39366 21.4146 2.19366 21.4766 1.88416C21.5384 1.57416 21.3336 1.2729 21.0183 1.21215L18.2013 0.666647C18.0458 0.636396 17.8852 0.670647 17.7552 0.760147C17.6256 0.849398 17.5387 0.9869 17.5143 1.14115L16.7531 5.99095H10.5938C10.2724 5.99095 10.0124 6.2467 10.0124 6.5632V8.90222C10.0124 9.21848 10.2724 9.47448 10.5938 9.47448H11.0928L11.2472 10.9807C10.466 10.8545 9.57466 10.7825 8.5548 10.7825C0.463739 10.7825 0.370748 15.3175 0.370748 15.5105C0.370748 15.9633 0.539962 16.3825 0.825544 16.7345C-0.103867 18.2186 -0.261902 19.4916 0.41953 20.2643C0.635749 20.5096 0.923618 20.6738 1.25925 20.7738C1.20132 21.1988 1.19523 21.6973 1.30194 22.2269C0.928191 22.4806 0.681229 22.9124 0.681229 23.4016V24.2436C0.681229 25.0224 1.30524 25.6559 2.07179 25.6559H15.0358C15.7449 25.6559 16.325 25.1134 16.4103 24.4174H21.8593C22.158 24.4174 22.4078 24.1949 22.4378 23.9026L23.9196 9.47398H24.4193C24.7407 9.47398 25.0009 9.21823 25.0009 8.90172V6.5627C25.0012 6.2467 24.741 5.99095 24.4196 5.99095ZM11.1751 7.13521H23.8383V8.33022H23.3941H11.6187H11.1753V7.13521H11.1751ZM8.5548 11.9265C15.4225 11.9265 15.5724 15.3698 15.5752 15.5103C15.5752 16.1013 14.8467 16.6008 13.9842 16.6008H3.12443C2.26184 16.6008 1.5334 16.1013 1.5334 15.5158C1.53645 15.3695 1.68635 11.9265 8.5548 11.9265ZM1.74708 17.4338C2.1536 17.6266 2.62034 17.7451 3.12443 17.7451H13.9844C14.4913 17.7451 14.9603 17.6253 15.3686 17.4311C16.0391 18.5533 16.0381 19.2488 15.8011 19.5148C15.4929 19.8601 14.5208 19.8838 13.0385 19.1546C11.7872 18.5396 10.8412 19.0296 10.0803 19.4246C9.58457 19.6818 9.11631 19.9251 8.5548 19.9251C7.99329 19.9251 7.52478 19.6818 7.02856 19.4246C6.26786 19.0301 5.32295 18.5401 4.07035 19.1546C2.59061 19.8831 1.5954 19.8523 1.29787 19.5143C1.04532 19.2278 1.10757 18.4893 1.74708 17.4338ZM2.43867 21.9888C2.35762 21.5766 2.36957 21.1843 2.42064 20.8548C3.06574 20.7871 3.79798 20.5683 4.5907 20.1783C5.27366 19.8413 5.71143 20.0346 6.48662 20.4368C7.05829 20.7336 7.70568 21.0691 8.55505 21.0691C9.40443 21.0691 10.0518 20.7333 10.6235 20.4368C11.3979 20.0358 11.8347 19.8406 12.5186 20.1783C13.3195 20.5721 14.0497 20.7933 14.6897 20.8613C14.74 21.1921 14.7515 21.5803 14.6709 21.9888H2.43867ZM15.036 24.5119H2.07179C1.94627 24.5119 1.84414 24.3919 1.84414 24.2439V23.4019C1.84414 23.2539 1.94627 23.1334 2.07179 23.1334H15.0358C15.1623 23.1334 15.265 23.2539 15.265 23.4019V23.8429C15.265 23.8439 15.2644 23.8446 15.2644 23.8456C15.2644 23.8469 15.265 23.8474 15.265 23.8486V24.2441C15.2652 24.3916 15.1626 24.5119 15.036 24.5119ZM21.3338 23.2734H16.4149C16.3758 22.8381 16.1474 22.4576 15.8066 22.2269C15.9134 21.7001 15.9078 21.2043 15.8503 20.7776C16.1776 20.6766 16.4591 20.5121 16.6761 20.2686C17.3601 19.4988 17.2091 18.2211 16.2884 16.727C16.5704 16.3763 16.7381 15.9595 16.7381 15.5103C16.7381 15.355 16.6741 12.393 12.4432 11.2387L12.262 9.47448H22.7511L21.3338 23.2734Z" fill="white"/>
                        </svg>
                        <span className="ml-4">Para llevar</span>
                    </div>
                    <div onClick={()=> changeType('delivery')} className="w-1/2">
                        <div className="flex justify-center py-5 items-center font-title">
                            <svg width="42" height="26" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.43478 0.655901C4.93451 0.655901 4.52898 1.05565 4.52898 1.54876C4.52898 2.04187 4.93451 2.44161 5.43478 2.44161H28.0373L32.7502 9.62629C32.8578 9.78656 33.0194 9.91094 33.2031 9.97509L39.8551 12.4304V21.1916H37.1094C36.8864 19.1867 35.1522 17.6202 33.0616 17.6202C30.971 17.6202 29.2368 19.1867 29.0138 21.1916H17.1818C16.9588 19.1867 15.2247 17.6202 13.1341 17.6202C11.0434 17.6202 9.30928 19.1867 9.08628 21.1916H6.34058V15.8345C6.34058 15.3413 5.93505 14.9416 5.43478 14.9416C4.93451 14.9416 4.52898 15.3413 4.52898 15.8345V22.0845C4.52903 22.552 4.96051 22.9773 5.43478 22.9773H9.29859C9.86241 24.5328 11.3706 25.6559 13.1341 25.6559C14.8975 25.6559 16.4057 24.5328 16.9696 22.9773H29.2261C29.7899 24.5328 31.2981 25.6559 33.0616 25.6559C34.825 25.6559 36.3332 24.5328 36.8971 22.9773H40.7609C41.2351 22.9773 41.6666 22.552 41.6667 22.0845V11.8166C41.6667 11.454 41.4177 11.1042 41.0722 10.9796L34.1231 8.41259L29.2969 1.06048C29.132 0.811633 28.8341 0.653977 28.5326 0.655901H5.43478ZM0.905797 4.22733C0.405525 4.22733 0 4.62707 0 5.12018C0 5.6133 0.405525 6.01304 0.905797 6.01304H13.5676C14.0679 6.01304 14.4734 5.6133 14.4734 5.12018C14.4734 4.62707 14.0679 4.22733 13.5676 4.22733H0.905797ZM1.81159 7.79875C1.31132 7.79875 0.905797 8.19848 0.905797 8.69161C0.905797 9.18473 1.31132 9.58447 1.81159 9.58447H13.5676C14.0679 9.58447 14.4734 9.18473 14.4734 8.69161C14.4734 8.19848 14.0679 7.79875 13.5676 7.79875H1.81159ZM3.62319 11.3702C3.12292 11.3702 2.71739 11.7699 2.71739 12.263C2.71739 12.7562 3.12292 13.1559 3.62319 13.1559H13.5676C14.0679 13.1559 14.4734 12.7562 14.4734 12.263C14.4734 11.7699 14.0679 11.3702 13.5676 11.3702H3.62319ZM13.1341 19.4059C14.3954 19.4059 15.3985 20.3947 15.3985 21.638C15.3985 22.8814 14.3954 23.8702 13.1341 23.8702C11.8727 23.8702 10.8696 22.8814 10.8696 21.638C10.8696 20.3947 11.8727 19.4059 13.1341 19.4059ZM33.0616 19.4059C34.323 19.4059 35.3261 20.3947 35.3261 21.638C35.3261 22.8814 34.323 23.8702 33.0616 23.8702C31.8002 23.8702 30.7971 22.8814 30.7971 21.638C30.7971 20.3947 31.8002 19.4059 33.0616 19.4059Z" fill="black"/>
                            </svg>
                            <span className="ml-4 font-title">Domicilio</span>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded py-1 md:px-16 flex">
                    <span className="w-auto flex justify-end items-center text-black p-2">
                        <i className="material-icons text-3xl">search</i>
                    </span>
                    <input onChange={(event) => searchLocation(event.target.value)} className="w-full rounded focus:outline-none p-2" type="text" placeholder="Buscar nombre y dirección"/>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full md:pl-20 md:pr-4 p-4">
                        {
                        isLoading ? 
                            <h1>Loading locations...</h1>
                        :
                            locations.map((location, index)=> {
                                return (
                                    <div key={index} className="border px-2 rounded-md py-4 mb-2 w-full border-gray-500">
                                        <span className="font-title">{location.name}</span>
                                        <p>{`Abierto de ${location.opening_time} a ${location.closing_time}`}</p>
                                        <p>{`${location.address}`}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className="hidden md:block">
                        <Map
                        containerStyle={{
                            width: '50%',
                            height: '70%'
                        }}
                        google={window.google}
                        zoom={13}
                        initialCenter={
                            {
                                lat: coords.lat,
                                lng: coords.long
                            }
                        }
                    >
                        {
                            displayMarkers()
                        }
                    </Map>
                </div>
            </div>
        </div>
    </>
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDengnRdjVNe-z-hBB29IaOhOIpPeldbXA'
}) (Locations)