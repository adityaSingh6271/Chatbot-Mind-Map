import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const AddSuggestion = ({onClose}) => {
  return (
    <div className='fixed top-0 left-0 w-[100%] h-[100%] bg-[#00000080] flex justify-center items-center z-[999]'>
        <div className='modal-content w-[730px] h-[75%] m-auto rounded-xl bg-white p-2 z-[600] overflow-y-auto'>
        <div className='text-center text-[1.125rem] p-3 font-[500] border-b-[1px] border-[#0003]'><h3>Add Suggestion</h3></div>
        <div>
            <form className='flex flex-col gap-2.5 p-3 text-[1.125rem]' action="">
                <div className='flex flex-col gap-1'>
                    <input type="text" name="question" id="question" placeholder='Question*' className='px-2 py-3 border-[1px] border-[#0003] rounded-md hover:border-black focus:outline-[#2872fa]' />
                </div>
                <div className='flex flex-col gap-1'>
                    <textarea type="text" name="answer" id="answer" placeholder='Answer' className='h-40 px-2 py-3 border-[1px] border-[#0003] rounded-md hover:border-black focus:outline-[#2872fa]' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='hidden' htmlFor="action">Business Action</label>
                    <select  className='px-2 py-3 border-[1px] border-[#0003] rounded-md hover:border-black focus:outline-[#2872fa]' name="action" id="action">
                        <option value="No Action">No Action</option>
                        <option value="Whatsapp Us">Whatsapp Us</option>
                        <option value="New Action">New Action</option>
                        <option value="Whatsapp Us">Whatsapp Us</option>
                    </select>
                </div>
                <div className=' border-t-[1px] border-[#0003]'>
                <div className='flex justify-end gap-2 mt-2 p-2'>
                <button className='text-[0.875rem] px-2.5 py-1.5 text-[#fa2871] font-[500] border-[1px] border-[#fa2871] rounded-sm hover:bg-[#fceff3]' type='cancel' value={"Cancel"} onClick={onClose}>CANCEL</button>
                <button className='text-[0.875rem] px-2.5 py-1.5 bg-[#2872fa] text-white font-[500] border-[1px] border-none rounded-sm shadow-md shadow-[#0003] hover:bg-[#3d28fa]' type='submit' value={"Submit"}>SUBMIT</button>
                </div>
                </div>
                <button className='absolute top-6 right-4 text-[#757575]' onClick={onClose}><RxCross2 size={25}/></button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default AddSuggestion