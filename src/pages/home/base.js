import React from 'react'
import Navbar from '../../components/navbar'


import Header from '../home/sections/header'
import KnowStore from '../home/sections/knowstore'
import Locations from '../home/sections/locations'
import Testimonals from '../home/sections/testimonials'
import Form from '../home/sections/form'
import About from '../home/sections/about'
import Footer from '../../components/footer'

const Landing = () => {

    return <>
        <div className="h-full w-full">
            <Navbar
            textcolor="text-black"
            />
            <Header/>
            <KnowStore/>
            <Locations/>
            <Testimonals/>
            <Form/>
            <About/>
            <Footer/>
        </div>
       
    </>
}

export default (Landing);