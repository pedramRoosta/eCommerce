import React from 'react'
import './search-box.css'

export const Searchbox = ({onChangefunc,placeHolder}) => (

    <div>
        <input type="search" placeholder={placeHolder} className="searchBox" onChange={onChangefunc}/>
    </div>
)