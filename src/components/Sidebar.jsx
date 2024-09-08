import React, { useState } from 'react';
import { FiMenu, } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import '../StylingCSS/Sidebar.css';
import { PiChatCenteredTextFill } from 'react-icons/pi';
import { MdContactPhone } from 'react-icons/md';
import { LiaSitemapSolid } from 'react-icons/lia';
import { RiTeamFill } from 'react-icons/ri';
import { FaCog } from 'react-icons/fa';

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
            <div className="hamburger" onClick={toggleSidebar}>
                <div className=''>{isExpanded ? <IoIosArrowBack size={20} /> : <FiMenu size={20} />}</div>
            </div>

            <ul className="sidebar-menu">
                <a href="/#"><li className='cursor-pointer'>
                    {<PiChatCenteredTextFill className="icon icon-1" />}
                    {isExpanded && <span>Explore Chats</span>}
                </li></a>

                <a href="/#"><li className='cursor-pointer'>
                    <MdContactPhone className="icon icon-2" />
                    {isExpanded && <span>Business Leads</span>}
                </li></a>

                <a href="/#"><li className='cursor-pointer'>
                    <LiaSitemapSolid className="icon icon-3" />
                    {isExpanded && <span>View Mind Map</span>}
                </li></a>

                <a href="/#"><li className='cursor-pointer'>
                    <RiTeamFill className="icon icon-4"/>
                    {isExpanded && <span>Manage Teams</span>}
                </li></a>

                <a href="/#"><li className='cursor-pointer'>
                    <FaCog className="icon icon-5" />
                    {isExpanded && <span>Configure Chatbot</span>}
                </li></a>
            </ul>
        </div>
    );
};

export default Sidebar;
