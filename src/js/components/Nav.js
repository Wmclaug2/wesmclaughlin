import React from 'react';
import {Link} from 'react-router'

export default class Nav extends React.Component {
    render(){
        return(
            <ul>
                {this.props.navItems.map((item)=>{
                    return <Link to={item} key={item.toString()}><li className='nav-item'>{item}</li></Link>
                })}
            </ul>
        )
    }
}