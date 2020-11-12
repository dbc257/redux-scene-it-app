import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'

export default function MovieCard(props) {
  const { Title, Year, Poster } = props.movie;

  return (
    <Card style={{ height: '100%' }} >
      <CardActionArea>
        <CardMedia image={ Poster } style={{ height: '400px'}}/>
        <CardContent>
          <Typography variant="h5">{ Title }</Typography>
          <Typography color="textSecondary">{ Year }</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary">Add Movie</Button>
      </CardActions>
    </Card>
  )
}
