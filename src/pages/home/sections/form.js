import React, {useState} from 'react'
import Input from '../../../components/input'
import TextArea from '../../../components/textArea'
import axios from 'axios'

const FormSection = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendMessage = async() => {
        console.log({
            name, email, message
        })
        const body = {
            name    : name,
            email   : email,
            message : message
        }
        const {data} = await axios.post('https://api.elaniin.dev/api/contact', body)

        alert(data.message)
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
        </div>
    </>
}
export default FormSection