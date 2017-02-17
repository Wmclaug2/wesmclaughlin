import React from 'react';

export default class Body extends React.Component {
    render(){
        let loremIpsum = 'Lorem Ipsum '.repeat(100);
        return(
            <p>{loremIpsum}</p>
        )
    }
}