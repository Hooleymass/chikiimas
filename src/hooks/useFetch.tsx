'use client'
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "@/utils/api";

const useLocal = () => {
    return navigator.language || 'en-US'
}
const useFetch = (url: any) => {

    //3 states created , initial state of those null
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");//before api call, loading..
        setData(null);
        setError(null);

        fetchDataFromApi(`${url}?language=${useLocal()}`)
            .then((res) => {
                setLoading(false);//after calling api, loading stop
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;