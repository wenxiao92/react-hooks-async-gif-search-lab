import React, {useState} from "react";

function GifSearch({onSubmit}){

    const [search, setSearch] = useState("")

    function onSearch(e){
        setSearch(e.target.value)
    }

    function handleSearch(){
        //console.log(search)
        onSubmit(search)
    }


    return(
        <div className="searchbar">
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value={search}
          onChange={onSearch}
        />
        <button onClick={handleSearch}>Find Gifs</button>
      </div>
    )
}

export default GifSearch