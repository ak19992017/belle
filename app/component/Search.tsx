'use client'
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('')
        router.push(`/wikisearch/${search}/`)
    }
    return (
        <form onSubmit={handleSubmit} >
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="bg-white p-2 w-80 text-xl " />
            <button className="bg-green-400 p-2 m-2 hover:bg-green-600">💎</button>
        </form >
    )
}
