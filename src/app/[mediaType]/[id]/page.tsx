'use client'
import React from 'react';
import "./style.scss";
import useFetch from '@/hooks/useFetch';
import DetailsBanner from './detailsBanner/DetailsBanner';
import Cast from './cast/Cast';
import VideosSection from './videosSection/VideosSection';
import Similar from './carousels/Similar';
import Recommendation from './carousels/Recommendations';
import { useParams } from 'next/navigation';

const Details = () => {

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  const { data: seasons, loading: seasonsLoading } = useFetch(`/${mediaType}/${id}`);

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} seasons={seasons} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  )
}

export default Details