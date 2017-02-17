import React from 'react';
import Title from './Header/Title';
import Nav from './Nav';

export default class Header extends React.Component {
    render(){
        return (
            <header>
                <Title name={this.props.name} title={this.props.title} />
                <Nav navItems={this.props.navItems}/>
            </header>
        )
    }
}