import React from 'react'
import { useState,useEffect } from 'react';
import product1 from "../assets/product1.png"
function Deal() {



  const getTimeRemaining = (endTime) => {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  };
  
  
  const offerEndTime = new Date('2023-12-31T23:59:59'); // Replace with your offer end time
  
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining(offerEndTime));
  
    useEffect(() => {
      const timer = setInterval(() => {
        const remainingTime = getTimeRemaining(offerEndTime);
        setTimeLeft(remainingTime);
  
        if (remainingTime.total <= 0) {
          clearInterval(timer);
        }
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, [offerEndTime]);
  
    


  return (
    <>
    
<section className='lg:relative flex flex-col lg:h-[1700px] h-auto'>

            {/*  Car Seat Deal Start */}

<div className=' md:flex md:flex-row flex-col bg-[#24262b] p-11 lg:pb-60  '>
<div className='flex flex-col flex-wrap lg:px-10 md:px-5 '>
<div className='flex flex-col flex-wrap lg:w-[70%] md:justify-start  justify-center md:items-start items-center mt-5'>
<h1 className='text-white  sm:text-sm text-[12px] my-2'>MOONCART BABY CARES PRODUCTS</h1>
<h1 className='md:text-4xl text-2xl   my-2 text-white font-semibold'>Deal of the month</h1>
<p className='text-white my-2 sm:text-sm text-[12px] md:text-start text-center'>Yes! Send me exclusive offers, personalised, and unique gift ideas, tips for shopping on MoonCart</p>
</div>

<div className='flex flex-col flex-wrap md:justify-start md:items-start justify-center items-center'>
<p id="demo" className='fs-1 text-success fw-bold'>
        
        {timeLeft.total <= 0 ? 
         <p>Offer has ended.</p>
        : 
     <div className='flex flex-wrap  lg:gap-10 md:gap-5 gap-3'>

<div className='flex flex-col flex-wrap py-5 text-center '>
<h1 className='text-white lg:text-5xl md:text-3xl text-2xl my-2'>{timeLeft.days}</h1>
<h1 className='text-white md:text-lg text-xs my-2'>DAYS</h1>
</div>


<div className='flex flex-col flex-wrap py-5 text-center '>
<h1 className='text-white lg:text-5xl md:text-3xl text-2xl my-2'>{timeLeft.hours}</h1>
<h1 className='text-white md:text-lg text-xs my-2'>HOURS</h1>
</div>


<div className='flex flex-col flex-wrap py-5 text-center  '>
<h1 className='text-white lg:text-5xl md:text-3xl text-2xl my-2'>{timeLeft.minutes}</h1>
<h1 className='text-white md:text-lg text-xs my-2'>MINUTES</h1>
</div>


<div className='flex flex-col flex-wrap py-5 text-center '>
<h1 className='text-white lg:text-5xl md:text-3xl text-2xl my-2'>{timeLeft.seconds}</h1>
<h1 className='text-white md:text-lg text-xs my-2'>SECONDS</h1>
</div>


     </div>
       }
       
     
     </p>
</div>

<div className='flex md:w-[60%] w-full  md:justify-start md:items-start justify-center items-center  md:my-0 my-5'>
<div className='bg-[#f3f3f3]  cursor-pointer px-3 py-2 text-center'>
  <span className='text-black text-sm'>VIEW ALL PRODUCTS</span>
</div>
</div>



</div> 

<div className='flex justify-center items-center '>
<div className='flex justify-center items-center'>
<img src={product1} alt="" />
</div>
</div>


      </div> 
            {/*  Car Seat Deal End */}


            {/*  Car Seat Deal Cards Start */}


      <div className='md:mt-5 w-full lg:absolute flex lg:top-[600px] bg-transparent md:px-10 sm:px-5 px-3'>
<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 md:gap-10 sm:gap-5 gap-3'>

<div className=' '>


<div className='flex  flex-col'>
<img className='object-cover lg:h-auto sm:h-[410px] h-[300px] w-full' src="https://mooncart.dexignzone.com/xhtml/images/products/product2.png" alt="" />

<div className='flex justify-between items-center my-3 '>
<h1>Baby Shoes</h1>

<h1>Shop Now</h1>
</div>
</div>



</div>  


<div className=' lg:relative lg:bottom-20 flex'>


<div className='flex flex-col'>
<img className='object-cover lg:h-auto sm:h-[410px] h-[300px] w-full' src="https://mooncart.dexignzone.com/xhtml/images/products/product3.png" alt="" />

<div className='flex justify-between items-center my-3'>
<h1>Baby Shoes</h1>

<h1>Shop Now</h1>
</div>
</div>



</div>



<div className=''>


<div className='flex flex-col'>
<img className='object-cover lg:h-auto sm:h-[410px] h-[300px] w-full' src="https://mooncart.dexignzone.com/xhtml/images/products/product4.png" alt="" />

<div className='flex justify-between items-center my-3'>
<h1>Baby Shoes</h1>

<h1>Shop Now</h1>
</div>
</div>



</div>


<div className='sm:block hidden'>


 <div className=' border-2 p-10 lg:h-auto sm:h-[410px] h-[300px] w-full '>
 

<h1 className='text-xl font-bold'>Join our list</h1>

<p>Signup to be the first to hear about exclusive deals,special offers and upcoming collections</p>


 <input className='bg-gray-200 my-5 p-3  outline-none border w-full' placeholder='Your Email Address' />
 <br />


 <button className='bg-black my-5 p-3 text-white'>Subscribe</button>


</div>



</div>

<div className='lg:relative lg:bottom-20 flex'>


<div className='flex flex-col'>
<img className='object-cover lg:h-auto sm:h-[410px] h-[300px] w-full' src="https://mooncart.dexignzone.com/xhtml/images/products/product5.png" alt="" />

<div className='flex justify-between items-center my-3'>
<h1>Baby Shoes</h1>

<h1>Shop Now</h1>
</div>
</div>



</div>

<div className=''>


<div className='flex flex-col'>
<img className='object-cover lg:h-auto sm:h-[410px] h-[300px] w-full' src="https://mooncart.dexignzone.com/xhtml/images/products/product6.png" alt="" />


<div className='flex justify-between items-center my-3'>
<h1>Baby Shoes</h1>

<h1>Shop Now</h1>
</div>
</div>



</div>


</div>
</div>

            {/*  Car Seat Deal Cards End */}

</section>







    </>
  )
}

export default Deal
