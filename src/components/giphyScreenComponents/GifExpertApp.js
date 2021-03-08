import React, { useState } from 'react'
import { AddCategory } from '../giphyScreenComponents/AddCategory';
import { GifGrid } from '../giphyScreenComponents/GifGrid';

import '../../styles/giphyScreen.css'

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['coding']);

    return (
        <div className="gifScreen">
            <header className="gifScreen__header"
            >
            <h3 className="gifScreen__h3">GIPHY Developers Api</h3>
            <AddCategory setCategories={ setCategories } />
            <hr />

            </header>

            <ol className="gifScreen__main">
                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>

        </div>
    )
}
