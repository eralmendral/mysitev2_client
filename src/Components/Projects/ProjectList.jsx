import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Card from './Card';
import { connect } from 'react-redux'
import { selectProjectList, selectProjectLoading } from '@Redux/projects/selectors'

// import { Spinner } from 'react-bootstrap'

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
        <div class="project-container">
            {Object.keys(projects).map((key, i) => (
                <Card key={i} {...projects[key]} />
            ))}
        </div> : <h1>No Projects</h1>


    return (
        <div className="project">
            <h3 className="text-center mt-5 sectionTitle">Personal Projects</h3>
            {projectIsFetching ? <h1>Loading...</h1> : projectsDiv}
        </div>
    )
}

const mapStateToProps = (state) => ({
    projects: selectProjectList(state),
    projectIsFetching: selectProjectLoading(state)
})

export default connect(mapStateToProps, null)(withRouter(ProjectsComponent));