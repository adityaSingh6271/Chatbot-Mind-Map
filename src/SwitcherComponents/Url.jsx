import React from 'react'

const Url = () => {
  return (
    <div>
        <form className='flex flex-col gap-4 p-1 text-[1.125rem]' action="">

            <div className='flex flex-col gap-1'>
            <input type="text" placeholder="Link" className='px-2 py-3 border-[1px] border-[#0003] rounded-md hover:border-black focus:outline-[#2872fa] '/>
            </div>

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
  )
};


export default Url