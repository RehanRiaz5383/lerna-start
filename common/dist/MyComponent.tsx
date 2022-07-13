import * as React from 'react';

interface properties{
    title:String
}

const MyComponent = (props:properties) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>)
}

export default MyComponent;