import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Hire from './components/Hire'
import Project from './components/Project'
import projects from './db.json'


const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>

export default class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <Route exact path='/' render={ Home }>Home</Route>
                    <Route path='/about' render={ About }>About</Route>
                    <Route path='/hire-me' component={ Hire }>Hire Me</Route>
                    <Route exact path='/portfolio' render={ routerProps => {
                        return  <Portfolio {...routerProps} projects={projects} /> }
                    }>Portfolio</Route>
                    <Route path={`/portfolio/:id`} render={ routerProps=> <Project {...routerProps} projects={projects} /> } />
                </Fragment>
            </Router>
        )
    }
}
