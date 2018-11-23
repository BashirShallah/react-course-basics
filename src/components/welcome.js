import React from 'react';

function Test(props){
    return <div>
        welcome {props.name +' '+props.lastName} from function component.
        <p>{props.children}</p>
    </div>;
}

export default Test;
