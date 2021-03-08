import React from 'react'
import '../../styles/giphyScreen.css'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className="giphyItem">
            <div className="giphyItem__img" >
                <img className="giphyItem__img--item" src={ url } alt={ title } />
             
            </div>
        </div>
    )
}
