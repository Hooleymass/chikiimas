import React from "react";

import useFetch from "@/hooks/useFetch";
import MovieCard from "@/components/movieCard/RecommendationCard";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

    return (
        <div>
            {data?.results?.map((item, index) => {
                if (item.media_type === "person") return;
                return (
                    <MovieCard
                        key={index}
                        data={item}
                        mediaType={mediaType}
                    />
                );
            })}
        </div>

    );
};

export default Similar;