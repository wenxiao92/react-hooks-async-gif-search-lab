import React from "react";

function GifList({giphyProp}){

//console.log(giphyProp)
const displayGiphies = giphyProp.map((giphy) => (
    
    <li key={giphy.url}><img src={giphy.url} alt="gif" /></li>
))


    return(
        <ul>
            {displayGiphies}
        </ul>

        )
}

export default GifList