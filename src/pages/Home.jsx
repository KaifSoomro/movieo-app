import React, { useState , useEffect } from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import HorizontalScrollCard from '../components/HorizontalScrollCard'
import useFetch from '../hooks/useFetch'

const Home = () => {

  const trendingData = useSelector(state => state.movieoData.bannerData) 
  const { data :nowPlayingData } = useFetch('/movie/now_playing?api_key=3c47e5606bbef14a1eb27d79da00758e')
  const { data :topRatedData } = useFetch('/movie/top_rated?api_key=3c47e5606bbef14a1eb27d79da00758e')
  const { data :popularShows } = useFetch('/tv/popular?api_key=3c47e5606bbef14a1eb27d79da00758e')
  const { data :onTheAir } = useFetch('/tv/on_the_air?api_key=3c47e5606bbef14a1eb27d79da00758e')


  return (
    <div>
        <BannerHome />
        <HorizontalScrollCard data={trendingData} heading={'Trending'} trending={true}/>
        <HorizontalScrollCard data={nowPlayingData} heading={'Now Playing'} media_type={'movie'}/>
        <HorizontalScrollCard data={topRatedData} heading={'Top Rated Movies'} media_type={'movie'}/>
        <HorizontalScrollCard data={popularShows} heading={'Popular TV Shows'} media_type={'tv'}/>
        <HorizontalScrollCard data={onTheAir} heading={'On The Air'} media_type={'tv'}/>
    </div>
  )
}

export default Home