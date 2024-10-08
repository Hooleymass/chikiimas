import React from "react";
import dayjs from "dayjs";
import Link from 'next/link'
import { useSelector } from "react-redux";

import "./recommendation.scss";
import Img from "../lazyLoadImage/img";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

const MovieCard = ({ data, fromSearch, mediaType }) => {
    const { url } = useSelector((state) => state.home);
    const posterUrl = data.poster_path
        ? url.thumbnail + data.poster_path
        : "/assets/no-poster.png";

    const iconUrl = data.poster_path
        ? url.poster + data.poster_path
        : "/assets/no-poster.png";
    return (
        <div
            className="movieCard"
        >
            <Link href={`/watch/${data.media_type || mediaType}/${data.id}`} title={data.title || data.name}>
                <div className="posterBlock">
                    <Img className="posterImg" src={posterUrl} />
                    {!fromSearch && (
                        <React.Fragment>
                            <CircleRating rating={data.vote_average.toFixed(1)} />
                            <Genres data={data.genre_ids.slice(0, 2)} />
                        </React.Fragment>
                    )}
                </div>
                <div className="details">
                    <div className="details__icon-container">
                        <Link href={`/${data.media_type || mediaType}/${data.id}`} title={data.title || data.name}>
                            <Img className="details__icon" src={iconUrl} />
                        </Link>
                    </div>
                    <div className="details__text-block">
                        <span className="details__text-block__title">
                            {data.title || data.name}
                        </span>
                        <span className="details__text-block__date">
                            {dayjs(data.release_date).format("MMM D, YYYY")}
                        </span>
                    </div>
                </div>
            </Link >
        </div>
    );
};

export default MovieCard;