import axios from "axios"
import { useEffect, useState } from "react"
import Button from "../components/Widget/Button"
import { api } from "../lib/api"

type ListProps = {
    initialItems: string[]
}

export default function List({ initialItems }: ListProps) {
    const [list, setList] = useState(initialItems)
    const [newItem, setNewItem] = useState('')

    async function addToList(text: string) {
        setList(state => [...state, text])
        try {
            await api.post('/team', { name: text })
        } catch (error) {
            console.error(error)
        } finally {
            setNewItem('')
        }
    }

    function removeFromList(name: string) {
        setTimeout(() => {
            setList(state => state.filter(item => item !== name))
        }, 500)
    }

    return (
        <>
            <input
                placeholder="Novo usuário"
                type="text"
                value={newItem}
                onChange={(ev) => { setNewItem(ev.target.value) }}
                className="min-w=[304px] min-h=[112px] mr-2 mb-4 text-xs placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin resize-none"
            />

            <Button
                onClick={() => { addToList(newItem) }}
                text={"Adicionar"}
            />


            <ul>
                {list.map(item =>
                    <li key={item} className={"flex flex-row"} >
                        <p className="mr-10 mb-1" style={{ minWidth: '173px' }}>{item}</p>
                        <Button
                            onClick={() => { removeFromList(item) }}
                            text={"Remover"}
                        />
                    </li>
                )}
            </ul>
        </>
    )
}