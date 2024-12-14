import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const BannerHome = () => {
    const bannerData = useSelector(state => state.movieoData.bannerData) 
    const imageURL = useSelector(state => state.movieoData.imageURL)
    const [currentImage, setCurrentImage] = useState(0)

    const handleNext = () => {
        if(currentImage < bannerData.length - 1){
            setCurrentImage(prev => prev + 1)
        }
    }

    const handlePrev = () => {
         if(currentImage > 0){
            setCurrentImage(prev => prev - 1)
        }
    }

    useEffect(() => {
        const interval = setInterval(()=>{
            if(currentImage < bannerData.length - 1){
                handleNext()
            }else {
                setCurrentImage(0)
            }
        },5000)

        return ()=>clearInterval(interval)
    },[bannerData,imageURL,currentImage])
    
  return (
    <section className='w-full h-full'>
        <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
            {
                bannerData.map((data,index)=>{
                    return (
                        <div  key={data.id+"bannerHome"+index} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all' style={{transform : `translateX(-${currentImage * 100}%)`}}>
                            <div className='w-full h-full'>
                                <img
                                    src={imageURL + data.backdrop_path}
                                    className='h-full object-cover w-full'
                                />
                            </div>

                            {/* Button next and previuos image */}
                            <div className='absolute top-0 w-full h-full hidden items-center justify-between z-10 px-8 group-hover:lg:flex'>
                                <button onClick={handlePrev} className='bg-white p-2 rounded-full text-2xl text-black'>
                                    <FaAngleLeft />
                                </button>
                                <button onClick={handleNext} className='bg-white p-2 rounded-full text-2xl text-black'>
                                    <FaAngleRight />
                                </button>
                            </div>

                            <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'></div>
                           
                            <div className='container mx-auto'>
                                <div className='w-full absolute bottom-0 max-w-md px-3'>
                                    <h2 className='font-bold text-2xl lg:text-5xl text-white drop-shadow-2xl'>{data.name || data.title}</h2>
                                    <p className='text-ellipsis line-clamp-3 my-2 lg:text-lg'>{data.overview}</p>
                                    <div className='flex items-center gap-4'>
                                        <p>Rating : {Number(data.vote_average).toFixed(1)}</p>
                                        <span>|</span>
                                        <p>View : {Number(data.popularity).toFixed(0)}</p>
                                    </div>
                                    <Link to={'/'+data.media_type+'/'+data.id} >
                                        <button className='bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-500 to-orange-500 shadow-md transition-all hover:scale-105'>
                                            Play Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                           
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default BannerHome