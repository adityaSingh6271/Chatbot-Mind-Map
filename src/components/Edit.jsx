import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const Edit = ({ onClose }) => {
    return (
        <div className='fixed top-0 left-0 w-[100%] h-[100%] bg-[#00000080] flex justify-center items-center z-[999]'>
            <div className='modal-content w-[730px] max-h[calc(100%-64px)] m-auto rounded-xl bg-white p-6 z-[600] overflow-y-auto'>
                <div className='text-center text-[1.125rem] p-3 font-[500] border-b-[1px] border-[#0003]'><h3>Edit Data</h3></div>
                <form className='flex flex-col gap-4 p-3 text-[1.125rem]' action="">
                    <div className='flex flex-col gap-1'>
                        <textarea type="text" name="answer" id="answer" placeholder='Data' defaultValue="Do you work on whatsapp?
Yes, we do offer our services on WhatsApp!" className='h-40 px-2 py-3 border-[1px] border-[#0003] rounded-md hover:border-black focus:outline-[#2872fa]' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <input type="text" name="action" id="action" placeholder='Read More/Source Link' className='px-2 py-3 border-[1px] border-[#0003] rounded-md hover:border-black focus:outline-[#2872fa]' />
                        <p className='ml-3 text-[0.75rem] font-[400] text-[#0009]'>The Source or Read More link user gets at the end of the message</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <input type="text" name="action" id="action" placeholder='Read More Label' className='px-2 py-3 border-[1px] border-[#0003] rounded-md hover:border-black focus:outline-[#2872fa]' />
                        <p className='ml-3 text-[0.75rem] font-[400] text-[#0009]'>The label for Read More link user gets at the end of the message</p>
                    </div>
                </form>

                <div className='flex justify-end gap-2 mt-4'>
                    <button className='text-[0.875rem] px-2.5 py-1.5 text-[#fa2871] font-[500] border-[1px] border-[#fa2871] rounded-sm hover:bg-[#fceff3]' type='cancel' value={"Cancel"} onClick={onClose}>CANCEL</button>
                    <button className='text-[0.875rem] px-2.5 py-1.5 bg-[#2872fa] text-white font-[500] border-[1px] border-none rounded-sm shadow-md shadow-[#0003] hover:bg-[#3d28fa]' type='submit' value={"Submit"}>Save</button>
                    <button className='absolute top-6 right-4 text-[#757575]' onClick={onClose}><RxCross2 size={25} /></button>
                </div>
            </div>
        </div>
    )
}

export default Edit