import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/Card'

const SearchPage = () => {

    const location = useLocation()
    const [data,setData] = useState([])
    const [page,setPage] = useState(1)
    const navigate = useNavigate()

    const query = location?.search?.slice(3)

    const fetchData = async () => {
      try {
        const response = await axios.get(`/search/multi?api_key=3c47e5606bbef14a1eb27d79da00758e`, {
          params : {
            query : location?.search?.slice(3),
            page : page
          }
        })
        setData((prev)=>{
          return [
            ...prev,
            ...response.data.results
          ]
        })
      } catch (error) {
        console.log('error',error)
      }
    }

    useEffect(()=>{
      if(query){
        setPage(1)
        setData([])
        fetchData()
      }
    },[location?.search])

    const handleScroll = () => {
      if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        setPage(prev => prev + 1)
      }
    }
  
    useEffect(()=>{
      if(query){
        fetchData()
      }
    }, [page])

    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
     }, [])

    useEffect(() => {
      window.scrollTo(0, 0);
    })
     

  return (
    <div className='py-16'>

      <div className='lg:hidden px-3 sticky top-[70px] z-10'>
        <input 
          type="text"
          placeholder='Search here...'
          onChange={(e)=> navigate(`/search?q=${e.target.value}`)} 
          value={query?.split('%20')?.join(' ')}
          className='px-4 py-3 my-2 text-lg w-full text-white bg-neutral-700 rounded-full outline-neutral-600'
        />
      </div>
      <div className='container mx-auto px-4'>
        <h3 className='capitalize text-xl lg:text-2xl text-center lg:text-start font-semibold my-5'>Search Results</h3>

        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
          {
            data.map((searchData, index) => {
              return (
                <Card data={searchData} key={searchData.id + 'searchData'+index} media_type={searchData.media_type} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SearchPage