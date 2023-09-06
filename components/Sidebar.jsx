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

function SideBarLink({text, Icon}) {
    return (
        <li className="flex items-center text-xl">
            <Icon className = "h-7"/>
            
            <span className="xl:inline space-x-3">{text} </span>
        </li>
    )
}


export default function Sidebar () {
    return (
        <div className="hidden sm:flex flex-col fixed">
            <div>
                <Image src={} width={34} height={34}></Image>
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

