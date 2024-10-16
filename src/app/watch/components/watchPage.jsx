'use client';

import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Spinner from "../../../components/spinner/Spinner";
import Season from "./season";
import Similar from "./Similar";
import Link from "next/link";
import Banner from '@/components/Ads/Banner'

const WatchPage = ({ mediaType, id, season = 1, episode = 1 }) => {
  const [embedUrl, setEmbedUrl] = useState("");
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  useEffect(() => {
    let url;
    if (mediaType === "movie") {
      url = `https://vidsrc.xyz/embed/${mediaType}/${id}`;
    } else if (mediaType === "tv" && season && episode) {
      url = `https://vidsrc.xyz/embed/${mediaType}/${id}/${season}/${episode}`;
    }

    // Fetch the embed page to extract the iframe src
    if (url) {
      fetch(url)
        .then((response) => response.text())
        .then((html) => {
          // Create a DOM parser to parse the HTML
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');

          // Extract the iframe src
          const iframe = doc.querySelector('iframe');
          if (iframe) {
            setEmbedUrl(iframe.src);
          } else {
            console.error("Iframe not found.");
          }
        })
        .catch((error) => {
          console.error("Error fetching embed URL:", error);
        });
    }
  }, [mediaType, id, season, episode]);

  if (loading) return <Spinner initial={true} />;



  const renderSeasons = () => {
    if (!data?.number_of_seasons) return null;

    return (
      <div className="seasonsList">
        {Array.from({ length: data.number_of_seasons }, (_, index) => {
          const seasonNumber = index + 1;
          const isActive = seasonNumber === season;
          const href = `/watch/${mediaType}/${id}/${seasonNumber}/1`;

          return isActive ? (
            <button
              key={seasonNumber}
              className="seasonsList__button seasonsList__button--active"
              disabled
              aria-current="page"
            >
              Season {seasonNumber}
            </button>
          ) : (
            <Link
              key={seasonNumber}
              href={href}
              className="seasonsList__button"
            >
              Season {seasonNumber}
            </Link>
          );
        })}
      </div>
    );
  };



  return (
    <div className="watchPage">
      <ContentWrapper>
        <div className="videoContainer">
          <iframe
            src={embedUrl}
            title="Watch Video"
            frameBorder="0"
            allowFullScreen
            className="videoFrame"
          ></iframe>
        </div>
        <section className="overflow-x-scroll">
          <Banner adKey='b2f03a02ed04a36818f1f04eb3e333b9' height={90} width={728} />
        </section>
        <div className="infoContainer">
          <h1 className="title">{data?.title || data?.name}</h1>
          {mediaType !== 'tv' && <p className="overview">{data?.overview}</p>}
        </div>

        <div>
          {/* Render all seasons with the current one highlighted */}
          {mediaType === "tv" && renderSeasons()}
        </div>
        {/* Render the Season component only if mediaType is "tv" */}
        {mediaType === "tv" && season && <Season mediaType={mediaType} id={id} currentSeason={season} currentEpisode={episode} />}
      </ContentWrapper>
    </div>
  );
};

export default WatchPage;
