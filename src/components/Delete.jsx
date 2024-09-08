import React from 'react'
import { IoIosInformationCircleOutline } from 'react-icons/io'

const Delete = ({onClose}) => {
    return (
        <div className='fixed top-0 left-0 w-[100%] h-[100%] bg-[#00000080] flex justify-center items-center z-[999]'>
            <div className='modal-content w-fit max-h[calc(100%-64px)] m-auto rounded-xl bg-white p-6 z-[600] overflow-y-auto'>
                <div className='flex flex-col gap-3 justify-center items-center'>
                <div className='text-[#fa2871]'><IoIosInformationCircleOutline size={120}/></div>
                <div className='text-[1.875rem] font-[600]'>Confirmation</div>
                <div className='text-[1.125rem] font-[400]'>Are you sure you want to delete this data?</div>
                </div>
            
            <div className='flex justify-end gap-2 mt-4'>
                <button className='text-[0.875rem] px-2.5 py-1.5 text-[#fa2871] font-[500] border-[1px] border-[#fa2871] rounded-sm hover:bg-[#fceff3]' type='cancel' value={"Cancel"} onClick={onClose}>CANCEL</button>
                <button className='text-[0.875rem] px-4 py-1.5 bg-[#2872fa] text-white font-[500] border-[1px] border-none rounded-sm shadow-md shadow-[#0003] hover:bg-[#3d28fa]' type='submit' value={"Submit"}>OK</button>
                </div>
                </div>
        </div>
    )
}

export default Delete