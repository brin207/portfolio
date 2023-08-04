import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-black flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/39158c46-0fbb-4625-8a20-b1f6560faf9d' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-white text-white'>Contact</p>
            <p className='text-white py-4'>Submit the form or email me(brenbuan207@gmail.com)... </p>
        </div>
        <input className='p-2 bg-[#ccd6f6]' type='text' placeholder='Name' name="name" />
        <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name="email" />
        <textarea className='p-2 bg-[#ccd6f6]' name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:text-black hover:bg-white hover:border-white px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
