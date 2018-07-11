import React from 'react';
import './Characters.css';

const Characters = props => (

        <div className='container flex-container' >
            <img className='character' alt={props.id} id={props.id} src={props.img} onClick={()=>props.clickCharacter(props.id)}></img>
        </div>
);

export default Characters;
