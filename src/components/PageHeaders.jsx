import React from 'react'

const PageHeaders = ({title = 'Hello',subtitle='Subheader'}) => {
    return (
        <div className="text-center mt-32">
            <h1 className="text-3xl">{title}</h1>
            <h2 className="text-white/75">{subtitle}</h2>
        </div>
    )
}

export default PageHeaders