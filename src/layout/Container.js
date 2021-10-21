import React from 'react'

const Container = ({children}) => {
    return (
        <div className="flex min-h-screen mx-auto bg-black max-w-7xl border">
            {children}
        </div>
    )
}

export default Container
