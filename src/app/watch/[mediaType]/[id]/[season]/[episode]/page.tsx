import React from 'react';
import WatchPage from '../../../../components/watchPage';
import Sidebar from '../../../../components/sidebar';
import '../../../../watch.scss';
import useFetch from '@/hooks/useFetch';
import { fetchMediaDetails } from '../../../useFetch.client';

const Watch = async ({ params }: { params: any }) => {
  // Await params before accessing them
  const { mediaType, id, season, episode } = await params;

  return (
    <div className='main overflow-x-hidden'>
      <div className='watchPage'>
        <WatchPage
          mediaType={mediaType}
          id={id}
          season={season ? parseInt(season) : undefined}
          episode={episode ? parseInt(episode) : undefined}
        />
      </div>
      <div className='sidebar'>
        <Sidebar mediaType={mediaType} id={id} />
      </div>
    </div>

  );
};

export default Watch;


export async function generateMetadata({ params }: { params: any }) {
  const { mediaType, id, season, episode } = params;

  // Fetch media details for dynamic metadata
  const data = await fetchMediaDetails(mediaType, id);

  const title = mediaType === "tv"
    ? `${data?.name || "TV Show"} - Season ${season} Episode ${episode}`
    : data?.title || data?.name;

  const description = data?.overview || `Stream ${mediaType} ${id} online. Watch trailers, get reviews, and more.`;

  // Get the poster or backdrop image from the API
  /*   const posterUrl = `https://image.tmdb.org/t/p/w780${data?.poster_path || data?.backdrop_path}`;
  
    // Dynamic favicon: Using the poster image of the TV show
    const faviconUrl = `https://image.tmdb.org/t/p/w92${data?.poster_path}`;
   */
  const posterUrl = `/api/image?path=w780${data?.poster_path || data?.backdrop_path}`;
  const faviconUrl = `/api/image?path=w92${data?.poster_path || data?.backdrop_path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/watch/${mediaType}/${id}${season ? `/season/${season}` : ''}${episode ? `/episode/${episode}` : ''}`,
      images: [
        {
          url: posterUrl, // Poster image from TMDB
          width: 780,
          height: 1170,
          alt: `${title} poster`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [posterUrl],
    },
    icons: {
      icon: faviconUrl, // Using the poster image as favicon
    },
  };
}
