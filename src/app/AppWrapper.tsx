'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration, getGenres } from '@/store/homeSlice';
import { fetchDataFromApi } from '@/utils/api';

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();
    const { url } = useSelector((state) => state.home);

    useEffect(() => {
        fetchApiConfig();
        genresCall();
    }, []); // []-dependency

    const fetchApiConfig = () => {
        fetchDataFromApi('/configuration').then((res) => {
            console.log('API Response:', res);
            if (res && res.images) {
                const url = {
                    backdrop: res.images.secure_base_url + 'original',
                    poster: res.images.secure_base_url + 'original',
                    thumbnail: res.images.secure_base_url + 'w1920_and_h800_multi_faces',
                    profile: res.images.secure_base_url + 'original',
                };
                dispatch(getApiConfiguration(url));
            } else {
                console.error('API response does not contain images:', res);
            }
        }).catch((error) => {
            console.error('Failed to fetch API configuration:', error);
        });
    };


    const genresCall = async () => {
        let promises: any[] = [];
        let endPoints = ['tv', 'movie'];
        let allGenres = {};

        endPoints.forEach((url) => {
            promises.push(fetchDataFromApi(`/genre/${url}/list`));
        });

        const data = await Promise.all(promises);
        data.map(({ genres }) => {
            return genres.map((item) => (allGenres[item.id] = item));
        });

        dispatch(getGenres(allGenres));
    };

    return (
        <div>
            {children}
        </div>
    );
};

export default AppWrapper;
