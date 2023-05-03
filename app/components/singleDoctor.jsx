import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const SingleDoctor = (props) => {
  return (
        <Grid item xs={12} md={6} lg={4} className="">
   <Card  sx={{ maxWidth: 700,maxHeight: 580, borderRadius: 5 ,backgroundColor:"#ffffff" }}  className="transitioned-card mx-auto">
  <CardMedia
    sx={{ height: 380 }}
    image={props.image}
    title="green iguana"
  />
  <CardContent sx={{mx:2, mb:1}}>
    <Typography gutterBottom variant="h5" component="div" className='font-sans font-medium text-blue'>
      {props.title}
    </Typography>
    <Typography variant="body1" color="" className='font-sans h-[7rem]'>
     {props.description}
    </Typography>
  </CardContent>
</Card>
    </Grid>
  )
}

export default SingleDoctor
