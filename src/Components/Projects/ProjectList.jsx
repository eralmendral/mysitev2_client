import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { selectProjectList, selectProjectLoading } from '@Redux/projects/selectors'
import SectionContainer from '@Containers/SectionContainer/SectionContainer';
import Card from './Card';
import './Projects.scss';

const ProjectsComponent = ({ projects, projectIsFetching, history }) => {
    const showProject = (id) => {
        history.push('/projects/' + id);
    }

    const shortDescription = (text) => {
        return text.length > 50 ? text.slice(0, 50) + ' ...' : text;
    }

    useEffect(() => {
        console.log(projects);
    }, [])


    const projectsDiv = projects ?
        <div className="project-container">
            {Object.keys(projects).map((key, i) => (
                <Card className="card" key={i} {...projects[key]} />
            ))}
        </div> : <h1>No Projects</h1>


    return (
        <div id="projects">
            <SectionContainer title="Projects" theme="light">
                <div className="project">
                    {projectIsFetching ? <h1>Loading...</h1> : projectsDiv}
                </div>
            </SectionContainer>
        </div>
    )
}

const mapStateToProps = (state) => ({
    projects: selectProjectList(state),
    projectIsFetching: selectProjectLoading(state)
})

export default connect(mapStateToProps, null)(withRouter(ProjectsComponent));