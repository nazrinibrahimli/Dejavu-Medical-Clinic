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
import MeetDoctors from './components/meetDoctors';

export default function Home() {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  
  const handleClickAway = () => {
    setOpen(false);
  };



  return (
    <main  className=''>

    <LandingPage/>
    <Numbers/>  
    <SpecialServices/>
    <Doctors/>
    {/* <MeetDoctors/> */}
<Register/>
    </main>
  )
}
