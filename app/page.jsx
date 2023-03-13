'use client'
import React from 'react'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Image from 'next/image';
import {Box,Grid} from '@mui/material';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Typography,Pagination,} from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import LandingPage from './components/landing';
import Register from './components/register';
// import bonadea from "public/static/bonadea."
import Services from './services/page';
import Numbers from './components/services';
import SpecialServices from './components/specialServices';
import Doctors from './components/doctors';


export default function Home() {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  
  const handleClickAway = () => {
    setOpen(false);
  };



  return (
    <main  className='bg-main'>

    <LandingPage/>
    {/* <Box>
      <Grid container>
        <Grid item xs={12} lg={6} sx={{display:"flex", justifyContent: "space-around", alignItems:"center", mb:"3rem"}}>
          <Image src={microsoft} width="150" height=""/>
          <Image src={dropbox} width="150" height=""/>
          <Image src={slack} width="110" height=""/>
            </Grid>
        <Grid item xs={12} lg={6}   sx={{display:"flex", justifyContent: "space-around", alignItems:"center", mb:"3rem" }}>
          <Image src={google} width="100" height=""/>
          <Image src={oracle} width="100" height=""/>
          <Image src={mcKinsey} width="100" height=""/>
        </Grid>
      </Grid>
      </Box> */}

    <Numbers/>  
    <SpecialServices/>
    <Doctors/>


{/* 





<ClickAwayListener
  mouseEvent="onMouseDown"
  touchEvent="onTouchStart"
  onClickAway={handleClickAway}
>
  <Box sx={{ position: 'relative' }}>
    <button type="button" onClick={handleClick}>
    <Box sx={{ flexGrow: 1 }} >
              <Grid container spacing={4}>
                <Grid item xs={12} lg={4} sx={{justifyContent:"center", display:"flex"}}>
                <Card sx={{ maxWidth: 350,maxHeight: 590,borderRadius: 5 ,}} className="transitioned-card mx-auto">
                <CardMedia
              sx={{ height: 160 }}
              image="/static/client.jpg"
             title="green iguana"
             />
            <CardContent  sx={{mx:2, mb:3}}>
              <Typography gutterBottom variant="h6" component="div">
                Edwin zohir
              </Typography>
              <Typography gutterBottom variant="h6" component="div" sx={{color:"#d45124"}}>
                Businessman
              </Typography>
            </CardContent>
          </Card> 
                </Grid>

                   <Grid item xs={12} lg={4} sx={{justifyContent:"center", display:"flex"}} >
                   <Card sx={{ maxWidth: 345 }} className="card" >
            <CardMedia
              component="img"
              alt="atm abb"
              height="140"
              image=""
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Mary Jacob
              </Typography>
              <Typography gutterBottom variant="h6" component="div" sx={{color:"#d45124"}}>
                Doctor
              </Typography>
            </CardContent>
 
          </Card> 
                   </Grid>
                   <Grid item xs={12} lg={4} sx={{justifyContent:"center", display:"flex"}}>
                   <Card sx={{ maxWidth: 345 }} className="card">
            <CardMedia
              component="img"
              alt="atm abb"
              height="140"
              image=""
            />
            <CardContent >
              <Typography gutterBottom variant="h6" component="div" >
                Anthony Hop
              </Typography>
              <Typography gutterBottom variant="h6" component="div" sx={{color:"#d45124"}}>
                ML Developer
              </Typography>
            </CardContent>

          </Card> 
                  </Grid>
              </Grid>
            </Box>
    </button>
    {open ? (
      <Box >
               <Grid item xs={12} lg={4} sx={{justifyContent:"center", display:"flex"}}>
                   <Card sx={{ maxWidth: 345 }} className="card">
            <CardContent >
              <Typography variant="body3" color="" className='text-lg font-sans '>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

          </Card> 
                  </Grid>

 </Box>
    ) : null}
  </Box>
</ClickAwayListener> */}

<Register/>
    </main>
  )
}
