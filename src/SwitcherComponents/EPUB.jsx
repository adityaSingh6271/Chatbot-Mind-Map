import React, { useState, useRef } from 'react';
import { MdFileUpload, MdDelete } from 'react-icons/md';

const EPUB = () => {
  const [pdfFile, setPdfFile] = useState(null); 
  const fileInputRef = useRef(null);

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setPdfFile(file); // Set the file to state
    }
  };

  // Handle file removal
  const handleFileRemove = () => {
    setPdfFile(null); // Remove the file by setting state to null
    fileInputRef.current.value = ''; // Reset the input value to allow re-uploading the same file
  };

  return (
    <div>
      <form className='flex flex-col gap-5 p-1 text-[1.125rem]' action="">
        {/* Upload PDF Button */}
        <div className='flex justify-center'>
          <input
            type='file'
            name="epub"
            id="epub"
            className='border-none rounded-md hidden'
            ref={fileInputRef}
            onChange={handleFileChange} 
          />
          <label
            htmlFor="epub"
            className='text-[0.875rem] px-3 py-2 bg-[#2872fa] text-white font-[500] border-[1px] border-none rounded-sm shadow-md shadow-[#0003] hover:bg-[#3d28fa]'
          >
            <div className='flex items-center'>
              {pdfFile ? "Change PDF" : "UPLOAD EPUB"}
              <span className='ml-3 text-white'>
                <MdFileUpload size={20} />
              </span>
            </div>
          </label>
        </div>

        {/* Display Uploaded File Name and Delete Option */}
        {pdfFile && (
          <div className="flex justify-between items-center p-3 bg-gray-100 text-[1.125rem] font-[400] rounded-md shadow-sm">
            <span className="text-black text-[1rem]">
              {pdfFile.name} {/* Show uploaded file name */}
            </span>
            <button
              type="button"
              onClick={handleFileRemove} // Handle file removal
              className="text-red-500 hover:text-red-700"
            >
              <MdDelete size={24} /> {/* Delete icon */}
            </button>
          </div>
        )}

        {/* Source or Read More Link */}
        <div className='flex flex-col gap-1'>
          <input
            type="text"
            name="action"
            id="action"
            placeholder='Read More/Source Link'
            className='px-2 py-3 border-[1px] border-[#0003] rounded-md hover:border-black focus:outline-[#2872fa]'
          />
          <p className='ml-3 text-[0.75rem] font-[400] text-[#0009]'>
            The Source or Read More link user gets at the end of the message
          </p>
        </div>
      </form>
    </div>
  );
};

export default EPUB;
