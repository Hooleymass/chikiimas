import React from 'react';
import WatchPage from '../../components/watchPage';
import Sidebar from '../../components/sidebar';
import '../../watch.scss';
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { fetchMediaDetails } from '../useFetch.client';

const Watch = async ({ params }: { params: any }) => {
  const { mediaType, id } = await params;
  // fetch labguage using axios from /api/language response e.g. { language: 'en-US'}
  // const { language } = await fetch('/api/language').then(res => res.json());


  if (mediaType === 'tv') {
    revalidatePath(`/watch/${mediaType}/${id}`);
    redirect(`/watch/tv/${id}/1/1`);
  }


  return (
    <div className='main overflow-x-hidden'>
      <div className='watchPage'>
        <WatchPage
          mediaType={mediaType}
          id={id}
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
  const { mediaType, id } = params;

  // Ensure we're only handling movies
  if (mediaType !== "movie") {
    return;
  }
  let language='en-US'
  // Fetch movie details for dynamic metadata
  const data = await fetchMediaDetails(mediaType, id, language );

  const title = data?.title || "Movie";
  const description = data?.overview || `Watch the latest movie ${title} online. Stream now and enjoy exclusive content.`;

  // Dynamic image URLs
/*   const posterUrl = `https://image.tmdb.org/t/p/w780${data?.poster_path || data?.backdrop_path}`;
  const faviconUrl = `https://image.tmdb.org/t/p/w92${data?.poster_path || data?.backdrop_path}`;
 */
  const posterUrl = `/api/image?path=w780${data?.poster_path || data?.backdrop_path}`;
  const faviconUrl = `/api/image?path=w92${data?.poster_path || data?.backdrop_path}`;

  // Dynamic URL for the movie
  const url = `/watch/${mediaType}/${id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: posterUrl, // Poster or backdrop image from TMDB
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
      icon: faviconUrl, // Dynamic favicon using the poster or backdrop image
    },
  };
}
