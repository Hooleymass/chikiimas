'use client'
import React from "react";
import Link from "next/link";
import useFetch from "@/hooks/useFetch";

const Season = ({ mediaType, id, currentSeason, currentEpisode }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/season/${currentSeason}`);

  return (
    <div className="season-container">
      <div className="season__episodes">
        {data?.episodes?.map((episode, index) => (
          <Link 
            href={`/watch/${mediaType}/${id}/${currentSeason}/${episode.episode_number}`} 
            key={index}
            className={`season__episode ${episode.episode_number === currentEpisode ? 'current' : ''}`}
          >
            {episode.episode_number}
          </Link>
        ))}
      </div>
      <div className="season__overview">
        {data?.episodes?.find(ep => ep.episode_number === currentEpisode)?.overview}
      </div>
    </div>
  );
};

export default Season;
