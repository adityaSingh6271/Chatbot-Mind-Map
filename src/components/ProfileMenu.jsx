import React from 'react'
import { PiChatCenteredTextFill } from 'react-icons/pi';
import { MdContactPhone } from 'react-icons/md';
import { LiaSitemapSolid } from 'react-icons/lia';
import { RiTeamFill } from 'react-icons/ri';
import { FaCog } from 'react-icons/fa';
const ProfileMenu = () => {
    return (
        <div className='fixed top-16 right-4 h-auto bg-white text-black rounded p-3 shadow-xl shadow-[#0003]'>
            <ul className="flex flex-col gap-4 justify-center">
                
                <a href="/"><li className="flex items-center gap-2 text-[1.125rem] cursor-pointer">
                    <PiChatCenteredTextFill size={25} className="icon" />
                    <span>Explore Chats</span>
                </li></a>

                <a href="/"><li className="flex items-center gap-2 text-[1.125rem] cursor-pointer">
                    <MdContactPhone size={25} className="icon" />
                    <span>Business Leads</span>
                </li></a>

                <a href="/"><li className="flex items-center gap-2 text-[1.125rem] cursor-pointer">
                    <LiaSitemapSolid size={25} className="icon" />
                    <span>View Mind Map</span>
                </li></a>

                <a href="/"><li className="flex items-center gap-2 text-[1.125rem] cursor-pointer">
                    <RiTeamFill size={25} className="icon" />
                    <span>Manage Teams</span>
                </li></a>

               <a href="/"> <li className="flex items-center gap-2 text-[1.125rem] cursor-pointer">
                    <FaCog size={25} className="icon" />
                    <span>Configure Chatbot</span>
                </li></a>
                
            </ul>
        </div>
    )
}

export default ProfileMenu