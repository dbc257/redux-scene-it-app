import { Link, Grid, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../redux/actions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';

const useClasses = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexGrow: '1'    
  },
  content: {
    textAlign: 'center',
    justifyContent: 'center'
  },
  poster: {
    flex: '0 0 500px',
  },
  button: {
    alignSelf: 'center'
  }
})

export default function MovieCard(props) {
  const classes = useClasses();
  const { Title, Year, Poster } = props.movie;
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.favorites);

  const foundMovie = movies.find((movie) => movie.imdbID === props.movie.imdbID)

  const handleAddMovie = () => {
    dispatch(addFavorite(props.movie))
  }

  const handleRemoveMovie = () => {
    dispatch(deleteFavorite(props.movie.imdbID))
  }

  return (
  <Grid item xs={12} sm={6} md={4} lg={4}>
      { foundMovie ? (
      <Link onClick={handleRemoveMovie} className={classes.root}>
        <Card className={classes.root}>
          <CardActionArea className={classes.card}>
            <CardMedia image={ Poster }  className={classes.poster} />
            <CardContent  className={classes.content} >
              <Typography variant="h5">{ Title }</Typography>
              <Typography color="textSecondary">{ Year }</Typography>
            </CardContent>
            <br/>
            <CardActions className={classes.button} >
              <Button variant="contained" className={classes.button}><DeleteIcon /></Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </Link>
      ) : (
      <Link onClick={handleAddMovie} className={classes.root}>
        <Card className={classes.root}>
          <CardActionArea className={classes.card}>
            <CardMedia image={ Poster }  className={classes.poster} />
            <CardContent  className={classes.content} >
              <Typography variant="h5">{ Title }</Typography>
              <Typography color="textSecondary">{ Year }</Typography>
            </CardContent>
            <br/>
            <CardActions className={classes.button} >
              <Button color="secondary" variant="contained" className={classes.button}><FavoriteIcon /></Button>
            </CardActions>
          </CardActionArea>
        </Card> 
      </Link>
      ) }
  </Grid>
  )
}