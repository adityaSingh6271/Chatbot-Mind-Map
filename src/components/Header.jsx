import React, { useState, useContext } from 'react'
import { FaAngleDown, FaInfo } from 'react-icons/fa'
import ProfileMenu from './ProfileMenu'
import { TourContext } from '../context/TourProvider';

const Header = () => {

    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const { startTour } = useContext(TourContext);;

    return (
        <div>
            <div className='flex justify-between items-center p-3 border-b-2 border-[#0003] shadow-md shadow-gray-300 ml-[64px] w-[calc(100vw-64px)] max-md:w-full'>
                <div className='flex justify-center items-center gap-2 bg-white'>
                    <div className='text-[1.5rem] font-[500] max-md:text-center max-md:text-[1rem] max-md:p-0'>Chatbot Mind Map</div>

                    <div class="hover-text"><FaInfo />
                        <span class="tooltip-text" id="right">This is the brain and the memory of the chatbot. You can add, edit and analyse the source data being used to answer user queries from here.</span>
                    </div>

                </div>
                <div className='flex justify-center items-center gap-6'>
                    <div className='text-[#2872fa] border-[1px] rounded border-[#2872fa] px-3 py-2 text-[1rem] font-[500] hover:cursor-pointer hover:bg-[#f0f4fc] max-md:text-[0.8rem]' onClick={startTour}>GUIDED TOUR</div>
                    <div className='flex justify-center items-center gap-2 cursor-pointer'><p className='text-[1.125rem] font-[400] max-md:text-[0.8rem]' alt="View Orgs">SELECT ORG</p> <span className='text-[#2872fa]'><FaAngleDown size={20} /></span></div>
                    <div className='shadow-[0_0_0_2px_#2872fa] rounded-full overflow-hidden cursor-pointer'>
                        <img src="https://api.dicebear.com/5.x/micah/svg?seed=beyondchat@gmail.com" alt="" style={{ width: "40px", height: "40px" }} onClick={() => setShowProfileMenu(!showProfileMenu)} />
                    </div>
                    {showProfileMenu && <ProfileMenu />}
                    {/* {showGuidedTour && <GuidedTour onClose={() => setShowGuidedTour(false)}/>} */}
                </div>

            </div>

        </div>
    )
}

export default Header