import React from 'react'

function Contact() {
  return (
    <div>
        <div className=' w-[100%] bg-black  text-[9vw] md:text-[9vw] leading-none  py-2 font-druk text-gray-300'>
             <h1 className='text-[70px] font-bold px-10'> D!</h1>
      </div>
       <section className="min-h-screen bg-black text-white px-4 ">
  <div className="h-[100vh] flex flex-col  md:flex-row  justify-between  space-y-10 ">
    
    {/* Left Title */}
    <div className="w-[40%]  mt-10">
      <h2 className="text-[25px] mt-5 font-bold">Contact</h2>
    
      
    </div>
    {/* Right Content */}
   <div className="  w-[50%] overflow-y-auto hide-scrollbar px-4 ">
    <div className='border p-10 rounded-xl'>
      {/* Title */}
      <h2 className="text-4xl mb-6 font-semibold">
        Send Us A Message
      </h2>

      {/* Form */}
      <form className="flex flex-col space-y-4">
        {/* Name */}
        <input
          type="text"
          placeholder="Name:*"
          required
          className="bg-black border border-gray-500 p-3 outline-none"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email:*"
          required
          className="bg-black border border-gray-500 p-3 outline-none"
        />

        {/* Team to contact (Select) */}
        <select
          required
          className="bg-black border border-gray-500 p-3 outline-none appearance-none"
        >
          <option value="">Team to contact:*</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="general">General</option>
        </select>

        {/* Enquiry Type (Select) */}
        <select
          required
          className="bg-black border border-gray-500 p-3 outline-none appearance-none"
        >
          <option value="">Enquiry type:*</option>
          <option value="question">Question</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>

        {/* Textarea */}
        <textarea
          placeholder="Please write your message here."
          rows="5"
          required
          className="bg-black border border-gray-500 p-3 outline-none"
        ></textarea>

        {/* Checkbox */}
        <label className="flex items-center space-x-2">
         <input
  type="checkbox"
  className="bg-black border border-gray-500 w-6 h-6  "
/>

          <span>
            I would like to be added to the Design Declares! newsletter and
            receive further updates.
          </span>
        </label>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-gray-200 text-black font-semibold px-4 py-2 rounded-full w-[30%] text-[20px] hover:bg-orange-700"
        >
          Send Message
        </button>
      </form>
    </div>
    
    </div>
  </div>
</section>
  
    </div>
  )
}

export default Contact
