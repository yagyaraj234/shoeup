import React, { Children } from 'react'

const Wrapper = ({ childeren, className }) => {
    return (
        <div className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${className || ''}`}>
            {Children}
        </div>
    )
}

export default Wrapper