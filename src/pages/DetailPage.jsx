import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchDetail from '../hooks/useFetchDetail';
import useFetch from '../hooks/useFetch';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Divider from '../components/Divider';
import HorizontalScrollCard from '../components/HorizontalScrollCard';
import VideoPlay from '../components/VideoPlay';

const DetailPage = () => {
  const params = useParams();
  const { data } = useFetchDetail(`/${params?.explore}/${params?.id}?api_key=3c47e5606bbef14a1eb27d79da00758e`);
  const { data: castData } = useFetchDetail(`/${params?.explore}/${params?.id}/credits?api_key=3c47e5606bbef14a1eb27d79da00758e`);
  const { data: similarData } = useFetch(`/${params?.explore}/${params?.id}/similar?api_key=3c47e5606bbef14a1eb27d79da00758e`);
  const { data: recommendedData } = useFetch(`/${params?.explore}/${params?.id}/recommendations?api_key=3c47e5606bbef14a1eb27d79da00758e`);
  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState('');
  const [showAllCast, setShowAllCast] = useState(false);
  const imageURL = useSelector((state) => state.movieoData.imageURL);

  const duration = Number(data?.runtime / 60).toFixed(1).split('.');

  const writer = castData?.crew?.filter((el) => el?.job === 'Writer')?.map((el) => el?.name)?.join(', ');

  const visibleCast = showAllCast ? castData?.cast?.filter((el) => el?.profile_path) : castData?.cast?.filter((el) => el?.profile_path)?.slice(0, 5)

  const handlePlayVideo = (data) => {
    setPlayVideoId(data);
    setPlayVideo(true);
  };

  const handleShowMoreCast = () => {
    setShowAllCast(true);
  };

  const handleShowLessCast = () => {
    setShowAllCast(false);
  };

  return (
    <div className="px-3 pt-5">
      <div className="w-full h-[400px] relative hidden lg:block">
        <div className="w-full h-full">
          <img src={imageURL + data?.backdrop_path} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute w-full h-full top-0 bg-linear-to-t from-neutral-900 to-transparent"></div>
      </div>

      <div className="container mx-auto py-16 lg:py-0 flex gap-5 lg:gap-10 flex-col lg:flex-row">
        <div className="lg:-mt-28 relative mx-auto lg:mx-0 w-fit min-w-60">
          <img src={imageURL + data?.poster_path} alt="" className="h-80 w-60 object-cover rounded-sm" />
          <button
            onClick={() => handlePlayVideo(data)}
            className="mt-3 w-full py-2 px-4 text-center text-black bg-white rounded-sm font-bold text-lg hover:bg-linear-to-l from-red-500 to-orange-500 hover:scale-105 transition-all"
          >
            Play Now
          </button>
        </div>

        <div>
          <h2 className="text-2xl lg:text-5xl font-bold text-white">{data?.title || data?.name}</h2>
          <p className="text-neutral-400 mt-1">{data?.tagline}</p>

          <Divider />

          <div className="flex items-center my-3 gap-3">
            <p>Rating : {Number(data?.vote_average).toFixed(1)}+</p>
            <span>|</span>
            <p>View : {Number(data?.vote_count)}</p>
            <span>|</span>
            <p>
              Duration : {duration[0]}h {duration[1]}m
            </p>
          </div>

          <Divider />

          <div>
            <h3 className="text-xl font-bold text-white">Overview</h3>
            <p>{data?.overview}</p>

            <Divider />

            <div className="flex items-center gap-3 text-center">
              <p>Status : {data?.status}</p>
              <span>|</span>
              <p>Release Date : {moment(data?.release_date).format('MMMM Do YYYY')}</p>
              <span>|</span>
              <p>Revenue : {Number(data?.revenue)}</p>
            </div>

            <Divider />
          </div>

          <div>
            <p>
              <span className="text-white font-semibold">Director</span> : {castData?.crew?.find((el) => el?.job === 'Director')?.name}
            </p>
            <Divider />
            <p>
              <span className="text-white font-semibold">Writer</span> : {writer}
            </p>
          </div>

          <Divider />
          <h2 className="font-semibold text-white text-lg">Cast : </h2>
          <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5 mt-4 justify-center sm:justify-normal">
            {visibleCast?.map((cast, index) => (
              <div key={index} className="text-center">
                <div>
                  <img
                    src={imageURL + cast?.profile_path}
                    alt={cast?.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <p className="font-semibold text-sm text-neutral-300">{cast?.name}</p>
              </div>
            ))}
          </div>
         <div className='w-full flex items-center justify-center sm:justify-normal'>
         {castData?.cast?.filter((el) => el?.profile_path)?.length > 5 && !showAllCast && (
            <button onClick={handleShowMoreCast} className="mt-6 text-xl text-neutral-400 hover:text-neutral-200 cursor-pointer justify-center">
              Show More
            </button>
          )}
          {showAllCast && castData?.cast?.filter((el) => el?.profile_path)?.length > 5 && (
            <button onClick={handleShowLessCast} className="mt-6 text-xl text-neutral-400 hover:text-neutral-200 cursor-pointer justify-center">
              Show Less
            </button>
          )}
         </div>
        </div>
      </div>
      <div>
        <HorizontalScrollCard data={similarData} heading={'Similar ' + params?.explore} media_type={params?.explore} />
      </div>
      <div>
        <HorizontalScrollCard
          data={recommendedData}
          heading={'Recommended ' + params?.explore}
          media_type={params?.explore}
        />
      </div>

      {playVideo && (
        <VideoPlay data={playVideoId} close={() => setPlayVideo(false)} media_type={params?.explore} />
      )}
    </div>
  );
};

export default DetailPage;