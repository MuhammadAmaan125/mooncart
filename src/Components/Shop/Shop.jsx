import React from 'react'
import { FaArrowRight} from "react-icons/fa";

function Shop() {

 
  


  return (
    <>
   <div className='flex w-full  bg-[#fbfbfb] md:p-32 sm:p-10 p-5 '>
<div className='flex flex-col gap-4 justify-center items-center w-full'>
    <h1 className='md:text-4xl text-2xl font-bold '>Shop Standard</h1>
   <div className='flex justify-center items-center gap-3 font-semibold w-full'>Home  <FaArrowRight /> Shop Standard</div>
</div>
   </div>

<div className='flex flex-row w-full'>

<div className='lg:w-[30%]'>
<div className='w-full hidden lg:block '>

<div className='flex items-center p-5 my-3 gap-3'>
<svg className='w-4 h-4' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m496 384h-336v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16h-80c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16h-336c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-208v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16h-208c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"/></svg>
<h1>Filter</h1>
</div>

<div className="bg-gray-200 flex items-center justify-around w-[70%]  m-5">
        <input
          type="text"
          placeholder="Search Product"
          className="outline-none bg-transparent p-3 placeholder:text-gray-400 "
        />

        <svg
          height="25"
          viewBox="0 0 20 20"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m8.5 3c3.0375661 0 5.5 2.46243388 5.5 5.5 0 1.3387897-.4783412 2.5658568-1.2734386 3.5196163l4.126992 4.1268303c.1952621.1952622.1952621.5118446 0 .7071068-.1735664.1735663-.4429908.1928515-.6378589.0578554l-.0692479-.0578554-4.1268303-4.126992c-.9537595.7950974-2.1808266 1.2734386-3.5196163 1.2734386-3.03756612 0-5.5-2.4624339-5.5-5.5 0-3.03756612 2.46243388-5.5 5.5-5.5zm0 1c-2.48528137 0-4.5 2.01471863-4.5 4.5 0 2.4852814 2.01471863 4.5 4.5 4.5 2.4852814 0 4.5-2.0147186 4.5-4.5 0-2.48528137-2.0147186-4.5-4.5-4.5z"
            fill="#212121"
          />
        </svg>
      </div>




<div className='py-5'>

<h1 className='text-black m-5 font-medium'>Price</h1>
<input className='mx-5 w-[75%]' type="range" />

<div className='flex mx-5 gap-5'>
    <h1>Min Price: $58</h1>
    <h1> Max Price: $189</h1>
</div>


    <h1 className='my-8 px-5 font-bold'>Color</h1>


    <div className='flex m-8  gap-5'>
        <input type="radio" name='color' />
        <input type="radio" name='color'/>
        <input type="radio" name='color'/>
        <input type="radio" name='color'/>
        <input type="radio" name='color'/>
        <input type="radio" name='color'/>
        <input type="radio" name='color'/>
        <input type="radio" name='color'/>


    </div>


 

 <h1 className='m-5 font-bold'>Size</h1>


<div className='flex m-5 gap-5'>
   <button className=' border w-8 h-8 hover:border-black focus:bg-black focus:text-white'>4</button>
   <button className=' border w-8 h-8 hover:border-black focus:bg-black focus:text-white'>6</button>
   <button className=' border w-8 h-8 hover:border-black focus:bg-black focus:text-white'>8</button>
   <button className=' border w-8 h-8 hover:border-black focus:bg-black focus:text-white'>10</button>
   <button className=' border w-8 h-8 hover:border-black focus:bg-black focus:text-white'>12</button>
   <button className=' border w-8 h-8 hover:border-black focus:bg-black focus:text-white'>14</button>
   <button className=' border w-8 h-8 hover:border-black focus:bg-black focus:text-white'>16</button>



</div>


<h1 className='m-5 font-bold'>Category</h1>

<div className='my-3 leading-10'>

<div className='flex justify-between mx-5'><h1>Yoga Mats</h1> <h1>(15)</h1></div>
<div className='flex justify-between mx-5'><h1>Yoga Accessories</h1> <h1>(8)</h1></div>
<div className='flex justify-between mx-5'><h1>Reusable Bags</h1> <h1>(17)</h1></div>
<div className='flex justify-between mx-5'><h1>Water Bottles</h1> <h1>(2)</h1></div>
<div className='flex justify-between mx-5'><h1>Bamboo Toothbrushes</h1> <h1>(7)</h1></div>
<div className='flex justify-between mx-5'><h1>Fitness Trackers</h1> <h1>(2)</h1></div>
<div className='flex justify-between mx-5'><h1>Home Fitness Equipment</h1> <h1>(7)</h1></div>
</div>




<h1 className='m-5 font-bold'>Tags</h1>


<div className='grid grid-cols-3 '>

    <button className='bg-gray-200 m-2  p-1'>Mats</button>
    <button className='bg-gray-200 m-2 p-1'>Accessories</button>
    <button className='bg-gray-200 m-2 p-1'>Bottles</button>


    <button className='bg-gray-200 m-2 p-1'>Bottles</button>
    <button className='bg-gray-200 m-2 p-1'>Tracker</button>
    <button className='bg-gray-200 m-2 p-1'>Bags</button>


    <button className='bg-gray-200 m-2 p-1'>Cup</button>
    <button className='bg-gray-200 m-2 p-1'>Toothbrush</button>
    

</div>



<button className='bg-green-800 m-2 py-2 px-4 text-white'>Reset</button>

</div>




        </div>


</div>



<div className='lg:w-[70%] w-full '>


<div className='flex md:flex-row flex-col w-full p-5'>

<div className=' w-full flex md:text-start text-center '>



<div className='w-full border-r-2'><h1>Showing 1–5 Of 50 Results</h1></div>


        </div>


<div className='w-full flex justify-center  items-center sm:flex-row flex-col md:p-0 p-5 gap-3'>

    <div className='w-full md:text-start text-center border-r-2'>
        <select name="" id="">
        <option value="" selected disabled>Default Sorting</option>
        </select>
        </div>



    <div className='w-full md:text-start text-center border-r-2'>

    <select name="" id="">
        <option value="" selected disabled>Default Sorting</option>
        </select>
    </div>




    <div className='w-full  md:justify-start md:items-start justify-center items-center flex gap-3'>

    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="9" y1="6" x2="20" y2="6" />
  <line x1="9" y1="12" x2="20" y2="12" />
  <line x1="9" y1="18" x2="20" y2="18" />
  <line x1="5" y1="6" x2="5" y2="6.01" />
  <line x1="5" y1="12" x2="5" y2="12.01" />
  <line x1="5" y1="18" x2="5" y2="18.01" />
</svg>



    <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"
    fill="currentColor"
  />
  <path
    d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z"
    fill="currentColor"
  />
  <path
    d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z"
    fill="currentColor"
  />
  <path
    d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
    fill="currentColor"
  />
  <path
    d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
    fill="currentColor"
  />
  <path
    d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
    fill="currentColor"
  />
  <path
    d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z"
    fill="currentColor"
  />
  <path
    d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z"
    fill="currentColor"
  />
  <path
    d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z"
    fill="currentColor"
  />
</svg>


<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="#292d32"><path d="m17.5401 9.06014c-1.77 0-3.21-1.44-3.21-3.21s1.44-3.21 3.21-3.21 3.21 1.44 3.21 3.21-1.44 3.21-3.21 3.21zm0-4.93c-.94 0-1.71.77-1.71 1.71s.77 1.71 1.71 1.71 1.71-.77 1.71-1.71-.77-1.71-1.71-1.71z"/><path d="m6.46001 9.06014c-1.77 0-3.21001-1.44-3.21001-3.21s1.44001-3.21 3.21001-3.21 3.20999 1.44 3.20999 3.21-1.43999 3.21-3.20999 3.21zm0-4.93c-.94 0-1.71001.77-1.71001 1.71s.77001 1.71 1.71001 1.71 1.70999-.77 1.70999-1.71-.75999-1.71-1.70999-1.71z"/><path d="m17.5401 21.3702c-1.77 0-3.21-1.44-3.21-3.21s1.44-3.21 3.21-3.21 3.21 1.44 3.21 3.21-1.44 3.21-3.21 3.21zm0-4.93c-.94 0-1.71.77-1.71 1.71s.77 1.71 1.71 1.71 1.71-.77 1.71-1.71-.77-1.71-1.71-1.71z"/><path d="m6.46001 21.3702c-1.77 0-3.21001-1.44-3.21001-3.21s1.44001-3.21 3.21001-3.21 3.20999 1.44 3.20999 3.21-1.43999 3.21-3.20999 3.21zm0-4.93c-.94 0-1.71001.77-1.71001 1.71s.77001 1.71 1.71001 1.71 1.70999-.77 1.70999-1.71-.75999-1.71-1.70999-1.71z"/></g></svg>


<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"
    fill="currentColor"
  />
  <path
    d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z"
    fill="currentColor"
  />
  <path
    d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z"
    fill="currentColor"
  />
  <path
    d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
    fill="currentColor"
  />
  <path
    d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
    fill="currentColor"
  />
  <path
    d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
    fill="currentColor"
  />
  <path
    d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z"
    fill="currentColor"
  />
  <path
    d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z"
    fill="currentColor"
  />
  <path
    d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z"
    fill="currentColor"
  />
</svg>





    </div>

</div>

</div>


<div className='flex w-full'>


<div className=" grid lg:grid-cols-4 md:grid-cols-2 w-full sm:grid-cols-2 grid-cols-1  ">


<div className='flex w-full justify-center items-center'>
<div class="card   p-3 cursor-pointer h-[400px] " >
<div className='flex justify-between'>
<button className='bg-black text-white px-1.5 font-semiboldc text-sm'>20%</button>
<button className='bg-green-800 text-white px-1.5  text-sm'>FEATURED</button>

</div>
<img className='w-52 h-56 my-5' src="https://mooncart.dexignzone.com/xhtml/images/shop/product/1.png" class="card-img-top" alt="..."/>

<div class="card-body text-center" >

  <h4>Featured Books</h4>
  <ul class="flex justify-center items-center gap-2">
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
													</ul>
                                              <div>
                                              <p>$15.99 <del>$20.99</del></p>
                                              </div>

</div>

</div> 

</div>


     
<div className="flex justify-center items-center">
<div class="card   p-3 cursor-pointer h-[400px] " >
<div className='flex justify-between'>
<button className='bg-black text-white px-1.5 font-semiboldc text-sm'>20%</button>
<button className='bg-green-800 text-white px-1.5  text-sm'>FEATURED</button>

</div>
<img className='w-52 h-56 my-5' src="https://mooncart.dexignzone.com/xhtml/images/shop/product/2.png" class="card-img-top" alt="..."/>

<div class="card-body text-center" >

  <h4>Featured Books</h4>
  <ul class="flex justify-center items-center gap-2">
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
													</ul>
                                              <div>
                                              <p>$15.99 <del>$20.99</del></p>
                                              </div>

</div>

</div> 
</div>
    

<div className="flex justify-center items-center">
<div class="card   p-3 cursor-pointer h-[400px] " >
<div className='flex justify-between'>
<button className='bg-black text-white px-1.5 font-semibold text-sm'>-12%</button>

</div>

<img className='w-52 h-56 my-5' src="https://mooncart.dexignzone.com/xhtml/images/shop/product/3.png" class="card-img-top" alt="..."/>
<div class="card-body text-center" >
  <h4>Featured Books</h4>
  <ul class="flex justify-center items-center gap-2">
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
													</ul>
                                              <div>
                                              <p>$15.99 <del>$20.99</del></p>
                                              </div>

</div>

</div> 
</div>



<div className="flex justify-center items-center">
<div class="card   p-3 cursor-pointer h-[400px] " >
<div className='flex justify-between'>
<button className='bg-black text-white px-1.5 font-semibold text-sm'>-12%</button>
<button className='bg-green-800 text-white px-1.5 font-semibold text-sm'>FEATURED</button>

</div>

<img className='w-52 h-56 my-5' src="https://mooncart.dexignzone.com/xhtml/images/shop/product/4.png" class="card-img-top" alt="..."/>
<div class="card-body text-center" >
  <h4>Featured Books</h4>
  <ul class="flex justify-center items-center gap-2">
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
													</ul>
                                              <div>
                                              <p>$15.99 <del>$20.99</del></p>
                                              </div>

</div>

</div> 
</div>




<div className="flex justify-center items-center">
	
<div class="card   p-3 cursor-pointer h-[400px] " >
<div className='flex justify-between'>
<button className='bg-black text-white px-1.5 font-semiboldc text-sm'>20%</button>
<button className='bg-green-800 text-white px-1.5  text-sm'>FEATURED</button>

</div>
<img className='w-52 h-56 my-5' src="https://mooncart.dexignzone.com/xhtml/images/shop/product/5.png" class="card-img-top" alt="..."/>

<div class="card-body text-center" >

  <h4>Featured Books</h4>
  <ul class="flex justify-center items-center gap-2">
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
													</ul>
                                              <div>
                                              <p>$15.99 <del>$20.99</del></p>
                                              </div>

</div>

</div>
	</div> 


    <div className='flex justify-center items-center'>
	<div class="card   p-3 cursor-pointer h-[400px] " >
<div className='flex justify-between'>
<button className='bg-black text-white px-1.5 font-semiboldc text-sm'>20%</button>
<button className='bg-green-800 text-white px-1.5  text-sm'>FEATURED</button>

</div>
<img className='w-52 h-56 my-5' src="https://mooncart.dexignzone.com/xhtml/images/shop/product/6.png" class="card-img-top" alt="..."/>

<div class="card-body text-center" >

  <h4>Featured Books</h4>
  <ul class="flex justify-center items-center gap-2">
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
													</ul>
                                              <div>
                                              <p>$15.99 <del>$20.99</del></p>
                                              </div>

</div>

</div> 
		</div> 
 
    

<div className="flex justify-center items-center">
<div class="card   p-3 cursor-pointer h-[400px] " >
<div className='flex justify-between'>
<button className='bg-black text-white px-1.5 font-semibold text-sm'>-12%</button>

</div>

<img className='w-52 h-56 my-5' src="https://mooncart.dexignzone.com/xhtml/images/shop/product/7.png" class="card-img-top" alt="..."/>
<div class="card-body text-center" >
  <h4>Featured Books</h4>
  <ul class="flex justify-center items-center gap-2">
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
													</ul>
                                              <div>
                                              <p>$15.99 <del>$20.99</del></p>
                                              </div>

</div>

</div> 
</div>



<div className="flex justify-center items-center">
<div class="card  p-3 cursor-pointer h-[400px] " >
<div className='flex justify-between'>
<button className='bg-black text-white px-1.5 font-semibold text-sm'>-12%</button>
<button className='bg-green-800 text-white px-1.5 font-semibold text-sm'>FEATURED</button>

</div>

<img className='w-52 h-56 my-5' src="https://mooncart.dexignzone.com/xhtml/images/shop/product/8.png" class="card-img-top" alt="..."/>
<div class="card-body text-center" >
  <h4>Featured Books</h4>
  <ul class="flex justify-center items-center gap-2">
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
													</ul>
                                              <div>
                                              <p>$15.99 <del>$20.99</del></p>
                                              </div>

</div>

</div> 
</div>





<div className="flex justify-center items-center">
	
<div class="card   p-3 cursor-pointer h-[400px] " >
<div className='flex justify-between'>
<button className='bg-black text-white px-1.5 font-semiboldc text-sm'>20%</button>
<button className='bg-green-800 text-white px-1.5  text-sm'>FEATURED</button>

</div>
<img className='w-52 h-56 my-5' src="https://mooncart.dexignzone.com/xhtml/images/shop/product/1.png" class="card-img-top" alt="..."/>

<div class="card-body text-center" >

  <h4>Featured Books</h4>
  <ul class="flex justify-center items-center gap-2">
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
													</ul>
                                              <div>
                                              <p>$15.99 <del>$20.99</del></p>
                                              </div>

</div>

</div> 
</div>


     
<div className="flex  justify-center items-center">
<div class="card   p-3 cursor-pointer h-[400px] " >
<div className='flex justify-between'>
<button className='bg-black text-white px-1.5 font-semiboldc text-sm'>20%</button>
<button className='bg-green-800 text-white px-1.5  text-sm'>FEATURED</button>

</div>
<img className='w-52 h-56 my-5' src="https://mooncart.dexignzone.com/xhtml/images/shop/product/2.png" class="card-img-top" alt="..."/>

<div class="card-body text-center" >

  <h4>Featured Books</h4>
  <ul class="flex justify-center items-center gap-2">
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
													</ul>
                                              <div>
                                              <p>$15.99 <del>$20.99</del></p>
                                              </div>

</div>

</div> 
</div>
    

<div className="flex  justify-center items-center">
<div class="card   p-3 cursor-pointer h-[400px] " >
<div className='flex justify-between'>
<button className='bg-black text-white px-1.5 font-semibold text-sm'>-12%</button>

</div>

<img className='w-52 h-56 my-5' src="https://mooncart.dexignzone.com/xhtml/images/shop/product/3.png" class="card-img-top" alt="..."/>
<div class="card-body text-center" >
  <h4>Featured Books</h4>
  <ul class="flex justify-center items-center gap-2">
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
													</ul>
                                              <div>
                                              <p>$15.99 <del>$20.99</del></p>
                                              </div>

</div>

</div> 
</div>



<div className="flex  justify-center items-center">
<div class="card   p-3 cursor-pointer h-[400px] " >
<div className='flex justify-between'>
<button className='bg-black text-white px-1.5 font-semibold text-sm'>-12%</button>
<button className='bg-green-800 text-white px-1.5 font-semibold text-sm'>FEATURED</button>

</div>

<img className='w-52 h-56 my-5' src="https://mooncart.dexignzone.com/xhtml/images/shop/product/4.png" class="card-img-top" alt="..."/>
<div class="card-body text-center" >
  <h4>Featured Books</h4>
  <ul class="flex justify-center items-center gap-2">
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
														<li>
															<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#E4E5E8"></path>
															</svg>
														</li>
													</ul>
                                              <div>
                                              <p>$15.99 <del>$20.99</del></p>
                                              </div>

</div>

</div> 
</div>







</div>



</div>


<div className='flex sm:flex-row flex-col w-full sm:justify-normal justify-center items-center p-5'>

<div className=' w-full flex sm:text-start text-center '>



<div className='w-full border-r-2 flex sm:justify-start justify-center items-center'><h1>Showing 1–5 Of 50 Results</h1></div>


        </div>


<div className='w-full flex  items-center sm:justify-end justify-center  md:p-0 p-5 gap-3'>

  

<button className=' p-3  focus:border-2 focus:border-green-200  hover:bg-gray-200'>PREV</button>
<button className=' w-8 h-8 focus:border-2 focus:border-green-200  hover:bg-gray-200'>1</button>
   <button className='  w-8 h-8 hover:bg-gray-200 focus:bg-black focus:text-white'>2</button>
   <button className='  w-8 h-8 hover:bg-gray-200 focus:bg-black focus:text-white'>3</button>
   <button className=' p-3  focus:border-2 focus:border-green-200  hover:bg-gray-200'>NEXT</button>
 




    

</div>

</div>






</div>







</div>







<div className='flex w-full'>


<section class="text-gray-600 body-font w-full">



  <div class=" px-5 py-24 mx-auto w-full">
   




    <div class="flex md:flex-row flex-col justify-center   -m-4">
     
     


<div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full'>

<div class="border overflow-hidden relative border-gray-200 lg:h-36 rounded-lg flex gap-5 items-center justify-evenly  bg-gray-100">
         
         <div>
         <img className='w-28 h-28'  src="https://mooncart.dexignzone.com/xhtml/images/svg/icon-bx/box-tick.svg" alt="" />
         
           </div>       
           


           <div className=' absolute right-0  text-gray-300'><h1 className='cursor-pointer hover:text-9xl text-8xl font-semibold hover:-rotate-12 opacity-40 duration-300 hover:scale-125'>01</h1></div>


          <div className=''>
          <h1 className='text-xl font-bold text-black'>Filter & Discover</h1>
         
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting
         
         </p>
          </div>

            </div>
     



  
            <div class="border overflow-hidden relative border-gray-200 lg:h-36 rounded-lg flex gap-5 items-center justify-evenly  bg-gray-100">
         
         <div>
         <img className='w-28 h-28'  src="https://mooncart.dexignzone.com/xhtml/images/svg/icon-bx/box-tick.svg" alt="" />
         
           </div>       
           


           <div className=' absolute right-0  text-gray-300'><h1 className='cursor-pointer hover:text-9xl text-8xl font-semibold hover:-rotate-12 opacity-40 duration-300 hover:scale-125'>02</h1></div>


          <div className=''>
          <h1 className='text-xl font-bold text-black'>Add to cart</h1>
         
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting
         
         </p>
          </div>

            </div>
     



      
          
            <div class="border overflow-hidden relative border-gray-200 lg:h-36 rounded-lg flex gap-5 items-center justify-evenly  bg-gray-100">
         
         <div>
         <img className='w-28 h-28'  src="https://mooncart.dexignzone.com/xhtml/images/svg/icon-bx/box-tick.svg" alt="" />
         
           </div>       
           


           <div className=' absolute right-0  text-gray-300'><h1 className='cursor-pointer hover:text-9xl text-8xl font-semibold hover:-rotate-12 opacity-40 duration-300 hover:scale-125'>03</h1></div>


          <div className=''>
          <h1 className='text-xl font-bold text-black'>Fast Shoping</h1>
         
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting
         
         </p>
          </div>

            </div>
     




  
            <div class="border overflow-hidden relative border-gray-200 lg:h-36 rounded-lg flex gap-5 items-center justify-evenly  bg-gray-100">
         
         <div>
         <img className='w-28 h-28'  src="https://mooncart.dexignzone.com/xhtml/images/svg/icon-bx/box-tick.svg" alt="" />
         
           </div>       
           


           <div className=' absolute right-0  text-gray-300'><h1 className='cursor-pointer hover:text-9xl text-8xl font-semibold hover:-rotate-12 opacity-40 duration-300 hover:scale-125'>04</h1></div>


          <div className=''>
          <h1 className='text-xl font-bold text-black'>Enjoy The Product</h1>
         
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting
         
         </p>
          </div>

            </div>
</div>
     
     




     


    </div>

  </div>


</section>



</div>





<div className='flex w-full   md:p-10 p-5 gap-5'>

<div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 w-full'>

<div className='flex flex-col w-full gap-3'>

<div className='flex w-full'>
<img className='w-32' src="https://mooncart.dexignzone.com/xhtml/images/logo.svg" alt="" />
</div>

<div className='flex flex-col'>
<ul>
	<li>Address : 451 Wall Street, UK, London</li>
	<li>E-mail : example@info.com</li>
	<li>Phone : (064) 332-1233</li>
</ul>
</div>

<div className='flex flex-col py-5 gap-3'>

<h1>Subscribe To Our Newsletter</h1>

   <div className="bg-gray-200 flex items-center justify-around sm:w-full w-60"> 

  
        <input
          type="text"
          placeholder="Search Product"
          className="outline-none bg-transparent p-3 placeholder:text-gray-400 "
        />

        <svg
          height="25"
          viewBox="0 0 20 20"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m8.5 3c3.0375661 0 5.5 2.46243388 5.5 5.5 0 1.3387897-.4783412 2.5658568-1.2734386 3.5196163l4.126992 4.1268303c.1952621.1952622.1952621.5118446 0 .7071068-.1735664.1735663-.4429908.1928515-.6378589.0578554l-.0692479-.0578554-4.1268303-4.126992c-.9537595.7950974-2.1808266 1.2734386-3.5196163 1.2734386-3.03756612 0-5.5-2.4624339-5.5-5.5 0-3.03756612 2.46243388-5.5 5.5-5.5zm0 1c-2.48528137 0-4.5 2.01471863-4.5 4.5 0 2.4852814 2.01471863 4.5 4.5 4.5 2.4852814 0 4.5-2.0147186 4.5-4.5 0-2.48528137-2.0147186-4.5-4.5-4.5z"
            fill="#212121"
          />
        </svg>
      </div> 

</div>

</div>




<div className='flex flex-col w-full gap-3'>
<h1 className='text-xl font-bold'>Recent Posts</h1>

<div className='flex flex-col w-full'>

<ul className='w-full'>
	<li className='flex gap-2'>
		<div className='flex'>
<img src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/1.png" alt="" />
		</div>
		<div className='w-full'>
										<h6 class="name"><a href="javascript:void(0);">Wooden Water Bottles</a></h6>
										<span class="time">July 23, 2023</span>
									</div>
	</li>
	<li></li>
	<li></li>
</ul>

</div>

<div className='flex flex-col w-full'>

<ul>
	<li className='flex gap-2'>
		<div className='flex'>
<img src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/1.png" alt="" />
		</div>
		<div className='w-full'>
										<h6 class="name"><a href="javascript:void(0);">Wooden Water Bottles</a></h6>
										<span class="time">July 23, 2023</span>
									</div>
	</li>
	<li></li>
	<li></li>
</ul>

</div>

<div className='flex flex-col w-full'>

<ul>
	<li className='flex gap-2'>
		<div className='flex'>
<img src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/1.png" alt="" />
		</div>
		<div className='w-full'>
										<h6 class="name"><a href="javascript:void(0);">Wooden Water Bottles</a></h6>
										<span class="time">July 23, 2023</span>
									</div>
	</li>
	<li></li>
	<li></li>
</ul>

</div>



</div>






<div className='flex flex-col w-full md:items-center items-start gap-3'>

<h1 className='text-xl font-bold'>Our Stores </h1>
<ul>
	<li>
	New York
	</li>
	<li>London SF</li>
	<li>Edinburgh</li>
	<li>Los Angeles</li>
	<li>Chicago</li>
	<li>Las Vegas</li>
</ul>

</div>




<div className='flex flex-col w-full md:items-center items-start gap-3'>
<h1 className='text-xl font-bold'>Our Stores </h1>
<ul>
	<li>
	New York
	</li>
	<li>London SF</li>
	<li>Edinburgh</li>
	<li>Los Angeles</li>
	<li>Chicago</li>
	<li>Las Vegas</li>
</ul>

</div>




<div className='flex flex-col w-full md:items-center items-start gap-3'>
<h1 className='text-xl font-bold'>Our Stores </h1>
<ul>
	<li>
	New York
	</li>
	<li>London SF</li>
	<li>Edinburgh</li>
	<li>Los Angeles</li>
	<li>Chicago</li>
	<li>Las Vegas</li>
</ul>

</div>

</div>


</div>








    </>
  )
}

export default Shop
