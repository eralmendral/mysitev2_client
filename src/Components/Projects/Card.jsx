import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LinkIcon from '@material-ui/icons/Link';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  media: {
    height: '220px',
    paddingTop: '56.25%', // 16:9
    opacity: 0.9,
    filter: 'saturate(200%)'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function RecipeReviewCard(props) {

  const classes = useStyles();
 
  const shortDescription = (text) => {
    return text.length > 50 ? text.slice(0, 35) + ' ...' : text;
  }

  const defaultImage = "https://images.pexels.com/photos/2473183/pexels-photo-2473183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

  return (
    <Card className="card">
      <CardMedia
        className={classes.media}
        image={props.thumbnail ?? defaultImage}
        title="Paella dish"
      />

      <CardContent className="card-content">
        <h3 className="title">{props.title}</h3>
        <Typography className="description" component="p">
          {shortDescription(props.description)}
        </Typography>
      </CardContent>

      <div className="cardActions">
        <a href={props.url} target="_blank" rel="noopener noreferrer"  className={`${!props.url ? 'eventsNone' : ''}`} >
          <Tooltip title="URL">
            <span>
              <IconButton disabled={!props.url} color="primary" aria-label="URL" size="medium">
                <LinkIcon style={{ fontSize: '38px' }} />
              </IconButton>
            </span>
          </Tooltip>
        </a>


        <a href={props.github} target="_blank" rel="noopener noreferrer" className={`${!props.github ? 'eventsNone' : ''}`} >
          <Tooltip title="Github">
            <IconButton disabled={!props.github} color="primary" aria-label="Github" size="medium">
              <GitHubIcon style={{ fontSize: '28px' }} />
            </IconButton>
          </Tooltip>
        </a>

        <Link to={`projects/${props.id}`}>
          <Tooltip title="View Details">
            <IconButton color="primary" aria-label="View Details" size="medium">
              <VisibilityIcon style={{ fontSize: '32px' }} />
            </IconButton>
          </Tooltip>
        </Link>

      </div>
    </Card>
  );
}