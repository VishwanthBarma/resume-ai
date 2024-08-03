import React from 'react'

const ShiningText = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <h1 className="text-xl font-semibold flex items-center">
                <span className='h-2 w-2 rounded-full bg-pink-500 animate-ping mr-3'></span>
                <span className="shine">Generating Enhancement Suggestions. . .</span>
            </h1>
        </div>
    )
}

export default ShiningText
