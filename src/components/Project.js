import React, { Component, Fragment } from 'react'

export default class Project extends Component {
    render () {
        const { match, projects } = this.props
        console.log(projects)
        return (
            <Fragment>
                <h1>{projects[match.params.id].title}</h1>
                <a href='#'>{projects[match.params.id].link}</a>
            </Fragment>
        )
    }
}
