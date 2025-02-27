import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

import "./style.scss";

import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import Img from "@/components/lazyLoadImage/img";


const Cast = ({ data, loading }) => {
    const { url } = useSelector((state) => state.home);

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };
    return (
        <div className="castSection">
            <ContentWrapper>
                <div className="sectionHeading">Top Cast</div>
                {!loading ? (
                    <div className="listItems">
                        {data?.map((item) => {
                            let imgUrl = item.profile_path ? url.profile + item.profile_path : "/assets/avatar.png";
                            return (
                                <div key={item.id} className="listItem">
                                    <Link href={`/person/${item.id}`} className="link" title={item.name}>
                                        <div className="profileImg"><Img src={imgUrl} /></div>
                                        <div className="name">{item.name}</div>
                                        <div className="character">{item.character}</div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="castSkeleton">
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Cast;