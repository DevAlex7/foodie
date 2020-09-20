import React from 'react'

const TextArea = ({value,name, handleAction ,label, placeholder}) => {
    return <>
    <div className="w-full md:w-1/2 hover:text-yellow-foodie text-white px-3 mb-6 md:mb-0">
        <label className="block uppercase  tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
            {label}
        </label>
        <textarea defaultValue={value} onChange={(event)=>handleAction(event.target.value)} className="appearance-none h-32 hover:border-yellow-foodie block w-full border rounded bg-transparent py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-first-name" type="text" placeholder={placeholder}></textarea>  
    </div>
       
    </>
}
export default TextArea