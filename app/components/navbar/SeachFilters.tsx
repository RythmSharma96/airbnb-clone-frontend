'use client';

import useSearchModal from "../hooks/useSearchModal";

const SeachFilters = () => {

const searchModal = useSearchModal();

  return (
    <div  onClick={() => searchModal.open('location')} className="h-[48px] lg:h-[64] flex flex-row items-center justify-betweeen border rounded-full">
        <div className="hidden lg:block">
            <div className="flex flex-row items-center justify-betweeen">
                <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                    <p className="text-xs font-semibold">Where</p>
                    <p className="text-sm font-semibold">Location</p>
                </div>

                <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                    <p className="text-xs font-semibold">Check In</p>
                    <p className="text-sm font-semibold">Add Dates</p>
                </div>

                <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                    <p className="text-xs font-semibold">Check Out</p>
                    <p className="text-sm font-semibold">Add Dates</p>
                </div>

                <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                    <p className="text-xs font-semibold">Who</p>
                    <p className="text-sm font-semibold">Add Guests</p>
                </div>
            </div>
        </div>    


            <div className="p-2">
                <div className="p-2 lg:p-4 bg-airbnb hover:bg-airbnb-dark transition rounded-full text-white cursor-pointer">
                <svg viewBox="0 0 32 32"
                style={{display:'block', fill:'none', height:'16px', width:'16px', stroke:'currentColor', strokeWidth:4, overflow:'visible'}} 
                aria-hidden="true" role="presentation" focusable="false"><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>
                </div>
            </div>
        </div>
  )
}

export default SeachFilters;
