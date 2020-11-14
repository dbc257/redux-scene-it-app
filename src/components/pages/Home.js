import React from 'react'
import NavBar from '../NavBar';
import SearchForm from '../SearchForm';
import MovieCard from '../MovieCard';
import {Typography, Grid} from '@material-ui/core';
import {useSelector} from 'react-redux';

export default function Home() {
    const movies = useSelector(state => state)
    return (
        <>
            <NavBar></NavBar>
          <Typography variant="h1" align="center">Scene It!</Typography>
          <SearchForm />
          <Grid container spacing={3} style={{marginTop: '12px'}}>
            {movies.results.map(movie => {
              return (
                <Grid key={movie.imdbID} item xs={4}>
                  <MovieCard movie={movie}/>
                </Grid>
              )
            })}
          </Grid>
        </>
    )
}
