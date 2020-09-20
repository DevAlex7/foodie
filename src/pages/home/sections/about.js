import React from 'react'
import Step from '../../../components/steps'
const About = () => {
    return <>
        <div className="w-full p-10">
            <div className='flex justify-center'>
                <ul className="list-disc list-inside text-4xl">
                    <p className="font-title">Obten más beneficios</p>
                    <div className="font-title absolute h-8 bg-yellow-foodie ">
                        <p className="-mt-4">Descarga nuestra app</p>
                    </div>
                </ul>
            </div>
            <div className="p-18 w-full mt-20 md:mt-10">
                <div className="flex justify-around flex-wrap">
                    <Step
                        number="01"
                        title="solicita rapido"
                        description="Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies"
                    />
                    <Step
                        number="02"
                        title="Facil de usar"
                        description="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"
                    />
                </div>
                <div className="flex justify-center">
                    <Step
                        number="03"
                        title="Promociones especiales"
                        description="Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies."
                    />
                </div>  
            </div>
        </div>
    </>
}
export default About