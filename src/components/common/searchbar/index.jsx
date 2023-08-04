import React from 'react'
import { Label } from "@/components/ui/label"
import {
    Command,
    CommandInput,
} from "@/components/ui/command"

import BgCube from '@/components/ui/bgcube-icon'

const Searchbar = () => {
    return (
        <div className="flex justify-center bg-primary-b-500 w-screen">
            <BgCube />
            <div className="grid py-6 w-5/12 items-center gap-1.5">
                <Label htmlFor="search" className="text-neutral-n-0">The Kadena Blockchain Explorer</Label>
                <Command id="search" >
                    <CommandInput placeholder="Search by Address / Request Key / Account Name / Block / Token / Domain Name" />
                </Command>
            </div>
            <BgCube />
        </div>

    )
}

export default Searchbar;