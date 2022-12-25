import React from "react";
import Modal from "../modal";

interface Props {
    showLoading : any
}

const LoadingModal : React.FC<Props> = ({ showLoading }) => {
    return(
        <Modal
            show={showLoading}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            درحال بارگزاری
        </Modal>
    )
}

export default LoadingModal;