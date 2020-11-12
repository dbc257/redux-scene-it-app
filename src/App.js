import { Box, Button, Container, Grid, IconButton, InputBase, Paper, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MovieCard from './components/MovieCard';
import { setData } from './redux/actions';

function App() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.results)

  const handleSubmit = (e) => {
    e.preventDefault();

    const encodedSearch = encodeURIComponent(search);
    // get movies from API
    fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${encodedSearch}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setData(data.Search));
      })
  }

  return (
    <Container>
      <Typography variant="h1" align="center">Scene It!</Typography>
      <Grid container direction="row" justify="center" alignItems="center">
        <Box p={2} width="80%" maxWidth={400}>
          <Paper component="form" onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Box p={1}>
              <Grid container direction="row" alignItems="center" justify="center">
                <InputBase
                  placeholder="Search"
                  inputProps={{ 'aria-label': 'search movies' }}
                  value={search}
                  onChange={(e) => {setSearch(e.target.value)}}
                  style={{ flexGrow: '1' }}
                />
                <Button type="submit" variant="contained" disableElevation>Search</Button>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Grid>
      <Grid container spacing={3}>
        { movies.map(movie => {
          return (
            <Grid item xs={3} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Grid>
          )
        }) }
      </Grid>
    </Container>
  );
}

export default App;
