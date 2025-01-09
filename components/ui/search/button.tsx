"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    disabled?: boolean
}

const SearchButton = ({ disabled }: Props) => {
    const router = useRouter()
    return (
        <button
            disabled={disabled}
            className={`px-4 py-3 rounded-md ${disabled ? "bg-[#f8f9fa] text-[#e3e5e9]" : "bg-[#f2f2f2] text-black font-medium"}`}
            onClick={() => router.push("/search")}
        >
            Buscar
        </button>
    )
}

export default SearchButton