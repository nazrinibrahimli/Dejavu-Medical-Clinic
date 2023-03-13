'use client'
import React from 'react'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Image from 'next/image';
import landing from 'public/static/landing.jpg'
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const LandingPage = () => {
  return (
    <div className='pl-[2rem] lg:pl-[4rem] py-[3rem] bg-main relative'>
      <Box>
        <Grid container className='pb-[5rem]'>
          <Grid item sm={12} md={12} lg={6} className='flex items-center '>
           <div className=''>
           <h1 className='lg:w-[20rem] font-semibold text-[#252849]  lg:text-4xl leading-normal'>We Are Ready to  <span className='text-light-blue'>Help Your Health </span>Problems</h1>
          <p className='text-gray lg:w-[30rem] my-[3rem]'>All your doctors and services in one feel-good place. Get the care you and your family deserve.</p>
          <Button variant="contained" className='font-sans bg-gradient-to-r from-[#00d4ff] to-[#020024]  text-sm   rounded-3xl mr-[1rem] h-[3rem] hover:bg-gray-dark'>Try Free Consultation</Button>
          <div className='rounded-xl bg-[#00000] pt-auto'>
            <div className='flex my-[2rem]'>
            <div className='mr-[2rem] '>
            <h2 className='text-blue font-bold'>180<span className='text-green'>+</span></h2>
            <p className='text-gray w-[4rem] '>Active Doctor</p>
            </div>
            <div>
            <h2 className='text-blue font-bold'>12K<span className='text-green'>+</span></h2>
            <p className='text-gray w-[4rem]'>Active User</p>
            </div>
            <div className='ml-[2rem]'>
            <h2 className='text-blue font-bold'>20<span className='text-green'>+</span></h2>
            <p className='text-gray w-[4rem]'>Pharmacy</p>
            </div>
            </div>
          </div> 
           </div> 
          </Grid>
          <Grid item sm={12} md={12} lg={6} sx={{display:"flex", backgroundImage:"url('/static/drugstore.jpg')",backgroundPosition:"contain",}} className="lg:p-[1rem]">
          <div className="sm:w-[12rem] lg:w-[22rem] sm:h-[25rem] lg:h-[33rem] rounded-t-full rounded-b-2xl shadow-lg  border-[0.3rem] mr-[0.3rem] border-[white] rounded-b-3xl bg-cover   bg-[url('/static/doctor-1.jpg')] "></div>
          <div className="sm:w-[12rem] lg:w-[22rem] sm:h-[25rem] lg:h-[33rem] rounded-t-full rounded-b-2xl shadow-lg  border-[0.3rem] border-[white] rounded-b-3xl bg-cover  bg-[url('/static/doctor.jpg')] "></div>
          </Grid>
        </Grid>
      </Box>

    </div>
  )
}

export default LandingPage
