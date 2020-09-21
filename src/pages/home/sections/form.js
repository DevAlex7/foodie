import React, {useState} from 'react'
import Input from '../../../components/input'
import TextArea from '../../../components/textArea'
import axios from 'axios'
const MessageSection = () => {
    return <>
        <div className="flex justify-center">
            <div>
                <div className="flex justify-center">
                    <svg width="158" height="143" viewBox="0 0 158 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                        <path d="M25.0513 81.5438L0 53.3018L74.9535 0L149.907 53.3018L124.455 81.5438H25.0513Z" fill="#FFD600"/>
                        <path d="M25.0513 81.5438L0 53.3018L74.9535 0L149.907 53.3018L124.455 81.5438H25.0513Z" fill="#4A5568"/>
                        <path d="M146.3 56.8818H0V120.327H146.3V56.8818Z" fill="#FFD600"/>
                        <path d="M147.3 41H1V104.445H147.3V41Z" fill="url(#paint0_linear)"/>
                        <path d="M149.907 143H0V53.3018L74.9535 98.2504L149.907 53.3018V143Z" fill="#FFD600"/>
                        <path d="M130.784 23.2337L114.886 11.1357L72.7716 65.6412L49.3814 47.8424L37.1907 63.6199L68.5279 87.4305L76.5639 93.4073L130.784 23.2337Z" fill="white"/>
                        <path d="M0.631665 33.1907L0.0356445 33.4795L0.104185 33.3586L0.0518778 33.3753L0.125228 33.3214L8.14706 19.1542L12.2477 22.624L15.7655 25.8561L14.7554 26.3456L15.8909 28.3333L0.631665 33.1907Z" fill="url(#paint1_linear)"/>
                        <path d="M11.8416 22.9948L15.057 25.9534L0.483154 33.1438L8.23884 23.279L11.8416 22.9948Z" fill="#FFD600"/>
                        <path opacity="0.2" d="M11.8416 22.9948L15.057 25.9534L0.483154 33.1438L8.23884 23.279L11.8416 22.9948Z" fill="black"/>
                        <path d="M8.09114 19.8211L0.483154 33.1438L11.8416 22.9948L8.09114 19.8211Z" fill="#FFD600"/>
                        <path d="M15.151 28.244L0.499023 33.0471L12.7471 23.9737L15.151 28.244Z" fill="#FFD600"/>
                        <path d="M137.674 7.70293L134.464 13.2258L158 17.0292L142.841 6.55316L137.674 7.70293Z" fill="#FFD600"/>
                        <path opacity="0.2" d="M137.674 7.70293L134.464 13.2258L158 17.0292L142.841 6.55316L137.674 7.70293Z" fill="black"/>
                        <path d="M141.539 1.64935L158 17.0291L137.674 7.70289L141.539 1.64935Z" fill="#FFD600"/>
                        <path d="M135.332 16.4721L157.936 16.9007L136.834 9.46228L135.332 16.4721Z" fill="#FFD600"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear" x1="74.1498" y1="104.445" x2="74.1498" y2="41" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#B79A00" stop-opacity="0.4"/>
                        <stop offset="0.55135" stop-color="#272100" stop-opacity="0.09"/>
                        <stop offset="1" stop-color="#4F4200" stop-opacity="0.02"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="11.9277" y1="32.9477" x2="2.93529" y2="25.2218" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#808080" stop-opacity="0.25"/>
                        <stop offset="0.53514" stop-color="#808080" stop-opacity="0.12"/>
                        <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                        </linearGradient>
                        <clipPath id="clip0">
                        <rect width="158" height="143" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="p-5 md:p-0">
                    <p className="text-md text-center md:text-4xl text-white font-title">Gracias por enviar tus mensajes</p>
                    <p className="text-white text-center">
                    Don't miss out on our great offers & Receive deals from all our top restaurants via e-mail.
                    </p>
                    <div className="flex justify-center py-5">
                        <button onClick={()=> {
                            window.location.href='/menu'
                        }} className="bg-yellow-foodie px-3 py-2 rounded font-bold">
                            Conoce nuestro menu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
const FormSection = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [showMessage, setShow] = useState(false)

    const sendMessage = async() => {
        console.log({
            name, email, message
        })
        const body = {
            name    : name,
            email   : email,
            message : message
        }
        const {data, status} = await axios.post('https://api.elaniin.dev/api/contact', body)

        if(status == 200){
            setShow(true)
        }


    }

    const handleName = (value) => {
        setName(value)

        
    }
    const handleEmail = (value) => {
        setEmail(value)

        
    }
    const handleMessage = (value) => {
        setMessage(value)
    }



    return <>
        <div className="bg-black p-5 md:p-32" id="contact">
            <h1 className="font-title text-white text-3xl text-center">Cuentanos tu experiencia</h1>
            <p className="text-white text-center">Don't miss out on our great offers & Receive deals from all our
            top restaurants via e-mail.</p>
            <div className="flex flex-wrap -mx-3 mb-6 py-5">
                <div className="w-full md:w-1/2">
                    <Input
                        name="name"
                        handleAction={handleName}
                        label="Nombre y apellido"
                        placeholder="John doe"
                        active={true}
                        value={name}
                    />
                    <Input
                        name="email"
                        handleAction={handleEmail}
                        label="Correo electronico"
                        placeholder="johndoe@gmail.com"
                        active={true}
                        value={email}
                    />
                </div>
                <TextArea
                    value={message}
                    name="message"
                    handleAction={handleMessage}
                    label="Mensaje"
                    placeholder="El día de ahora mi experiencia fue..."
                />
            </div>
            <div className="flex justify-end">
                <button onClick={()=>sendMessage()} className="bg-yellow-foodie text-black px-4 rounded-md font-bold py-3">Enviar comentarios</button>
            </div>
            {
                !showMessage ? 
                '' : 
                <MessageSection/>
            }
        </div>
    </>
}
export default FormSection