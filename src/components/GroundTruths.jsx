import React, {useState} from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import '../App.css'
import AddSuggestion from './AddSuggestion'

const GroundTruths = ({onClose}) => {

    const [showSuggestionBox, setShowSuggestionBox] = useState(false)
    
    return (
        <div className='fixed top-0 left-0 w-[100%] h-[100%] bg-[#00000080] flex justify-center items-center z-[999]'>
           <div className='modal-content w-[730px] h-[30%] m-auto rounded-xl bg-white p-2 z-[600] overflow-y-auto'>
           <div className='text-center text-[1.125rem] p-3 font-[500] border-b-[1px] border-[#0003]'><h3>Ground Truths</h3></div>
            <button className='flex justify-center items-center align-center px-3 py-1.5 mt-3 gap-2 text-[1rem] font-[500] text-[#2872fa] border-[1px] border-[#2872fa] rounded-md w-[95%] mx-auto' onClick={() => setShowSuggestionBox(!showSuggestionBox)}>ADD GROUND TRUTH <span><BsFillPlusCircleFill /></span></button>

            <div className='text-[1.125rem] font-[400] mt-3 text-center text-black'><p>No Ground Truths Added</p></div>
            <button className='absolute top-6 right-4 text-[#757575]' onClick={onClose}><RxCross2 size={25}/></button>
           </div>
           {showSuggestionBox && <AddSuggestion onClose={() => setShowSuggestionBox(false)}/>}
        </div>
    )   
}

export default GroundTruths