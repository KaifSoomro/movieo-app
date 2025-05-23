import React, { useRef } from 'react'
import Card from './Card'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const HorizontalScrollCard = ({data = [], heading, trending , media_type}) => {
  const containerRef = useRef();
  const handleNext = () => {
    containerRef.current.scrollLeft += 300
  }
  const handlePrev = () => {
    containerRef.current.scrollLeft -= 300
  }

  return (
    <div className='container mx-auto px-3 my-10'>
        <h2 className='text-xl font-bold lg:text-2xl mb-3 text-white capitalize'>{ heading }</h2>
        <div className='relative'>
          <div ref={containerRef} className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 grid-flow-col overflow-hidden overflow-x-scroll z-10 relative scroll-smooth transition-all scrollbar-none'>
            {
              data.map((data,index) => {
                return (
                  <Card data={data} key={data.id+'heading'+index} index={index+1} trending={trending} media_type={media_type}/>
                )
              })
            }
          </div>

          <div className='absolute top-0 lg:flex hidden justify-between w-full h-full items-center'>
              <button onClick={handlePrev} className='bg-white p-1 text-black rounded-full -ml-2 z-10'>
                  <FaAngleLeft />
              </button>

              <button onClick={handleNext} className='bg-white p-1 text-black rounded-full -mr-2 z-10'>
                  <FaAngleRight />
              </button>
          </div>
        </div>
      </div>
  )
}

export default HorizontalScrollCard