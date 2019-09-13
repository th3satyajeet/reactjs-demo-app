import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <center>
            <div className="Person" >
                <p onClick = { props.click } >I'm <b>{props.name}</b> and {props.age} years old.</p>
                <p>{props.children}</p>
                <input type="text" onChange={ props.changed } value = { props.name } />
            </div>
        </center>
    )
};

export default person;