import { SearchIcon, DotsHorizontalIcon } from "@heroicons/react/outline"
import { BadgeCheckIcon } from "@heroicons/react/solid"


export default function Trending () {

    return (
        <div className="hidden lg:flex flex-col ml-8 mt-4">
            <div className="flex space-x-3 bg-white bg-opacity-10
            w-[300px] h-[44px] p-3 rounded-3xl
            ">
                <SearchIcon className="w-6 text-gray-600" />
                <input
                className="bg-transparent
                focus: outline-none
                placeholder:text-gray-600
                "
                placeholder="Search Twitter"
                />
            </div>

            <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
                <h1 className="font-bond text-xl p-3">What's Happening</h1>
                <div className="p-3 relative">
                    <DotsHorizontalIcon
                    className="w-5 text-gray-600 absolute right-4"
                    />
                    <p className="text-xs text-gray-500">Trending in Australia</p>
                    <h1 className="text-[15px] font-bond">Ghost of Tsushima</h1>
                    <p className="text-xs text-gray-500">780K Tweets</p>
                </div>
                <div className="p-3 relative">
                    <DotsHorizontalIcon
                    className="w-5 text-gray-600 absolute right-4"
                    />
                    <p className="text-xs text-gray-500">Trending in Australia</p>
                    <h1 className="text-[15px] font-bond">Horn of Salvation Ichigo</h1>
                    <p className="text-xs text-gray-500">670K Tweets</p>
                </div>
                <div className="p-3 relative">
                    <DotsHorizontalIcon
                    className="w-5 text-gray-600 absolute right-4"
                    />
                    <p className="text-xs text-gray-500">Trending in Australia</p>
                    <h1 className="text-[15px] font-bond">Iki Island</h1>
                    <p className="text-xs text-gray-500">540K Tweets</p>
                </div>
                <div className="p-3 relative">
                    <DotsHorizontalIcon
                    className="w-5 text-gray-600 absolute right-4"
                    />
                    <p className="text-xs text-gray-500">Trending in Australia</p>
                    <h1 className="text-[15px] font-bond">Six Path Sage Mode</h1>
                    <p className="text-xs text-gray-500">490K Tweets</p>
                </div>
                <div className="p-3 relative">
                    <DotsHorizontalIcon
                    className="w-5 text-gray-600 absolute right-4"
                    />
                    <p className="text-xs text-gray-500">Trending in Australia</p>
                    <h1 className="text-[15px] font-bond">#ONEPIECE1094</h1>
                    <p className="text-xs text-gray-500">460K Tweets</p>
                </div>
            </div>
            <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
                <h1 className="font-bond text-xl p-3">Who to Follow</h1>

                <div className="flex justify-between p-3">
                    <div className="flex space-x-3">
                        <img 
                        className="w-11 h-11 object-cover rounded-full"
                        src="/assets/kiki.jpeg" alt="" 
                        />
                        <div>
                            <div className="flex space-x-1">
                                <h1 className="font-bold">Kiki</h1>
                                <BadgeCheckIcon className="w-[18px] text-blue-400"/>
                            </div>
                         <h1 className="text-[12px] mt-1 text-gray-500">@DeliveryService</h1>
                        </div>
                        
                    </div>
                    <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold">
                        Follow
                    </button>
                </div>

                <div className="flex justify-between p-3">
                    <div className="flex space-x-3">
                        <img 
                        className="w-11 h-11 object-cover rounded-full"
                        src="/assets/profilePictures/pfp3.png" alt="" 
                        />
                        <div>
                            <div className="flex space-x-1">
                                <h1 className="font-bold">Dawn</h1>
                                <BadgeCheckIcon className="w-[18px] text-blue-400"/>
                            </div>
                         <h1 className="text-[12px] mt-1 text-gray-500">@SandgemScouting</h1>
                        </div>
                        
                    </div>
                    <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold">
                        Follow
                    </button>
                </div>

                <div className="flex justify-between p-3">
                    <div className="flex space-x-3">
                        <img 
                        className="w-11 h-11 object-cover rounded-full"
                        src="/assets/profilePictures/pfp8.png" alt="" 
                        />
                        <div>
                            <div className="flex space-x-1">
                                <h1 className="font-bold">Zangetsu</h1>
                                <BadgeCheckIcon className="w-[18px] text-blue-400"/>
                            </div>
                         <h1 className="text-[12px] mt-1 text-gray-500">@YoungYhwach</h1>
                        </div>
                        
                    </div>
                    <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold">
                        Follow
                    </button>
                </div>
                
            </div>
        </div>
    )
}