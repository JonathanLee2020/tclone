import {
    HomeIcon,
    HashtagIcon,
    InboxIcon,
    BookmarkIcon,
    ClipboardListIcon,
    BellIcon,
    UserIcon,
    DotsCircleHorizontalIcon
} from "@heroicons/react/outline"

import Image from 'next/image';


function SideBarLink({text, Icon}) {
    return (
        <li className="flex items-center text-xl py-3">
            <Icon className = "h-7"/>
            
            <span className=" hidden xl:inline space-x-3">{text} </span>
        </li>
    )
}


export default function Sidebar () {
    return (
        <div className="hidden sm:flex flex-col fixed">
            <div className="py-3">
                <Image src={"/assets/twitter-logo.png"} width={34} height={34} alt="hello"/>
            </div>
            <nav>
                <SideBarLink 
                text={"Home"}
                Icon={HomeIcon}
                ></SideBarLink>

                <SideBarLink 
                text={"Explore"}
                Icon={HashtagIcon}
                ></SideBarLink>

                <SideBarLink 
                text={"Notifications"}
                Icon={BellIcon}
                ></SideBarLink>

                <SideBarLink 
                text={"Messages"}
                Icon={InboxIcon}
                ></SideBarLink>

                <SideBarLink 
                text={"Bookmarks"}
                Icon={BookmarkIcon}
                ></SideBarLink>

                <SideBarLink 
                text={"Profile"}
                Icon={UserIcon}
                ></SideBarLink>

                <SideBarLink 
                text={"More"}
                Icon={DotsCircleHorizontalIcon}
                ></SideBarLink>
               
            </nav>
            <div>User</div>
        </div>
    )
}

