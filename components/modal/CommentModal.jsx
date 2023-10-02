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
            <div className="w-[500px] h-[500px] bg-white">
                This is the comment modal
            </div>
        </Modal>
    </>
    )
}