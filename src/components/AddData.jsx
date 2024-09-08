import React, {useState} from 'react'
import { IoAddSharp } from 'react-icons/io5'
import { PiChatsFill, PiClockCounterClockwise } from 'react-icons/pi'
import Select from "react-select";
import TrainingStatus from './TrainingStatus';
import GroundTruths from './GroundTruths';
import AddDataModal from './AddDataModal';

const AddData = () => {

  const results = [
    {value:'1', label: '1'},
    {value:'2', label: '2'},
    {value:'3', label: '3'},
    {value:'4', label: '4'},
    {value:'5', label: '5'},
    {value:'6', label: '6'},
    {value:'7', label: '7'},
    {value:'8', label: '8'},
    {value: '9', label:'9'},
    {value: '10', label:'10'},
    {value: '20', label:'20'},
    {value: '30', label:'30'},
    {value: '40', label:'40'},
    {value: '50', label:'50'},
  ];

  const [showDataTrainingStatus, setShowDataTrainingStatus] = useState(false)
  const [showGroundTruths, setShowGroundTruths] = useState(false)
  const [showAddDataModal, setShowAddDataModal] = useState(false)

  return (
    <>
      <div className='flex flex-row gap-2 justify-center items-center mt-3 max-md:w-full max-md:ml-[64px]'>

        <button className='flex justify-center items-center px-3 py-1.5 gap-2 text-[1rem] font-[500] bg-[#2872fa] text-white rounded-md shadow-md shadow-slate-400 hover:bg-[#4728fa]' onClick={() => setShowAddDataModal(!showAddDataModal)}><IoAddSharp size={25} /><p>ADD DATA</p></button>

        <button className='flex justify-center items-center px-3 py-1.5 gap-2 text-[1rem] font-[500] bg-[#fa2871] text-white rounded-md shadow-md shadow-slate-400 hover:bg-[#00000080]' onClick={() => setShowDataTrainingStatus(!showDataTrainingStatus)}><PiClockCounterClockwise size={25} /><p>DATA TRAINING STATUS</p></button>

        <button className='flex justify-center items-center px-3 py-1.5 gap-2 text-[1rem] font-[500] text-[#fa2871] border-[1px] border-[#fa2871] rounded-md hover:bg-[#faedf0]' onClick={() => setShowGroundTruths(!showGroundTruths)}><PiChatsFill size={25} /><p>GROUND TRUTHS</p></button>

      </div>

      {/**horizontal divider */}
      <div className='w-[70%] h-[2px] bg-slate-500 mx-auto mt-3 flex max-md:text-center'></div>

      <form action="" className='flex flex-row gap-2 justify-center items-center mt-3 max-md:ml-[64px] max-md:justify-center'>
        <div className=''>
          <input className='text-[1.125rem] border-[1px] border-gray-400 px-3 py-1.5 rounded-md hover:border-black focus:outline-[#2872fa]' type="text" placeholder="Search" name="name" id="name" />
          <label htmlFor="name"></label>
        </div>

        <div>
          <Select
            className="text-[1.125rem] rounded-md hover:border-black focus:outline-[#2872fa] w-[8rem]"
            placeholder="Results" 
            value={results.value}
            options={results}
          />
        </div>

        <button className='bg-[#2872fa] text-white text-[0.875rem] font-[500] py-2.5 px-3 rounded-sm shadow-md shadow-slate-400 hover:bg-[#4728fa]'>SEARCH</button>

      </form>
      {showDataTrainingStatus && <TrainingStatus onClose={() => setShowDataTrainingStatus(!showDataTrainingStatus)}/>}

        {showGroundTruths && <GroundTruths onClose={() => setShowGroundTruths(!showGroundTruths)}/>}

          {showAddDataModal && <AddDataModal onClose={() => setShowAddDataModal(!showAddDataModal)}/>}
    </>
  )
}

export default AddData