import React from 'react';
import Modal from './modal';

interface Props {
    subject : string,
    show : any,
    setShow : React.Dispatch<React.SetStateAction<boolean>>,
    children : any
}

const ModalForm : React.FC<Props> = ({ subject , show , setShow , children }) => {
    return(
        <Modal 
            show={show}
        >
            <div className='max-w-max'>
                <div className='flex justify-between bg-slate-100 shadow-md p-3'>
                    <div className='mr-2 text-lg font-bold'>{subject}</div>
                    <button onClick={() => {setShow(false)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-rose-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className='px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                    {children}
                </div>
            </div>
        </Modal>
    )
}

export default ModalForm;