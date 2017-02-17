import React from 'react';
import Nav from './Nav';

export default class Footer extends React.Component {
    render(){
        return(
            <footer>
                <Nav navItems={this.props.navItems}/>
            </footer>
        )
    }
}