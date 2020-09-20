import React from 'react'

const Item = ({name}) => {
    return <>
        <div>
        <a href="/contactus" className="mt-1 block sm:inline-block px-2 py-1 font-semibold hover:underline rounded sm:mt-0 sm:ml-2"> {name} </a>
        </div>
    </>
}
export default Item 