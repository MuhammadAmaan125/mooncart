import React from 'react'
import { FaBaby ,FaWeight} from 'react-icons/fa';
import chair from "../assets/product4-video-removebg-preview.png"
import Allcom from './Allcom';
function Hero() {
  return (
    <>
      <div className='flex lg:flex-row flex-col  p-10'>

<div className='flex md:flex-row flex-col-reverse lg:w-[75%] w-full'>

<div className='flex  lg:w-[30%] md:[50%] w-full'>
<div className='flex-col flex  mt-20' >
<div className='my-5'>
<h1 className='text-gray-400'>CONVERTIBLE CAR SEATS</h1> 

</div>

<div className='flex flex-wrap'>
<h1 className='text-4xl font-semibold tracking-wide flex flex-wrap'>Better Stability
and  <span className='text-green-700 font-semibold'>Strength</span>
to Absorb
the shock</h1> 
</div>

<div className='flex text-gray-400 flex-wrap my-5'>
    <span>Sell globally in minutes with localized currencies, languages, and experiences in every market.</span>
</div> 



<div className=' flex gap-10'>

    <div>
    <h1 className='text-sm'>
        price
    </h1>
    <h1 className='text-black text-xl font-semibold'>$125.75</h1>
    </div>


   <div>
   <h1 className='text-sm'>
       color
    </h1>
    
    <div className='flex gap-2 my-2'>
    <input type="radio" class=" text-green-500" name='color' />
    <input type="radio" class=" " name='color' />
    <input type="radio" class=" "  name='color'/>
    </div>

   </div>
</div> 


<div className='flex my-5 gap-3'>
    <div className='bg-black px-5 justify-center flex cursor-pointer h-10'>
    <button class=" btn-secondary me-xl-3 text-white text-sm" >ADD TO CART</button>
    </div>

    <div className='border border-black hover:bg-black px-5 justify-center flex cursor-pointer h-10'>
    <button class=" btn-secondary me-xl-3 hover:text-white text-sm" >View Details</button>
    </div>

</div>

</div>
</div>

<div className='lg:w-[70%] md:[50%] w-full'>
<div className='flex justify-center items-center mt-5'>
    <img src="https://mooncart.dexignzone.com/xhtml/images/shop/product4.png" alt="" />
</div>
</div>

</div>

<div className='lg:w-[25%] w-full'>
<div className='flex flex-col px-3 '>
<div className='flex text-4xl font-semibold '>
    <h1>Safety Certified</h1>
</div>
<div className='flex lg:flex-col md:flex-row flex-col'>

<div className='w-full'>
    
<div className='flex w-full gap-4 my-5'>
    <div className='flex justify-center items-center'>
    <FaBaby className='text-5xl text-gray-400' />
    </div>  
<div className='flex flex-col flex-wrap justify-center items-center'>
<h1 className='text-lg text-green-700 font-semibold'>Age Group</h1>
<h1 className='text-2xl font-semibold'>0-7 Yrs</h1>
</div>

</div>  


<div className='w-full flex gap-4 my-5'>
    <div className='flex justify-center items-center'>
    <FaWeight className='text-5xl text-gray-400' />
    </div>  
<div className='flex flex-col flex-wrap justify-center items-center'>
<h1 className='text-lg text-green-700 font-semibold'>Weight Capacity</h1>
<h1 className='text-2xl font-semibold'>0-25 Kgs</h1>
</div>

</div> 
</div>

<div className='my-5 w-full'>
    
<ul >
    <li className='flex flex-nowrap gap-3 my-3'> <img src="https://mooncart.dexignzone.com/xhtml/images/svg/check.svg" alt="" /> <h1 class="font-semibold flex flex-wrap">Comfy Headrest</h1> </li>
    <li className='flex flex-nowrap gap-3 my-3'> <img src="https://mooncart.dexignzone.com/xhtml/images/svg/check.svg" alt="" /> <h1 class="font-semibold flex flex-wrap">Removable and
Washable Cover</h1> </li>
    <li className='flex flex-nowrap gap-3 my-3'> <img src="https://mooncart.dexignzone.com/xhtml/images/svg/check.svg" alt="" /> <h1 class="font-semibold flex flex-wrap">5 Point Safety
Harness</h1> </li>
</ul>

</div>


<div className='my-5 w-full'>
<div className='flex sm:flex-row flex-col '>
<div class="bg-gray-400 flex justify-center items-center p-5">
									<img className='w-48' src={chair} alt="/"/>
									<a href="https://www.youtube.com/watch?v=hCWIMxAzlrM" class="popup-youtube"><i class="fas fa-play"></i></a>
								</div>

                                <div class="bg-black p-5 flex justify-center items-center">
									<h4 class="text-white">Enjoy the best quality and features made by MoonCart.</h4>
								</div>
</div>

</div>




</div>


</div>
</div>

      </div>

      <Allcom/>
    </>
  )
}

export default Hero
