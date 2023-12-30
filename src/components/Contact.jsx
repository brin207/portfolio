import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#c6c0b8] dark:bg-[#474139] flex justify-center items-center p-4 pt-30'>
      <form method='POST' action='https://getform.io/f/39158c46-0fbb-4625-8a20-b1f6560faf9d' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#4a3c26] text-[#4a3c26] dark:border-[#d9cbb5] dark:text-[#d9cbb5]'>Contact</p>
            <p className='text-[#4a3c26] dark:text-[#d9cbb5] py-4'>Submit the form or email me(brenbuan207@gmail.com)... </p> 
        </div>
        <input className='p-2 bg-[#c0b9b1] placeholder-[#4a3c26] focus:outline-none dark:bg-[#c6c0b8] focus:border-[#4a3c26] focus:ring-1 focus:ring-[#4a3c26]' type='text' placeholder='Name' name="name" />
        <input className='my-4 p-2 bg-[#c0b9b1] placeholder-[#4a3c26] focus:outline-none dark:bg-[#c6c0b8] focus:border-[#4a3c26] focus:ring-1 focus:ring-black' type='email' placeholder='Email' name="email" />
        <textarea style={{minHeight:"250px"}} className='p-2 bg-[#c0b9b1] placeholder-[#4a3c26] dark:bg-[#c6c0b8] focus:outline-none focus:border-[#4a3c26] focus:ring-1 focus:ring-[#4a3c26]' name='message' rows='10' placeholder='Message'></textarea>
        <button className='rounded-lg text-[#c6c0b8] border-[#be731e] bg-[#be731e] hover:text-[#be731e] hover:bg-[#c6c0b8] hover:border-[#be731e] dark:bg-[#e19741] dark:text-[#474139] dark:border-[#e19741] dark:hover:text-[#e19741] dark:hover:bg-[#474139] dark:hover:border-[#e19741] border-2 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
