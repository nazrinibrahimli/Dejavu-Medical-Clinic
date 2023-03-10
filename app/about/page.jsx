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
import { Rating } from '@mui/material';

import * as React from 'react';
import { display, spacing } from '@mui/system';

export default function About(){
    return(
        <div className='pb-[8rem]'>

            {/* <h2 className="text-blue font-serif text-center my-[5rem]">Our company is willing to help its customers to experience <span className='underline text-orange'>highest quality</span> and <span className='underline text-orange'>customer satisfaction</span>.</h2> */}
            <Box sx={{ flexGrow: 1, mt:"4rem" }} >
              <Grid container sx={{}}>
                <Grid item xs={12} lg={6} sx={{position: "relative", width:"38rem",height:"33rem"  ,backgroundColor:"#f0f0f5", borderRadius:3,p:"3rem"}}>
                <h1>Our Story</h1>
                <p className='font-sans text-xl text-gray-dark mt-[2rem]'>Founded by Ronan Colleran and Gillian O’Dowd, Azon Recruitment leverages Ronan’s 25+ years of experience in recruitment, to apply specialist recruitment expertise to provide end-to-end solutions across all of our client’s business functions.
                <br/>
                <br/>A’gency's biggest asset is our people. From new grads to very experienced team members, our focus is on building strong lasting relationships, with clients and candidates, based on our deep sectoral expertise.</p>
                </Grid>

                <Grid item xs={12} lg={6} sx={{width:"35rem",height:"30rem", mt:"3rem"}}>
                  <Image src={team} width="38rem" height="full" className='' />

                </Grid>
              </Grid>
            </Box>      
            {/* <h2 className="text-blue font-serif text-center text-2xl my-[5rem]">Our company is willing to help its customers to experience <span className='underline text-orange'>highest quality</span> and <span className='underline text-orange'>customer satisfaction</span>.</h2> */}

            <Box sx={{ flexGrow: 1, mt:"7rem" }} >
              <Grid container sx={{}}>
              <Grid item xs={12} lg={6} sx={{width:"38rem",height:"33rem", mt:"3rem"}}>
                  <Image src={teamSec} width="38rem" height="full"/>
                </Grid>
                <Grid item xs={12} lg={6} sx={{width:"38rem",height:"35rem"  ,backgroundColor:"#f0f0f5", borderRadius:3,p:"3rem"}}>
                <h1>Why Us?</h1>
                <p className='font-sans text-xl text-gray-dark mt-[2rem]'>Founded by Ronan Colleran and Gillian O’Dowd, Azon Recruitment leverages Ronan’s 25+ years of experience in recruitment, to apply specialist recruitment expertise to provide end-to-end solutions across all of our client’s business functions.
                <br/>
                <br/>A’gency's biggest asset is our people. From new grads to very experienced team members, our focus is on building strong lasting relationships, with clients and candidates, based on our deep sectoral expertise.</p>
                </Grid>
              </Grid>
            </Box>  




            <div className='mt-[5rem] px-[4rem]'>
            <h3 className='mb-[4rem] mt-[6rem] text-center text-3xl font-serif text-blue'>Some words from our clients.</h3>
            <Box sx={{ flexGrow: 1 }} >
              <Grid container spacing={4}>
                <Grid item xs={12} lg={4} sx={{justifyContent:"center", display:"flex"}}>
                <Card sx={{ maxWidth: 345}} className="card hovered">
            {/* <CardMedia
              component="img"
              alt="client"
              height="110"
              image="/static/client.jpg"
            /> */}
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Edwin zohir
              </Typography>
              <Rating name="read-only" value={5} readOnly />
              <Typography gutterBottom variant="h6" component="div" sx={{color:"#d45124"}}>
                Businessman
              </Typography>
              <Typography variant="body3" color="" className='text-lg font-sans '>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

          </Card> 
                </Grid>

                   <Grid item xs={12} lg={4} sx={{justifyContent:"center", display:"flex"}} >
                   <Card sx={{ maxWidth: 345 }} className="card" >
            {/* <CardMedia
              component="img"
              alt="atm abb"
              height="140"
              image=""
            /> */}
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Mary Jacob
              </Typography>
              <Rating name="read-only" value={4} readOnly />
              <Typography gutterBottom variant="h6" component="div" sx={{color:"#d45124"}}>
                Doctor
              </Typography>
              <Typography variant="body3" color="" className='text-lg font-sans'>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
 
          </Card> 
                   </Grid>
                   <Grid item xs={12} lg={4} sx={{justifyContent:"center", display:"flex"}}>
                   <Card sx={{ maxWidth: 345 }} className="card">
            {/* <CardMedia
              component="img"
              alt="atm abb"
              height="140"
              image=""
            /> */}
            <CardContent >
              <Typography gutterBottom variant="h6" component="div" >
                Anthony Hop
              </Typography>
              <Rating name="read-only" value={4} readOnly />
              <Typography gutterBottom variant="h6" component="div" sx={{color:"#d45124"}}>
                ML Developer
              </Typography>
              <Typography variant="body3" color="" className='text-lg font-sans '>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

          </Card> 
                  </Grid>
              </Grid>
            </Box>
        {/* <div className='rounded-xl bg-[#00000] pt-auto'>
        <h2 className=" w-[22rem] font-medium text-gray-dark ">Let's see A'gency <span className='text-orange underline'>in numbers.</span></h2>
        <div className='flex my-[2rem]'>
        <div className='mr-[3rem] '>
        <h1 className='text-orange'>50.4K</h1>
        <p className='text-white'>Downloads</p>
        </div>
        <div>
        <h1 className='text-orange'>23K</h1>
        <p className='text-white'>Active users</p>
        </div>
        </div>
        <div className='flex my-[2rem]'>
        <div className='mr-[3rem]'>
        <h1 className='text-orange'>440+</h1>
        <p className='text-white'>User groups</p>
        </div>
        <div>
        <h1 className='text-orange'>6K+</h1>
        <p className='text-white'>Subscribers</p>
        </div>
        </div> 
    </div>  */}






            </div>
            
        </div>

    )
}