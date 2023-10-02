import { closeCommentModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal"
import { useDispatch, useSelector } from "react-redux"

export default function CommentModal() {

    const isOpen = useSelector(state => state.modals.commentModalOpen);
    const dispatch = useDispatch();
    return (
    <>
        <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeCommentModal())}
        >
            <div className="w-full h-full sm:w-[600px] sm:h-[386px] rounded-lg bg-black border border-gray-500 text-white
            sm:p-10 p-4
            " 
            >
                <div>
                    <div flex space-x-3>
                        <img 
                        className="w-12 h0-12 object-cover rounded-full"
                        src="/assets/adultSasuke.png" alt="" />
                        <div>
                            <div className="flex space-x-1.5">
                                <h1 className="font-bold">Sasuke</h1>
                                <h1 className="text-gray-500">@Sasuke</h1>
                            </div>
                            <p className="mt-1">This is Indra's reincarnation</p>
                            <h1 className="text-gray-500 text-[15px]">Replying to <span className="text-[#1b9bf0]"
                            >@naruto</span>
                            </h1>
                        </div>
                        
                    </div>
                </div>
        
                <div className="mt-11">
                    <div flex space-x-3>
                        <img 
                        className="w-12 h0-12 object-cover rounded-full"
                        src="/assets/adultSasuke.png" alt="" />
                        <div className="w-full">
                            <textarea className="w-full bg-transparent resize"
                            placeholder="Tweet your reply"
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </Modal>
    </>
    )
}