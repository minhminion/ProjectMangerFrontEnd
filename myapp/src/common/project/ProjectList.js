import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
import ProjectItem1 from './ProjectItem1'
import ProjectItem2 from './ProjectItem2'
import $ from 'jquery'

export default class ProjectList extends Component {
    render() {
        
        const { min , max , contents } = this.props
        return (
            contents.slice(min,max).map((content) => (
                    <ProjectItem2 key={content.key} content={content} />
                ))                
        )
    }
}
