import React from 'react'

type Props = {
    disabled?: boolean
}

const SearchButton = ({ disabled }: Props) => {
    return (
        <button
            disabled={disabled}
            className={`px-4 py-3 rounded-md ${disabled ? "bg-[#f8f9fa] text-[#e3e5e9]" : "bg-[#f2f2f2] text-black font-medium"}`}
        >
            Buscar
        </button>
    )
}

export default SearchButton