import React from 'react'
import "./Search.css"
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic'; 
import { Button } from '@material-ui/core';
function Search() {
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="searchicon"/>
                <input />
                <MicIcon/>
            </div>

            <div className="search__buttons">
                <Button type="submit" variant="outlined">Buscar con Google</Button>

                <Button variant="outlined">Me siento con suerte</Button>
            </div>
        </form>
    )
}

export default Search
