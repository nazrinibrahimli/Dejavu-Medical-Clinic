'use client';
import React from 'react'
import Image from 'next/image';
import cooperation from 'public/static/cooperation.jpeg';
import slack from 'public/static/slack.png';
import google from 'public/static/google.png';
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

const Numbers = () => {
  return (
      <div className='rounded-xl mx-[3rem] pb-[3rem]'>
        <Box sx={{ flexGrow: 1 }} className=" mx-[2rem] rounded-xl  ">
          <h1 className='text-center pt-[5rem] font-semibold text-[#252849]'>Our <span className='text-light-blue'>Main Services</span> Categories</h1>
          <Grid container spacing={2} className="py-[3.5rem]">
                  
      <Grid item xs={12} md={6} lg={4} className="">
       <Card  sx={{ maxWidth: 350,maxHeight: 590, borderRadius: 5 ,backgroundColor:"#ffffff" }}  className="transitioned-card mx-auto">
      <CardMedia
        sx={{ height: 180 }}
        image="/static/doctor-patient.jpg"
        title="green iguana"
      />
      <CardContent sx={{mx:2, mb:3}}>
        <Typography gutterBottom variant="h5" component="div" className='font-sans font-medium text-blue'>
          Chat with doctor
        </Typography>
        <Typography variant="body1" color="" className='font-sans h-[7rem]'>
          You can connect directly, quickly, and easily, and there is no need to doubt the quality of the consultation and treatment offered.
        </Typography>
      </CardContent>
      <CardActions sx={{mx:2, mb:3}}>
        <Button size="small" className='font-sans text-blue'>Learn More</Button>
      </CardActions>
    </Card>
        </Grid>

            <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 350,maxHeight: 590,borderRadius: 5 ,}} className="transitioned-card mx-auto bg-green">
      <CardMedia
        sx={{ height: 180 }}
        image="/static/drugstore.jpg"
        title="green iguana"
      />
      <CardContent  sx={{mx:2, mb:3}}>
        <Typography gutterBottom variant="h5" component="div" className='font-sans font-medium text-white'>
          Health Store 
        </Typography>
        <Typography variant="body1" color="" className='font-sans text-white h-[7rem]'>
          Talk about the health complaints you are experiencing and don't hesitate to ask about the proper treatment.        </Typography>
      </CardContent>
      <CardActions  sx={{mx:2, mb:3}}>
         <Button size="small" className='font-sans text-white'>Learn More</Button>
      </CardActions>
    </Card>
     </Grid>




        <Grid item xs={12} md={6} lg={4}>
       <Card sx={{ maxWidth: 350,maxHeight: 590,borderRadius: 5 ,}} className="transitioned-card mx-auto bg-[#ffffff]">
       <CardMedia
        sx={{ height: 180 }}
        image="/static/hospital.jpg"
        title="green iguana"
      />
      <CardContent  sx={{mx:2, mb:3}}>
        <Typography gutterBottom variant="h5" component="div" className=' font-sans font-medium text-blue'>
          Visit Hospitals
        </Typography>
        <Typography variant="body1" color="" className='font-sans h-[7rem]'>
          Get priority services in hospitals with Haidoc. Which allows you to go to the hospital more practically and save time.
        </Typography>
      </CardContent>
      <CardActions  sx={{mx:2, mb:3}}>
        <Button size="small" className='font-sans text-blue'>Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
          </Grid>
       </Box>
       </div>


  )
}

export default Numbers
