import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import SearchForm from '../components/SearchForm'

export default function Home() {
  const movies = useSelector((state) => state.results)

  return (
    <>
      <Typography variant="h1" align="center">Scene It!</Typography>
      <Link to="/favorites">Favorites</Link>
      <SearchForm />
      <Grid container spacing={3}>
        { movies.map(movie => {
          return (
            <Grid item xs={3} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Grid>
          )
        }) }
      </Grid>
    </>
  )
}
