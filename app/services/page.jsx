'use client';
import Image from 'next/image';
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
import team from 'public/static/team-2.jpg';
import teamSec from 'public/static/team-1.jpg';
import client1 from 'public/static/client-1.jpg';
import client2 from 'public/static/client.jpg';
import client3 from 'public/static/client-2.jpg';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import SecurityUpdateGoodOutlinedIcon from '@mui/icons-material/SecurityUpdateGoodOutlined';
import VpnLockOutlinedIcon from '@mui/icons-material/VpnLockOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import * as React from 'react';
import { display, spacing } from '@mui/system';

export default function Services(){
    return(
        <div className='bg-[#f0f0f5] pb-[8rem]'>
          <h1 className='mb-[4rem] pt-[2rem] text-center'>Our Services</h1>
            <div className='mt-[5rem] px-[4rem] bg-[#f0f0f5] '>
            <Box sx={{ flexGrow: 1 }} >
              <Grid container spacing={4}>
                <Grid item sm={12} md={6} lg={3} sx={{justifyContent:"center", display:"flex"}}>
                <Card sx={{ maxWidth: 345}} className="card text-center rounded-xl">
                <CardMedia sx={{display: 'flex', alignItems: 'center', justifyContent:"center"}} >
                    <SettingsOutlinedIcon sx={{fontSize:55,mb:3 }} style={{ color: "#273444", }} /></CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{textAlign:"center"}}>
                  AI Solutions
                  </Typography>
                  <Typography variant="body3" color="" className='text-lg font-sans ' >
                    Lizards are a widespread group of squamate reptiles, 
                  </Typography>
                </CardContent>
              </Card> 
                </Grid>

                   <Grid item sm={12} md={6} lg={3} sx={{justifyContent:"center", display:"flex"}} >
                   <Card sx={{ maxWidth: 345 }} className="card text-center rounded-xl" >
                      <CardMedia sx={{display: 'flex', alignItems: 'center', justifyContent:"center"}} >
                       <VpnLockOutlinedIcon sx={{fontSize:55,mb:3 }} style={{ color: "darkRed", }} /></CardMedia>
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{textAlign:"center"}}>
                        Cybersecurity
                        </Typography>
                        <Typography variant="body3" color="" className='text-lg font-sans'>
                          Lizards are a widespread group of squamate reptiles, wit
                        </Typography>
                      </CardContent>
                  </Card> 
                   </Grid>
                   <Grid item sm={12} md={6} lg={3} sx={{justifyContent:"center", display:"flex"}}>
                   <Card sx={{ maxWidth: 345 }} className="card text-center rounded-xl">
                   <CardMedia sx={{display: 'flex', alignItems: 'center', justifyContent:"center"}} >
                    <SecurityUpdateGoodOutlinedIcon sx={{fontSize:55,mb:3 }} style={{ color: "darkGreen", }} /></CardMedia>
                      <CardContent >
                        <Typography gutterBottom variant="h6" component="div" sx={{textAlign:"center"}}>
                          Mobile Development
                        </Typography>
                        <Typography variant="body3" color="" className='text-lg font-sans' >
                          Lizards are a widespread group of squamate reptiles, 
                        </Typography>
                      </CardContent>
                    </Card> 
                  </Grid>

                  <Grid item sm={12} md={6} lg={3} sx={{justifyContent:"center", display:"flex"}}>
                   <Card sx={{ maxWidth: 345 }} className="card text-center rounded-xl">
                   <CardMedia sx={{display: 'flex', alignItems: 'center', justifyContent:"center"}} >
                    <TravelExploreOutlinedIcon sx={{fontSize:55,mb:3 }} style={{ color: "darkBlue", }} /></CardMedia>
                    <CardContent >
                      <Typography gutterBottom variant="h6" component="div" sx={{textAlign:"center"}}>
                        Sotware Consulting
                      </Typography>
                      <Typography variant="body3" color="" className='text-lg font-sans'>
                        Lizards are a widespread group of squamate reptiles, 
                      </Typography>
                    </CardContent>
                  </Card> 
                  </Grid>


                  <Grid item sm={12} md={6} lg={3} sx={{justifyContent:"center", display:"flex"}}>
                   <Card sx={{ maxWidth: 345 }} className="card text-center rounded-xl">
                   <CardMedia sx={{display: 'flex', alignItems: 'center', justifyContent:"center"}} >
                    <SettingsOutlinedIcon sx={{fontSize:55,mb:3 }} style={{ color: "#d45124", }} /></CardMedia>
                    <CardContent >
                      <Typography gutterBottom variant="h6" component="div" sx={{textAlign:"center"}} >
                        Web Development
                      </Typography>
                      <Typography variant="body3" color="" className='text-lg font-sans'>
                        Lizards are a widespread group of squamate reptiles, 
                      </Typography>
                    </CardContent>
                  </Card> 
                  </Grid>

                  <Grid item sm={12} md={6} lg={3} sx={{justifyContent:"center", display:"flex"}}>
                   <Card sx={{ maxWidth: 345 }} className="card text-center rounded-xl">
                   <CardMedia sx={{display: 'flex', alignItems: 'center', justifyContent:"center"}} >
                    <CloudDoneIcon sx={{fontSize:55,mb:3 }} style={{ color: "blue", }} /></CardMedia>
                    <CardContent >
                      <Typography gutterBottom variant="h6" component="div" sx={{textAlign:"center"}}>
                        Cloud Services
                      </Typography>
                      <Typography variant="body3" color="" className='text-lg font-sans'>
                        Lizards are a widespread group of squamate reptiles, 
                      </Typography>
                    </CardContent>
                  </Card> 
                  </Grid>

                  <Grid item sm={12} md={6} lg={3} sx={{justifyContent:"center", display:"flex"}}>
                   <Card sx={{ maxWidth: 345 }} className="card text-center rounded-xl">
                   <CardMedia sx={{display: 'flex', alignItems: 'center', justifyContent:"center"}} >
                    <VisibilityOutlinedIcon sx={{fontSize:55,mb:3 }} style={{ color: "orange", }} /></CardMedia>
                    <CardContent >
                      <Typography gutterBottom variant="h6" component="div" sx={{textAlign:"center"}}>
                        CEO
                      </Typography>
                      <Typography variant="body3" color="" className='text-lg font-sans'>
                        Lizards are a widespread group of squamate reptiles, with 
                      </Typography>
                    </CardContent>
                  </Card> 
                  </Grid>


                  <Grid item sm={12} md={6} lg={3} sx={{justifyContent:"center ", display:"flex"}}>
                   <Card sx={{ maxWidth: 345 }} className="card text-center rounded-xl">
                   <CardMedia sx={{display: 'flex', alignItems: 'center', justifyContent:"center"}} >
                    <RecordVoiceOverOutlinedIcon sx={{fontSize:55,mb:3 }}  style={{ color: "blue", }} /></CardMedia>
                    <CardContent >
                      <Typography gutterBottom variant="h6" component="div" sx={{textAlign:"center"}}>
                        Marketing
                      </Typography>
                      <Typography variant="body3" color="" className='text-lg font-sans' >
                        Lizards are a widespread group of squamate reptiles, 
                      </Typography>
                    </CardContent>
                  </Card> 
                  </Grid>

         
              </Grid>
            </Box>





            </div>
            
        </div>

    )
}