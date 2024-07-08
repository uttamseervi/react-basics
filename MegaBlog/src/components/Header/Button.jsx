import React from 'react'

const Button = ({
    children,
    type = "button",
    bgcolor = 'bg-blue-600',
    textColor = 'white',
    className = '',
    ...props
}) => {
    return (
        <button className={`px-4 py-2 rounded-lg ${className} ${bgcolor} ${textColor}`} {...props}>
            {children}
        </button>
    )
}

export default Button
