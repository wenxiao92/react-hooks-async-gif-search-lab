import React, {useEffect, useState} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer(){  
    const [giphies, setGiphies] = useState([])
    const [gif, setGif] = useState("dolphin")
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${gif}&api_key=xO6pyBXzUs2B0yag25IYlXCZmdJVzWB0&rating=g`

    useEffect(()=> {
        fetch(`${apiUrl}&limit=3`)
        .then((r) => r.json())
        //notice the additional {} within the .then to pull all the data within the data array (without the array)
        .then(({data}) => {const gifs = data.map((gif) => (
            {url: gif.images.original.url}))
            setGiphies(gifs)
        })
    },[gif])

    return(
        <div style={{ display: "flex" }}>
        <GifList giphyProp = {giphies}/>
        <GifSearch onSubmit={setGif}/>
        </div>
    )
}


export default GifListContainer