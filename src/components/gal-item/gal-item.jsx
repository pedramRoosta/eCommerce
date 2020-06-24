import React from 'react'
import './gal-item.css'

export const Galitem = (props) =>(

 <div className="item">
    <span className="itemTitle">{props.itemId}</span>
    <img src={`https://picsum.photos/id/${props.itemId}/200/300`} />
    <p className="itemCaption">{props.itemName}</p>
</div>
)