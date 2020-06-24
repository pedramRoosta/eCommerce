import React from 'react'
import './gal-list.css'
import { Galitem } from '../gal-item/gal-item';

export const GalList = (props) => {
    return (
        <div className="gal-list">
            {props.galItems.map(m=><Galitem key={m.id} itemId={m.id} itemName={m.name}/>)}
        </div>
    );
}
