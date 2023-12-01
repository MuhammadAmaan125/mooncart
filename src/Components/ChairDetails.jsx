import React from 'react'
import carseat2 from "../assets/car-seat2.png"
function ChairDetails() {
  return (
    <>
  
      {/*  Car Seat Cards Sections Start */}


<div className='flex flex-row p-3 w-full'>

<div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4'>

<div className="flex flex-col flex-wrap p-8 bg-[#f3f3f3] justify-center items-center">
<div className='flex flex-col justify-center items-center'>
<h1 class="text-xl text-center font-bold">All-in-One Car Seat</h1>
<p class="product-text p-2 text-center text-sm">One car seat that fits your child, vehicle and life from birth through booster</p>
</div>

</div>
<div className="flex flex-col flex-wrap p-5 bg-[#f3f3f3] justify-center items-center">
<h1 class="text-xl font-bold text-center">Space-Saving Design</h1>
<p class="product-text p-2 text-center text-sm">Slim, space-saving design takes up less space in vehicle without compromising comfort</p>

</div>
<div className="flex flex-col flex-wrap p-5 bg-[#f3f3f3] justify-center items-center">
<h1 class="text-xl font-bold text-center">Easiest to Install Correctly</h1>
<p class="product-text p-2 text-center text-sm">Chicco patented SuperCinch force-multiplying LATCH tightener ensures a tight and secure fit every time</p>

</div>
<div className="flex flex-col flex-wrap p-5 bg-[#f3f3f3] justify-center items-center">
<h1 class="text-xl font-bold text-center">No Added Chemicals</h1>
<p class="product-text p-2 text-center text-sm">ClearTex  products meet federal flammability standards without added chemicals</p>

</div>




</div>

</div>

      {/*  Car Seat Cards Sections End */}

      {/*  Car Seat Specifications Sections Start */}


<div className='flex lg:flex-row flex-col my-10 w-full'>

      {/*  Car Seat Specifications Image Start */}

<div className='flex lg:justify-end justify-center items-center p-5 lg:w-[50%] w-full'>
<div>
    <img src={carseat2} alt="" />
</div>
</div>
      {/*  Car Seat Specifications Image End */}


            {/*  Car Seat Specifications Content Start */}


<div className='flex flex-col lg:w-[50%] w-full lg:p-0 md:pl-20 p-3'>

    <div className='flex flex-col md:w-[80%] w-full flex-wrap'>
<h1 className='text-3xl font-semibold my-3'>Fits Your Child</h1>
<p className='text-sm text-[#5E626F] font-normal text-justify'>Designed for superior child comfort, OneFit™ provides extra rear-facing legroom and multiple recline options in every mode of use. With the widest range of height adjustments, the easy-adjust headrest system adjusts with the harness to grow with your child. OneFit™ accommodates tiny passengers from the very start with a removable head and body support insert for newborns weighing 5-11 lbs.		</p>

    </div> 
<div className='flex flex-col flex-wrap'>
<h1 className='text-xl font-semibold my-3'>Specifications</h1>

<p className='my-2 text-[#5E626F] text-[14px]'>Assembled Dimensions (L x W x H): 21.5" x 19" x 27"</p>
<p className='my-2 text-[#5E626F] text-[14px]'>Assembled Product Weight: 25 lbs.</p>
</div>

<div className='flex flex-col flex-wrap md:w-[80%] w-full '>

<ul>
    <li className='flex justify-between items-center my-3 border-b-2 py-1 text-[#5E626F] text-[14px]'>Harness Mode - Rear-Facing   <span className='text-[#5E626F] text-[14px]'>5-40 lbs</span></li>
    <li className='text-[14px] flex justify-between items-center my-3 border-b-2 py-1 text-[#5E626F]'>Harness Mode - Forward-Facing  <span className='text-[#5E626F] text-[14px]'>25-65 lbs</span></li>
    <li className='flex justify-between text-[14px] items-center my-3 border-b-2 py-1 text-[#5E626F]'>Booster Mode - Harness + Booste   <span className='text-[#5E626F] text-[14px]'>40-100 lbs</span></li>
    <li className='flex text-[14px] justify-between items-center my-3 border-b-2 py-1 text-[#5E626F]'>Booster Mode - Backless   <span className='text-[#5E626F] text-[14px]'>n/a</span></li>
    <li className='flex justify-between text-[14px] items-center my-3 border-b-2 py-1 text-[#5E626F]'>Rear-Facing Child Max Height Capacity  <span className='text-[#5E626F] text-[14px]'>43 in</span></li>
    <li className='flex justify-between text-[14px] items-center my-3 border-b-2 py-1 text-[#5E626F]'>Forward-Facing Child Max Height Capacity <span className='text-[#5E626F] text-[14px]'>54 in</span></li>
    <li className='flex justify-between text-[14px] items-center my-3 border-b-2 py-1 text-[#5E626F]'>Booster Child Height Capacity  <span className='text-[#5E626F] text-[14px]'>38-57 in</span></li>




</ul>

</div>


</div>

            {/*  Car Seat Specifications Content End */}


</div>

      {/*  Car Seat Specifications Sections End */}


    </>
  )
}

export default ChairDetails
