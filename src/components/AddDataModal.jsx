import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Text from '../SwitcherComponents/Text';
import PDF from '../SwitcherComponents/PDF';
import EPUB from '../SwitcherComponents/EPUB';
import Url from '../SwitcherComponents/Url';
import Csv from '../SwitcherComponents/Csv';

const AddDataModal = ({onClose}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='fixed top-0 left-0 w-[100%] h-[100%] bg-[#00000080] flex justify-center items-center z-[999]'>
            <div className='modal-content w-[730px] max-h[calc(100%-64px)] m-auto rounded-xl bg-white p-2 z-[600] overflow-y-auto'>
                <div className='text-center text-[1.125rem] p-3 font-[500] border-b-[2px] border-[#0003]'>
                    <h3>Add Data</h3>
                </div>

                {/* Tabs */}
                <div className="flex gap-3 justify-center tabs mt-4">
                    <button
                        onClick={() => handleTabClick(0)}
                        className={`tab-button px-4 py-2 rounded-md text-[1.125rem] font-[400] ${activeTab === 0 ? 'bg-[#2872fa] text-white' : 'bg-gray-100 text-black border-[2px] border-[#2872fa]'}`}
                    >
                        Text
                    </button>
                    <button
                        onClick={() => handleTabClick(1)}
                        className={`tab-button px-4 py-2 rounded-md text-[1.125rem] font-[400] ${activeTab === 1 ? 'bg-[#2872fa] text-white' : 'bg-gray-100 text-black border-[2px] border-[#2872fa]'}`}
                    >
                        PDF
                    </button>
                    <button
                        onClick={() => handleTabClick(2)}
                        className={`tab-button px-4 py-2 rounded-md text-[1.125rem] font-[400] ${activeTab === 2 ? 'bg-[#2872fa] text-white' : 'bg-gray-100 text-black border-[2px] border-[#2872fa]'}`}
                    >
                        EPUB
                    </button>
                    <button
                        onClick={() => handleTabClick(3)}
                        className={`tab-button px-4 py-2 rounded-md text-[1.125rem] font-[400] ${activeTab === 3 ? 'bg-[#2872fa] text-white' : 'bg-gray-100 text-black border-[2px] border-[#2872fa]'}`}
                    >
                        Link
                    </button>
                    <button
                        onClick={() => handleTabClick(4)}
                        className={`tab-button px-4 py-2 rounded-md text-[1.125rem] font-[400] ${activeTab === 4 ? 'bg-[#2872fa] text-white' : 'bg-gray-100 text-black border-[2px] border-[#2872fa]'}`}
                    >
                        CSV
                    </button>
                </div>

                {/* Content for tabs */}
                <div className="content py-4 px-4">
                    {activeTab === 0 && <div><Text/></div>}
                    {activeTab === 1 && <div><PDF/></div>}
                    {activeTab === 2 && <div><EPUB/></div>}
                    {activeTab === 3 && <div><Url/></div>}
                    {activeTab === 4 && <div><Csv/></div>}
                </div>
                
                <div className=' border-t-[1px] border-[#0003] p-2'>
                <div className='flex justify-end gap-2 mt-2'>
                <button className='text-[0.875rem] px-2.5 py-1.5 text-[#fa2871] font-[500] border-[1px] border-[#fa2871] rounded-sm hover:bg-[#fceff3]' type='cancel' value={"Cancel"} onClick={onClose}>CANCEL</button>
                <button className='text-[0.875rem] px-2.5 py-1.5 bg-[#2872fa] text-white font-[500] border-[1px] border-none rounded-sm shadow-md shadow-[#0003] hover:bg-[#3d28fa]' type='submit' value={"Submit"}>SUBMIT</button>
                </div>
                </div>
                <button className='absolute top-6 right-4 text-[#757575]' onClick={onClose}><RxCross2 size={25}/></button>

            </div>
            
        </div>
    );
};

export default AddDataModal;