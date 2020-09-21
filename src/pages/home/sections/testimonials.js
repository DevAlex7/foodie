import React, {useState} from 'react'
import {
    KeyboardArrowLeft,
    KeyboardArrowRight
} from '@material-ui/icons'

const Testimonials = () => {
    
    const [testimonial_index, setIndexTestimonial] = useState(0+1) 

    const [testimonials, setTestimonials] = useState(
        [
            {
                id: 1,
                title:'El mejor lugar para degustar en familia y amigos!',
                description:'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.'
            },
            {
                id: 2,
                title:'Un lugar unico e iniligualable',
                description:'Este es uno de los lugares que me ha gustado visitar debido a la atencion que hemos recibido, recomendado'
            },
        ]
    )

    const changeTestimonial = index => {
        setIndexTestimonial(index)
    }

    return <>
        <div className="flex justify-between">
            <svg className="" width="187" height="547" viewBox="0 0 187 547" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.02922 538.88C60.2572 505.082 145.064 433.701 58.4307 377.55C-35.7296 316.52 39.9095 239.455 90.5744 217.566C142.325 195.208 171.842 170.331 179.766 149.608C203.522 83.1232 167.969 -57.4236 -9.00003 26.3207L-9.00005 227.057L-9.00011 262.763L-9.00013 317.295L-9.00012 396.614L-9.00014 546.853L4.02922 538.88Z" fill="#FF2C2C"/>
            </svg>

            <div className="flex items-center md:mx-56 space-y-6">
                <ul className="list-disc list-inside">
                    <p className="font-title text-sm md:text-2xl text-center">{testimonials[testimonial_index-1].title}</p>
                    <p className="text-center text-sm md:m-5 text-gray-500 md:pr-20 md:pl-20">
                    {testimonials[testimonial_index-1].description}
                    </p>

                    <div className="flex justify-center">
                        <div 
                        onClick={()=>{
                            changeTestimonial(1)
                        }}
                        className="inline-block text-gray-700 text-center px-4 py-2">
                            {
                                testimonial_index == 1 ? 
                                '' : 
                                <KeyboardArrowLeft/>
                            }
                        </div>
                        <div className="inline-block text-gray-700 text-center px-4 py-2">{`${testimonial_index} / ${testimonials.length}`}</div>
                        <div onClick={()=>{
                            changeTestimonial(2)
                        }} className="inline-block text-gray-700 text-center px-4 py-2">
                            {
                                testimonial_index == 2 ? 
                                '' : 
                                <KeyboardArrowRight/>
                            }
                        </div>
                    </div>
                </ul>
                
            </div>  

            <svg width="214" height="547" viewBox="0 0 214 547" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M180.734 8.41235C124.506 42.2103 39.6989 113.591 126.332 169.742C220.493 230.772 144.853 307.837 94.1885 329.726C42.4383 352.084 12.9208 376.961 4.99732 397.684C-18.3685 463.075 38.3835 600.109 213.763 524.926V320H223.763V284.529L223.763 229.997L223.763 150.678V0.438904L180.734 8.41235Z" fill="#FF2C2C"/>
            </svg>
        </div>
    </>
}
export default Testimonials