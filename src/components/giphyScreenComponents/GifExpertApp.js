import React, { useState } from 'react'
import { AddCategory } from '../giphyScreenComponents/AddCategory';
import { GifGrid } from '../giphyScreenComponents/GifGrid';

import '../../styles/giphyScreen.css'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['coding']);

    return (
        <div className="gifScreen">
            <header className="gifScreen__header">
                <div className="gifScreen__title">
                <div>GIPHY</div>
                <div>Developers Api</div>
                </div>
                <AddCategory setCategories={setCategories} />

            </header>

            <ol className="gifScreen__main">
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>

        </div>
    )
}
