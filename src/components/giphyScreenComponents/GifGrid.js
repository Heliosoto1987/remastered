import React from 'react';
import { useFetchGifs } from '../giphyScreenComponents/hooks/useFetchGifs';
import { GifGridItem } from '../giphyScreenComponents/GifGridItem';

import '../../styles/giphyScreen.css'

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <div className="gifGrid">
            <h1 className="gifGrid__title"> {category} </h1>

            { loading && <p className="gifGrid__loading">Loading</p>}

            <div className="gifGrid__container">

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </div>
    )
}
