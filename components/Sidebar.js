import { ChevronDownIcon , ShoppingBagIcon, UserGroupIcon } from "@heroicons/react/outline"
import { CalendarIcon, DesktopComputerIcon, ClockIcon, UsersIcon } from "@heroicons/react/solid"
import SidebarRow from "./SidebarRow";
import {signOut, useSession} from 'next-auth/client'


function Sidebar() {
    const [session] = useSession();
    const userName= session.user?.name.split(' ').slice(0, 2).join(" ");

    return (
        <div className="xs:w-[100px] sm:w-72">
           <div className=" fixed top-20 h-screen  flex flex-col p-5 ">
            
            <SidebarRow image={session.user.image} title={userName} />
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Markrtplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />
            
        </div>  
        </div>
       
    )
}

export default Sidebar
