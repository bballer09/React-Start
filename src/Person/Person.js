import React from 'react';
const Person = (props) => {
    return (
        <div>
            <p>I am a {props.name} and i am {props.age} years old!!</p>
            {
            props.children==null?
            <p style={{color: 'red'}}>No children</p>:<p>{props.children}</p>}
        </div>
    );
};
export default Person;