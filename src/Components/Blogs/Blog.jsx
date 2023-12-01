import React from 'react'
import { FaArrowRight} from "react-icons/fa";

function Blog() {
  return (
    <>
       <div className='flex w-full  bg-[#fbfbfb] md:p-32 sm:p-10 p-5 '>
<div className='flex flex-col gap-4 justify-center items-center w-full'>
    <h1 className='md:text-4xl text-2xl font-bold '>BLOG</h1>
   <div className='flex justify-center items-center gap-3 font-semibold w-full'>Home  <FaArrowRight /> BLOG</div>
</div>
   </div>
    </>
  )
}

export default Blog
