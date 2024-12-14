import React from 'react'
import { RiCloseLargeFill } from "react-icons/ri";
import useFetchDetail from '../hooks/useFetchDetail';

const VideoPlay = ({data , close , media_type}) => {
    const {data : videoData} = useFetchDetail(`/${media_type}/${data?.id}/videos?api_key=3c47e5606bbef14a1eb27d79da00758e`)
  return (
    <section className='fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center'>
        <div className='bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative'>

        <button onClick={close} className='absolute -top-6 -right-1 text-3xl z-50'>
            <RiCloseLargeFill />
        </button>

        <iframe
            src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
            className='w-full h-full'
        />

        </div>
    </section>
  )
}

export default VideoPlay