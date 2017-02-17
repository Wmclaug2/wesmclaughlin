import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state={
            navItems:['Home','About','Music','Blog']
        }
    }
    render() {
        const headerName = 'Wes McLaughlin';
        const headerTitle = 'Web Developer';
        return (
            <div>
                <Header name={headerName} title={headerTitle} navItems={this.state.navItems}/>
                <Body />
                <Footer navItems={this.state.navItems}/>
            </div>
        )
    }
}