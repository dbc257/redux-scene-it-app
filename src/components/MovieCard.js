import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import React from 'react';
// import './MovieCard.css';
import AddIcon from '@material-ui/icons/Add';
import SubtractIcon from '@material-ui/icons/Delete';
import {useDispatch, useSelector} from 'react-redux';
import { addMovie, deleteMovie } from '../redux/action';



export default function MovieCard({movie}) {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.favorites)
    const handleAddMovie = () => dispatch(addMovie(movie))
    const handleDeleteMovie = () => dispatch(deleteMovie(movie.imdbID))
    const found = movies.find(movieElem => movieElem.imdbID === movie.imdbID)

    return (
        <Card className="movie-card" style={{height: '100%'}}>
            <CardActionArea >
                <CardMedia 
                style={{height: '400px' }}
                image={movie.Poster}
                title={`${movie.Title}'s Movie Poster`}
                />
                <CardContent>
                    <Typography variant="h5">{movie.Title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{movie.Year}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {found ? 
                (
                <IconButton size="small" color="primary" onClick={handleDeleteMovie}>
                    <SubtractIcon />
                </IconButton>
                
                ): (
                <IconButton size="small" color="primary" onClick={handleAddMovie}>
                    <AddIcon />
                </IconButton>
                    
                )}
            </CardActions>
        </Card>
    )
}
