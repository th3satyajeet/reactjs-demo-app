import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div class="Person">
            <p onClick = { props.click } >I'm <b>{props.name}</b> and {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={ props.changed } value = { props.name } />
        </div>
    )
};

export default person;