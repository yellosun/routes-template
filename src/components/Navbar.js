import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render () {

        const style = {
            marginRight: 10,
            color: 'black'
        }

        return (
            <div>
                <NavLink to="/" style={style}>Home</NavLink>
                <NavLink to="/about" style={style}>About</NavLink>
                <NavLink to="/portfolio" style={style}>Portfolio</NavLink>
                <NavLink to="/hire-me" style={style}>Hire</NavLink>
            </div>
        )
    }
}
