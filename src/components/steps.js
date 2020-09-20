import React from 'react'

const Step = ({number, title, description}) => {
    return <>
        <div className="p-5">
            <div className="flex items-center flex-col">
                <div className="rounded-full bg-yellow-foodie h-12 w-12 flex items-center justify-center">{number}</div>
                <p className="font-bold mt-3">{title}</p>
                <p className="w-48 mt-4 text-center">{description}</p>
            </div>
        </div>
    </>
}

export default Step