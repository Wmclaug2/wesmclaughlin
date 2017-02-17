import React from 'react';

export default class Title extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}