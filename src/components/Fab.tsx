import React from 'react'

interface Props {
    fun: React.Dispatch<React.SetStateAction<boolean>>
    edit: React.Dispatch<React.SetStateAction<boolean>>
}

export const Fab = ({fun ,edit}: Props) => {
    const handleClick = () => {
        fun(true)
        edit(false)
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={handleClick}
        >
            <i className="fa fa-plus"></i>
        </button>
    )
}
