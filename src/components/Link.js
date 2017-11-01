import React from 'react';

function Link(props) {
    return (
        <a href={props.to}>{props.name}</a>
    );
}
export default Link;