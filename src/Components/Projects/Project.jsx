import React from 'react'
import { withRouter, Redirect } from "react-router-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import { selectProject } from '@Redux/projects/selectors'
import { connect } from "react-redux";
import Header from '@Components/Header/Header';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const Project = ({ project, history, match }) => {

  if (!project) {
    history.push('/')
  }

  const [index, setIndex] = React.useState(0);
  const projectImages = project ? project.images ? project.images : [] : [];
  const projectThumbnail = project ? project.thumbnail : null;
  const images = [projectThumbnail, ...projectImages]

  try {
    return (
      <>
        <Header />
        <div className="project-page">
          <div className="project-images-container">
            <Gallery
              index={index}
              onRequestChange={(i) => {
                setIndex(i);
              }}
              enableControls={true}
              enableIndicators={true}
              objectFit='cover'
            >
              {images.map((img, i) => (
                <GalleryImage key={i} style={{ filter: 'saturation(2))', maxHeight: '500px' }} objectFit="contain" key={img} src={img} />
              ))}
            </Gallery>
          </div>

          <div className="project-description">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.url} target="_blank" className={`${!project.url ? 'eventsNone' : ''}`} >
                <Tooltip title="URL">
                  <span>
                    <Button disabled={!project.url} variant="outlined" size="small" color="primary" color="primary" aria-label="URL" size="medium">
                      <LinkIcon style={{ fontSize: '38px' }} />
                    </Button>
                  </span>
                </Tooltip>
              </a>

              <a href={project.github} target="_blank" className={`${!project.github ? 'dnone' : ''}`} >
                <Tooltip title="Github">
                  <Button variant="outlined" size="small" color="primary" aria-label="Github" size="medium">
                    <GitHubIcon style={{ fontSize: '38px' }} />
                  </Button>
                </Tooltip>
              </a>
            </div>
          </div>
        </div>

      </>

    )

  } catch (error) {
    return <Redirect to="/" />
  }
};


const mapStateToProps = (state, ownProps) => ({
  project: selectProject(ownProps.match.params.id)(state)
})

export default connect(mapStateToProps, null)(withRouter(Project));
