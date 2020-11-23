import { Box, Button, Grid, InputBase, Paper } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loaded, loading, setData } from '../redux/actions';

export default function SearchForm() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loading())

    const encodedSearch = encodeURIComponent(search);
    // get movies from API
    fetch(`https://www.omdbapi.com/?apikey=59354c85&s=${encodedSearch}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setData(data.Search));
        dispatch(loaded())
      })
  }

  return (
    <Grid container direction="row" justify="center" alignItems="center">
        <Box p={2} mb={2} width="80%" maxWidth={400}>
          <Paper elevation={24} component="form" color="primary" onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Box p={1}>
              <Grid container direction="row" alignItems="center" justify="center">
                <InputBase
                  placeholder="Search"
                  inputProps={{ 'aria-label': 'search movies' }}
                  value={search}
                  onChange={(e) => {setSearch(e.target.value)}}
                  style={{ flexGrow: '1' }}
                />
                <Button type="submit" variant="contained" color="primary" disableElevation>Search</Button>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Grid>
  )
}
