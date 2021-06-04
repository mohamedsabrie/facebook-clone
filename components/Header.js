import Image from 'next/image';
import { SearchIcon, PlayIcon, ShoppingCartIcon, UserGroupIcon, PuzzleIcon,   } from '@heroicons/react/outline';
import { HomeIcon, ViewGridIcon,  BellIcon, ChatIcon,ChevronDownIcon } from '@heroicons/react/solid';
import HeaderIcon from './HeaderIcon';
import {signOut, useSession} from 'next-auth/client'

function Header() {
    const [session] = useSession();
    return (
        <div className="flex justify-between items-center sticky w-screen top-0 p-2 sm:px-5 shadow-lg bg-white z-50">
            {/* left */}
            <div className="flex">
                <Image src="/facebook_logo.png" height={40} width={40} layout="fixed" objectFit="contain"/>
            <div className="flex px-3 items-center space-x-2  ml-3 rounded-full p-2 bg-gray-100  ">
                <SearchIcon className="h-5   text-gray-600" />
                <input  className="hidden lg:inline-flex focus:outline-none bg-transparent placeholder-gray-500" type="text" placeholder="Search Facebook" />
            </div>
            </div>
            
            {/* center */}
            <div className=" hidden md:flex flex-grow justify-center ">
                <HeaderIcon Icon={HomeIcon} selected  />
                <HeaderIcon Icon={PlayIcon}  />
                <HeaderIcon Icon={ShoppingCartIcon}  />
                <HeaderIcon Icon={UserGroupIcon}  />
                <HeaderIcon Icon={PuzzleIcon}  />
            </div>
            {/* right */}
            <div className="flex items-center space-x-3 pr-5 ">
                <div className="hidden lg:inline-flex items-center space-x-3  hover:bg-gray-100 cursor-pointer py-2 px-1 pr-3 rounded-full">
                    <Image

                 src={session.user.image}
                 height={30}
                 width={30}
                 className=" rounded-full "
                 onClick={signOut}

                
                />
                <p className=" font-semibold">{session.user.name.split(" ")[0]}</p>
                </div>
                
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />

            </div>
            
        </div>
    )
}

export default Header
