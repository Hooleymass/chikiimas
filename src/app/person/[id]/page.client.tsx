'use client'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '@/hooks/useFetch';
import '../style.scss';
import Img from '@/components/lazyLoadImage/img';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const Skeleton = () => (
  <div className="skeleton">
    <div className="skeleton__header"></div>
    <div className="skeleton__section"></div>
    <div className="skeleton__section"></div>
  </div>
);

const Person = () => {
  const { id } = useParams<{id: any}>();
  const { url } = useSelector((state: any) => state.home);
  const { data: credits } = useFetch(`/person/${id}`);
  const { data, loading } = useFetch(`/person/${id}/combined_credits`);
  const [sortOrder, setSortOrder] = useState("popularity");

  const sortCredits = (credits: any[]) => {
    return [...credits].sort((a, b) => {
      if (sortOrder === "popularity") {
        return b.vote_average - a.vote_average;
      } else if (sortOrder === "release_date") {
        return new Date(b.release_date || b.first_air_date).getTime() - new Date(a.release_date || a.first_air_date).getTime();
      } else if (sortOrder === "title") {
        return (a.title || a.name).localeCompare(b.title || b.name);
      }
      return credits;
    });
  };

  if (loading) return <Skeleton />; // Show skeleton loader while fetching

  if (!credits || !data) return <div>Person not found</div>;

  // Handle missing data with defaults
  const avatar = "/avatar.png";
  const profileImg = credits.profile_path ? `${url.profile}${credits.profile_path}` : avatar;
  const biography = credits.biography || "No biography available.";
  const birthday = credits.birthday || " N/A";
  const deathday = credits.deathday || null;
  const placeOfBirth = credits.place_of_birth || " Unknown";
  const aliases = credits.also_known_as && credits.also_known_as.length > 0 ? credits.also_known_as : ["N/A"];

  // Filter movies and TV shows from combined credits
  const movies = data.cast.filter((item: any) => item.media_type === "movie");
  const tvShows = data.cast.filter((item: any) => item.media_type === "tv");
  const knownFor = sortCredits([...movies, ...tvShows]).slice(0, 3); // Top 3

  return (
    <div className="person">
      <div className="person__header pt-20">
        <Img
          src={profileImg}
          alt={credits.name || "Unknown"}
          title={credits.name || "Unknown"}
          className="person__header__image"
        />
        <div className="person__header__info">
          <h1 className="person__header__name">{credits.name || "Unknown"}</h1>
          <p className="person__header__biography">{biography}</p>

          <div className="person__header__details">
            <div className="person__header__detail">
              <span className="person__header__label">Birthday:</span>
              <span className="person__header__value">{birthday}</span>
            </div>
            {deathday && (
              <div className="person__header__detail">
                <span className="person__header__label">Deathday:</span>
                <span className="person__header__value">{deathday}</span>
              </div>
            )}
            <div className="person__header__detail">
              <span className="person__header__label">Place of Birth:</span>
              <span className="person__header__value">{placeOfBirth}</span>
            </div>
            <div className="person__header__aliases">
              <span className="person__header__label">Also Known As:</span>
              <div className="person__header__aliasList">
                {aliases.map((alias, index) => (
                  <span key={index} className="person__header__alias">{alias}</span>
                ))}
              </div>
            </div>
            {data.imdb_id && (
              <a
                href={`https://www.imdb.com/name/${data.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="person__bio__imdb"
              >
                View on IMDb
              </a>
            )}
          </div>
        </div>
      </div>

      {data.external_ids && (
        <div className="person__socialLinks">
          {data.external_ids.twitter_id && (
            <a href={`https://twitter.com/${data.external_ids.twitter_id}`} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          )}
          {data.external_ids.instagram_id && (
            <a href={`https://instagram.com/${data.external_ids.instagram_id}`} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
        </div>
      )}

      <div className="person__knownFor">
        <h2 className="person__knownFor__title">Known For</h2>
        <div className="person__knownFor__list">
          {knownFor.map((item) => (
            <div key={item.id} className="person__knownFor__item">
              <img
                src={item.poster_path ? `${url.poster}${item.poster_path}` : '/no-poster.png'}
                alt={item.title || item.name}
                className="person__knownFor__item__image"
              />
              <p className="person__knownFor__item__title">{item.title || item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="person__section person__movies">
        <h2 className="person__section__title">Movies</h2>
        <div className="person__section__list">
          {movies.map((movie) => (
            <div key={movie.id} className="person__section__item">
              <Img
                src={movie.poster_path ? `${url.poster}${movie.poster_path}` : '/no-poster.png'}
                alt={movie.title}
                className="person__section__item__image"
              />
              <p className="person__section__item__title">{movie.title}</p>
              <span className="person__section__item__character">as {movie.character || "N/A"}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="person__section person__tv">
        <h2 className="person__section__title">TV Shows</h2>
        <div className="person__section__list">
          {tvShows.map((show) => (
            <div key={show.id} className="person__section__item">
              <Link href={`/watch/tv/${show.id}`} title={show.name}>
                <Img
                  src={show.poster_path ? `${url.poster}${show.poster_path}` : '/no-poster.png'}
                  alt={show.name}
                  className="person__section__item__image"
                />
              </Link>
              <p className="person__section__item__title">{show.name}</p>
              <span className="person__section__item__character">as {show.character || "N/A"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Person;
