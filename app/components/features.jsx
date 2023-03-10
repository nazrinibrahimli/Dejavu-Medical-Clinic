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
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import { spacing } from '@mui/system';

const Numbers = () => {
  return (
        <Box sx={{ flexGrow: 1 }} className="mt-[4rem] lg:mx-[8rem] px-[1rem]  md:px-[5rem] py-[3rem] rounded-xl  bg-[#f5f6f7] ">
          <h1 className='text-center text-gray-dark pt-[2rem] font-extralight'>The product we work with </h1>
          <Grid container spacing={2} className="py-[3.5rem]">
             <Grid item xs={12} lg={4} >
            <Card className="mx-auto rounded-lg border-[0.1rem] shadow-none border-blue hover:border-orange py-[3rem]">
             <CardContent>
                <CardMedia sx={{display: 'flex', alignItems: 'center', justifyContent:"center"}} >
                <LiveHelpIcon sx={{fontSize:55,mb:3 }} style={{ color: "blue", }} />
              </CardMedia>
              <Typography gutterBottom variant="h5" component="div" className='font-serif text-center text-blue'>
                24/7 Support
              </Typography>
              <Typography variant="body1" color="" className='font-sans text-center'>
              A'gency provides 24/7 support to all customers all around the world! 
                    </Typography>
            </CardContent>
            </Card>
           </Grid>

     <Grid item xs={12} lg={4}>
    <Card  className="mx-auto rounded-lg border-[0.1rem] shadow-none border-orange hover:border-blue py-[3rem]">

      <CardContent className='px-auto'>
      <CardMedia sx={{display: 'flex', alignItems: 'center', justifyContent:"center"}} >
      <EnhancedEncryptionIcon sx={{ fontSize: 55,mb:3 }} className=' ' style={{ color: "red" }}/>
      </CardMedia>
        <Typography gutterBottom variant="h5" component="div" className='text-center font-serif text-blue'>
            Secure & Fast
        </Typography>
        <Typography variant="body1" color="" className='font-sans text-center'>
          We enable our customers to work with secure and fast platforms. 
          
        </Typography>
      </CardContent>

    </Card>

     </Grid>




        <Grid item xs={12} lg={4}>
       <Card  className=" rounded-lg border-[0.1rem] shadow-none border-blue hover:border-orange py-[3rem]">

      <CardContent >
      <CardMedia sx={{display: 'flex', alignItems: 'center', justifyContent:"center"}} >
        <MobileFriendlyIcon sx={{ fontSize:55,mb:3, }} style={{ color: "green" }}/>
        </CardMedia>
        <Typography gutterBottom variant="h5" component="div" className='font-serif text-center text-blue'>
          Easy Interface
        </Typography>
        <Typography variant="body1" color="" className='font-sans text-center'>
        We appriciate our customers and provide them fully responsive apps.      
        </Typography>
      </CardContent>

    </Card>
        </Grid>
  

          </Grid>
        </Box>



  )
}

export default Numbers
