import React from 'react'
import {Box, Grid, InputBase, Paper, Button} from '@material-ui/core';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setData, loading, loaded} from '../redux/action'

export default function SearchForm() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
       
        e.preventDefault();
        dispatch(loading())
    
        fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${encodeURIComponent(search)}`)
          .then((res) => res.json())
          .then(data => {
            dispatch(setData(data.Search))
            dispatch(loaded())
          })
          .catch(e=> console.log(e))
      }
    return (
    <Grid container direction="row" justify="center" alignItems="center">
        <Box p={2} width="80%" maxWidth={400}>
          <Paper component="form" onSubmit={handleSearch} style={{ width: '100%' }}>
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
    )
}
