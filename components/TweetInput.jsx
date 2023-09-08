export default function () {
    return (
        <div className="flex space-x-3 p-3 border-b border-gray-700">
            <img 
            className="w-11 h-11 rounded-full object-cover"
            src="/assets/kylie.png" alt="" />
            <div>
                <textarea 
                placeholder="what's on your mind?"
                className="bg-transparent resize-none outline-none w-full min-h-[50px] text-lg"/>
            </div>
        </div>
    )
}