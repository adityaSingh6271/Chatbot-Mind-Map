import React, { useState } from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { MdDelete, MdEdit } from 'react-icons/md';
import Delete from './Delete';
import Edit from './Edit';

const DataTable = () => {

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    let data = [
        {
            id: 1,
            data: 'Do you work on whatsapp? Yes, we do offer our services on WhatsApp!',
            source: '--',
            type: 'Text',
            created_at: '03/08/2024',
            actions: ''
        },
        {
            id: 2,
            data: 'Do you work on whatsapp? Yes, we do offer our services on WhatsApp!',
            source: '--',
            type: 'Text',
            created_at: '02/02/2024',
            actions: ''
        },
        {
            id: 3,
            data: 'Do you work on whatsapp? Yes, we do offer our services on WhatsApp!',
            source: '--',
            type: 'Text',
            created_at: '08/06/2024',
            actions: ''
        },
        {
            id: 4,
            data: 'Do you work on whatsapp? Yes, we do offer our services on WhatsApp!',
            source: '--',
            type: 'Text',
            created_at: '05/07/2024',
            actions: ''
        },
        {
            id: 5,
            data: 'Do you work on whatsapp? Yes, we do offer our services on WhatsApp!',
            source: '--',
            type: 'Text',
            created_at: '05/07/2024',
            actions: ''
        },
        {
            id: 6,
            data: 'Do you work on whatsapp? Yes, we do offer our services on WhatsApp!',
            source: '--',
            type: 'Text',
            created_at: '11/04/2024',
            actions: ''
        },
        {
            id: 7,
            data: 'Do you work on whatsapp? Yes, we do offer our services on WhatsApp!',
            source: '--',
            type: 'Text',
            created_at: '09/01/2024',
            actions: ''
        },
        {
            id: 8,
            data: 'Do you work on whatsapp? Yes, we do offer our services on WhatsApp!',
            source: '--',
            type: 'Text',
            created_at: '05/03/2024',
            actions: ''
        },
        {
            id: 9,
            data: 'Do you work on whatsapp? Yes, we do offer our services on WhatsApp!',
            source: '--',
            type: 'Text',
            created_at: '07/07/2024',
            actions: ''
        },
        {
            id: 10,
            data: 'Do you work on whatsapp? Yes, we do offer our services on WhatsApp!',
            source: '--',
            type: 'Text',
            created_at: '08/07/2024',
            actions: ''
        },
        {
            id: 11,
            data: 'Do you work on whatsapp? Yes, we do offer our services on WhatsApp!',
            source: '--',
            type: 'Text',
            created_at: '1/05/2024',
            actions: ''
        },
        {
            id: 12,
            data: 'Do you work on whatsapp? Yes, we do offer our services on WhatsApp!',
            source: '--',
            type: 'Text',
            created_at: '01/01/2024',
            actions: ''
        }
    ]

    // Calculate pagination details
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className='w-[calc(100%-64px)] ml-[70px] flex flex-col overflow-y-hidden max-md:w-full max-md:ml-[75px]'>
            <div className='mt-8 p-3 h-full w-full border-[#0003] border-[1px] rounded-[8px]'>
                {/* Table Header */}
                <div className='flex justify-between gap-2 text-[1.1rem] font-[500] border-b-[1px] pb-2'>
                    <div className='w-[40%] pl-2'>Data</div>
                    <div className='flex items-center justify-between w-[60%]'>
                        <div className='w-[25%] text-center'>Source</div>
                        <div className='w-[25%] text-center'>Type</div>
                        <div className='w-[25%] text-center max-md:w-[29%]'>Created At</div>
                        <div className='w-[25%] text-center'>Actions</div>
                    </div>
                </div>

                {/* Data Rows */}
                <div className='mt-4'>
                    {currentData.map((item) => (
                        <div key={item.id} className='flex justify-between gap-2 py-3 border-b-[1px] items-center'>
                            {/* Data Content */}
                            <div className='w-[40%] pl-2 text-[1rem]'>{item.data}</div>

                            {/* Other Columns */}
                            <div className='flex items-center justify-between w-[60%]'>
                                <div className='w-[25%] text-center text-[1rem]'>{item.source}</div>
                                <div className='w-[25%] text-center text-[1rem] border-[1px] border-[#2872fa] rounded-3xl'>{item.type}</div>
                                <div className='w-[25%] text-center text-[1rem] max-md:w-[29%]'>{item.created_at}</div>
                                <div className='w-[25%] text-center text-[1rem]'>{!item.actions ? <span className='flex items-center justify-center gap-2 cursor-pointer'><MdEdit size={25} color='#2872fa' onClick={() => setShowEditModal(!showEditModal)}/><MdDelete size={25} color='#fa2871' onClick={() => setShowDeleteModal(!showDeleteModal)} /></span> : 'N/A'}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Pagination Controls */}
            <div className='flex justify-center items-center gap-2 mt-4 mb-4'>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='cursor-pointer'
                >
                    <IoChevronBack size={25} />
                </button>
                <div className='flex flex-wrap items-center gap-2'>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-[13px] py-1 rounded-[50%] ${currentPage === index + 1 ? 'bg-[#2872fa] text-white ' : 'bg-gray-200'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='cursor-pointer'
                >
                    <IoChevronForward size={25} />
                </button>
            </div>

            {showDeleteModal && <Delete onClose={() => setShowDeleteModal(false)} />}

            {showEditModal && <Edit onClose={() => setShowEditModal(false)} />}
        </div>
    );
}

export default DataTable