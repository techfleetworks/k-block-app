import React from 'react'
import { Label } from "@/components/ui/label"
import {
    Command,
    CommandInput,
} from "@/components/ui/command"


const Searchbar = () => {
    return (
        <div className="flex justify-center bg-primary-b-500 w-screen border-green-500 border-2">
            <div className="grid w-fit items-center gap-1.5 border-red-500 border-2">
                <Label htmlFor="search" className="text-neutral-n-0">The Kadena Blockchain Explorer</Label>
                <Command id="search" >
                    <CommandInput placeholder="Search by Address / Request Key / Account Name / Block / Token / Domain Name"  />
                </Command>
            </div>
        </div>

    )
}

export default Searchbar;