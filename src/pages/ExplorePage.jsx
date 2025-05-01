import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

const ExplorePage = () => {
  const params = useParams()
  const [pageNo , setPageNo] = useState(1)
  const [data , setData] = useState([]);
  const [totalPageNo , setTotalPageNo] = useState(0)

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}?api_key=3c47e5606bbef14a1eb27d79da00758e`, {
        params : {
          page : pageNo
        }
      })
      setData((prev)=>{
        return [
          ...prev,
          ...response.data.results
        ]
      })
      setTotalPageNo(response.data.total_pages)
    } catch (error) {
      console.log('error',error)
    }
  }

  const handleScroll = () => {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
      setPageNo(prev => prev + 1)
    }
  }

  useEffect(()=>{
    fetchData()
  }, [pageNo])

  useEffect(()=>{
    setPageNo(1)
    setData([])
    fetchData()
  }, [params.explore])

  useEffect(() => {
   window.addEventListener('scroll',handleScroll)
  }, [])

   useEffect(() => {
        window.scrollTo(0, 0);
    })
  

  return (
    <div className='py-16'>
        <div className='container mx-auto'>
            <h3 className='capitalize text-xl lg:text-2xl font-semibold my-3 ms-4 text-center lg:text-start'>Popular {params.explore} Show</h3>
            <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-center'>
              {
                data.map((exploreData,index)=>{
                    return (
                      <Card data={exploreData} key={exploreData.id+'exploreSection'+index} media_type={params.explore}/>
                    )
                })
              }
            </div>
        </div>
    </div>
  )
}

export default ExplorePage