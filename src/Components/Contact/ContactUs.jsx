import React from 'react'

function ContactUs() {
  return (
    <>
   <div className='flex flex-col w-full  bg-black gap-5  '>

<div className='flex lg:flex-row flex-col w-full md:px-20 sm:px-10 px-5 pt-20 gap-5'>


<div className='flex flex-col gap-5 w-full'>

<div className='flex flex-col gap-5'>
    <h1 className='text-white md:text-5xl sm:text-3xl text-2xl font-bold'>
    DISCOVER US
    </h1>
<span className='text-white md:text-3xl sm:text-2xl text-xl underline'>MoonCart is here to help you;</span>

<p className='text-white md:text-2xl text-lg'>Our experts are available to answer any questions you might have. We’ve got the answers..</p>

</div>

<div className='flex sm:flex-row flex-col justify-between  gap-5 border-t-2 w-full pt-5'>

<div className='flex flex-col gap-1'>
<h1 className='text-white md:text-2xl text-xl font-semibold'>
  Call Us
</h1>

<span className='text-white'>+01-123-456-7890</span>
<span className='text-white'>+01-123-456-7890</span>
</div>

<div className='flex flex-col gap-1'>
  <h1 className='text-white md:text-2xl text-xl font-semibold'>Email Us</h1>
  <span className='text-white'>help@MoonCart.com</span>
</div>

</div>

</div>

<div className='flex w-full  md:p-20 sm:p-10 p-5 bg-white  '>

<div className='flex flex-col w-full'>


  <form className='w-full'>
      <div className="space-y-12 ">
        <div className="grid gap-5 border-gray-900/10 pb-12">

            <div className=" ">
              <label htmlFor="username" className="block text-lg font-medium leading-6 text-gray-900">
               Your Name
              </label>
              <div className="mt-2 w-full">
                <div className="bg-[#f3f3f3] flex w-full p-1  ">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 w-full border-0 outline-none bg-transparent py-1.5 pl-1 text-gray-400   sm:text-sm sm:leading-6"
                    
                  />
                </div>
              </div>
            </div>
                <div className="">
              <label htmlFor="username" className="block text-lg font-medium leading-6 text-gray-900">
              Email Address
              </label>
              <div className="mt-2 w-full">
              <div className="bg-[#f3f3f3] flex w-full p-1  ">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 w-full border-0 outline-none bg-transparent py-1.5 pl-1 text-gray-400   sm:text-sm sm:leading-6"
                    
                  />
                </div>
              </div>
            </div>

                <div className="">
              <label htmlFor="username" className="block text-lg font-medium leading-6 text-gray-900">
            Phone Number
              </label>
              <div className="mt-2 w-full">
              <div className="bg-[#f3f3f3] flex w-full p-1 ">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 w-full border-0 outline-none bg-transparent py-1.5 pl-1 text-gray-400   sm:text-sm sm:leading-6"
                    
                  />
                </div>
              </div>
            </div>

            <div className="">
              <label htmlFor="about" className="block text-lg font-medium leading-6 text-gray-900">
              Message
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full h-40 bg-[#f3f3f3] py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  outline-none  p-3 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>

        

          
        </div>

        

        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
       <div className='flex justify-center items-center p-5 w-full bg-black'>
<h1 className='text-white text-lg font-semibold'>SUBMIT</h1>
       </div>
      </div>
    </form>



</div>

</div>



</div>

<div className=' w-full overflow-hidden '>
<iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7210.539444658995!2d68.35194690000002!3d25.362275300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7065c88cc7a1%3A0x364afa619c200668!2sRangers%20Office!5e0!3m2!1sen!2s!4v1701420771281!5m2!1sen!2s" width="1500" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

   </div>

 


    </>
  )
}

export default ContactUs
