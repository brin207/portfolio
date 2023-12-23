import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen dark:bg-black flex justify-center items-center p-4 pt-30'>
      <form method='POST' action='https://getform.io/f/39158c46-0fbb-4625-8a20-b1f6560faf9d' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-4'>
            <p className='text-4xl font-bold inline border-b-4 border-black text-black dark:border-white dark:text-white'>Contact</p>
            <p className='dark:text-white py-4'>Submit the form or email me(brenbuan207@gmail.com)... </p> 
        </div>
        <input className='p-2 bg-[black] focus:outline-none dark:bg-white focus:border-black focus:ring-1 focus:ring-black' type='text' placeholder='Name' name="name" />
        <input className='my-4 p-2 bg-[black] focus:outline-none dark:bg-white focus:border-black focus:ring-1 focus:ring-black' type='email' placeholder='Email' name="email" />
        <textarea style={{minHeight:"250px"}} className='p-2 bg-[black] dark:bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black' name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-black border-black hover:text-white hover:bg-black hover:border-black dark:text-white dark:border-white border-2 dark:hover:text-black dark:hover:bg-white dark:hover:border-white px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
