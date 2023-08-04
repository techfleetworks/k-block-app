import React from 'react'
import { Label } from "@/components/ui/label"
import {
    Command,
    CommandInput,
} from "@/components/ui/command"


const Searchbar = () => {
    return (
        <div className="flex justify-center bg-primary-b-500 w-screen">

            <svg xmlns="http://www.w3.org/2000/svg" width="115" height="85" viewBox="0 0 115 85" fill="none">
                <g clip-path="url(#clip0_650_15192)">
                    <path d="M35.1053 20.4973L57.6007 59.3646L101.606 59.194C101.693 56.91 101.142 54.6063 99.9614 52.5646L83.9094 24.8345C81.7115 21.0323 77.647 18.7023 73.2573 18.7177L41.2146 18.8419C39.0366 18.849 36.9321 19.4375 35.1022 20.4955L35.1053 20.4973Z" stroke="#528BA4" stroke-miterlimit="10" stroke-dasharray="2 2" />
                    <path d="M57.6005 59.3646L35.6073 97.6798C37.3384 98.5756 39.285 99.0693 41.3044 99.0577L73.3471 98.9335C77.7417 98.9167 81.7971 96.5524 83.9889 92.7347L99.9796 64.8805C100.994 63.1156 101.538 61.1575 101.614 59.1943L57.6054 59.3632L57.6005 59.3646Z" stroke="#528BA4" stroke-miterlimit="10" stroke-dasharray="2 2" />
                    <path d="M30.5728 25.0404L14.5821 52.8946C12.3855 56.7135 12.3945 61.4079 14.5955 65.2119L30.6476 92.942C31.8374 94.9971 33.5717 96.6245 35.6044 97.6778L57.5976 59.3626L35.1022 20.4952C33.2521 21.5664 31.6743 23.1182 30.5697 25.0386L30.5728 25.0404Z" stroke="#528BA4" stroke-miterlimit="10" stroke-dasharray="2 2" />
                </g>
                <defs>
                    <clipPath id="clip0_650_15192">
                        <rect width="80.6473" height="89.4307" fill="white" transform="matrix(-0.866025 -0.5 -0.5 0.866025 114.558 40.3237)" />
                    </clipPath>
                </defs>
            </svg>

            <div className="grid py-6 w-2/3 items-center gap-1.5">
                <Label htmlFor="search" className="text-neutral-n-0">The Kadena Blockchain Explorer</Label>
                <Command id="search" >
                    <CommandInput placeholder="Search by Address / Request Key / Account Name / Block / Token / Domain Name" />
                </Command>
            </div>
        </div>

    )
}

export default Searchbar;