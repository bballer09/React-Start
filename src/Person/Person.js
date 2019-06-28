import React from 'react';
const Person = (props) => {
    return (
        <div onClick={props.click}>
            <p>I am a {props.name} and i am {props.age} years old!!</p>
            {
            props.children==null?
            <p style={{color: 'red'}}>No children</p>:<p>{props.children}</p>}
            <input type="text" onChange={props.type}/>
        </div>
    );
};
export default Person;