import React from "react";

function HeroSection2() {
  return (
    <>
 
{/*  REWARDS Sections start */}
      <div className="flex lg:flex-row md:flex-col flex-col ">
        <div className="flex md:flex-row flex-col   md:border-r-2 md:border-b-0 border-b-2   py-3 text-center items-center">
          <div className="md:w-1/4  text-center">
            <h1 className="font-bold md:text-2xl">Hi There!</h1>
            <h1 className="text-gray-700 flex md:mx-5 md:text-left leading-tight font-semibold gap-2 justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m62 25.2h-22.9l-7.1-22.2-7.1 22.2h-22.9l18.5 13.7-7 22.1 18.5-13.7 18.5 13.7-7.1-22.2z"
                  fill="#228B22"
                />
              </svg>
              STAR REWARD
            </h1>
          </div>

          <div className="md:w-3/4  md:text-start">
            <h1 className="text-gray-500">
              Start earning points on purchases, get free shipping at $25+ and
              more.
            </h1>
            <h1 className="border-b-2 border-green-700 w-32 text-center lg:mx-0 md:mx-0 mx-auto ">
              Join Star Rewards
            </h1>
          </div>
        </div>

        <div className=" lg:my-0 md:my-8 md:text-start flex md:flex-row flex-col mx-auto ">
          <div className="md:w-[30%] text-center ">
            <h1>Deals on our radar</h1>
            <h1 className="border-b-2 border-green-700 w-16 mx-auto">
              Shop all
            </h1>
          </div>

          <div className="md:w-[40%] flex my-5 md:my-0 ">
            <img
              className="md:h-20 md:w-20   h-12 w-12 "
              src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/1.png"
              alt=""
            />

            <div className="w-full px-3">
              <h1 className="font-bold">Wooden water bottles</h1>
              <h1>July 23, 2023</h1>
            </div>
          </div>

          <div className="md:w-[40%] flex my-5 md:my-0">
            <img
              className="md:h-20 md:w-20  h-12 w-12"
              src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/2.png"
              alt=""
            />

            <div className="w-full px-3">
              <h1 className="font-bold">Eco friendly bags</h1>
              <h1>July 23, 2023</h1>
            </div>
          </div>
        </div>
      </div>

{/*  REWARDS Sections End */}

      {/*  About Car Seat Sections Start */}




      <div className="flex md:flex-row  flex-col">
        <div className="md:w-[50%] ">
          <h1 className="font-bold p-16 text-2xl">
            Enjoy contemporary class with the Slate fashion. A smoky grey
            mélange knit and tone-on-tone charcoal grey pair for effortless
            coordination.
          </h1>

          <div className="flex ">
            <div className="w-1/2 ">
              <h1 className="font-bold px-16">Fabric Content</h1>

              <h1 className="px-16">
                <span className="font-bold">Seatpad:</span> 100% Polyester
              </h1>
            </div>

            <div className="w-1/2 ">
              <br />
              <h1>Insert: 100% Polyester</h1>
            </div>
          </div>

          <div>
            <h1 className="font-bold px-16 py-3 text-xl">Chemical Statement</h1>

            <h1 className="px-16 ">
              The OneFit ClearTex All-In-One Car Seat is produced without the
              use of intentionally added fire retardant chemical treatments,
              PFAS, BPA and phthalates.
            </h1>
          </div>

          <div className="flex  gap-3 py-5 px-10">
            <div>
              <img
                src="https://mooncart.dexignzone.com/xhtml/images/products/seat1.png"
                alt=""
              />{" "}
            </div>
            <div>
              <img
                src="https://mooncart.dexignzone.com/xhtml/images/products/seat2.png"
                alt=""
              />{" "}
            </div>
            <div>
              <img
                src="https://mooncart.dexignzone.com/xhtml/images/products/seat3.png"
                alt=""
              />{" "}
            </div>
            <div>
              <img
                src="https://mooncart.dexignzone.com/xhtml/images/products/seat4.png"
                alt=""
              />{" "}
            </div>
          </div>
        </div>

        <div className="flex md:w-[50%] items-center justify-center">
          <img
            className=" py-10"
            src="https://mooncart.dexignzone.com/xhtml/images/products/car-seat.png"
            alt=""
          />
        </div>
      </div>



      {/*  About Car Seat Sections End */}






    </>
  );
}

export default HeroSection2;
