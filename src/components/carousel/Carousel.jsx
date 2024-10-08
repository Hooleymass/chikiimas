'use client'
import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/img";

import "./style.scss";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import Link from "next/link";

const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home)

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount = dir === "left" ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  }

  //skeleton item
  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowLeftCircleFill className="carouselLeftNav arrow" onClick={() => navigation("left")} />
        <BsFillArrowRightCircleFill className="carouselRighttNav arrow" onClick={() => navigation("right")} />
        {!loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item.poster_path ? url.thumbnail + item.poster_path : '/no-poster.png'
              const iconUrl = item.poster_path ? url.poster + item.poster_path : '/no-poster.png'
              return (
                <div className="carouselItem" key={item.id} >
                  <Link href={`/watch/${item.media_type || endpoint}/${item.id}`} title={item.title || item.name}>
                    <div className="posterBlock" >
                      <Img src={posterUrl} />
                      <CircleRating rating={item.vote_average.toFixed(1)} />
                      <Genres data={item.genre_ids.slice(0, 2)} />
                    </div>
                    <div className="details">
                      <Link href={`/${item.media_type || endpoint}/${item.id}`}>
                        <div className="details__icon-container">
                          <Img className="details__icon" src={iconUrl} />
                        </div>
                      </Link>
                      <div className="details__text-block">
                        <span className="details__text-block__title">
                          {item.title || item.name}
                        </span>
                        <span className="details__text-block__date">
                          {dayjs(item.release_date).format("MMM D, YYYY")}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  )
}

export default Carousel