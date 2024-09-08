import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const TrainingStatus = ({onClose}) => {
    return (
        <div className='fixed top-0 left-0 w-[100%] h-[100%] bg-[#00000080] flex justify-center items-center z-[999]'>
        <div className='w-[65%] h-[90%] modal-content m-auto rounded-xl bg-white p-2 z-[600] overflow-y-auto max-md:w-[98%]'>
            <div className='text-center text-[1.125rem] p-4 font-[500] border-b-[1px] border-[#0003]'><h3>Data Training Status</h3></div>
            <div className='h-[400px] min-w-[600px] w-[95%] mx-auto border-[1px] border-[#0003] rounded-lg mt-3 overflow-y-auto'>
                <div className='flex justify-between align-center p-3 border-b-[1px] border-[#0003]'>
                    <div className='font-[500] text-black'>Title</div>
                    <div className='font-[500] text-black'>Type</div>
                    <div className='font-[500] text-black'>Status</div>
                    <div className='font-[500] text-black'>Added On</div>
                </div>
                <div className='flex flex-col gap-1 justify-center items-center align-center h-[300px]'>
                    <img className='w-[125px]' src="https://dev-beyond-chats.netlify.app/static/media/no-data.f0671986e2ee5e7b68be7795897b72f2.svg" alt="" />
                    <p>No Data Added for training</p>
                </div>
            </div>
            <div className='border-t-[1px] border-[#0003] mt-3 p-2'>
            <button className='text-[0.875rem] px-2.5 py-1.5 text-[#fa2871] font-[500] border-[1px] border-[#fa2871] rounded-sm absolute bottom-4 right-4 hover:bg-[#fceff3]' onClick={onClose}>Cancel</button>
            <button className='absolute top-6 right-4 text-[#757575]' onClick={onClose}><RxCross2 size={25}/></button>
            </div>
        </div>
        </div>
    )
}

export default TrainingStatus